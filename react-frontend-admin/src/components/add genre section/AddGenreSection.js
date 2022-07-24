import { useState } from 'react';
import './styles.css';

export default function AddGenreSection() {
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    //when admin clicks on upload picture button
    function uploadPicture(e){
            console.log(e.target.files[0]);
            let file = e.target.files[0];

            getBase64(file);        
    }

    function getBase64(file){
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = function(){
            let result = reader.result;
            result = result.replace("data:image/png;base64,", "");
            console.log("result=>", result)
            //not working
            setPicture(result);
            console.log("setPicture=>",picture);
        }
    }
  return (
    <div className='add-genre-container'>
        <h2 className='title'>Add Genre</h2>
        <div className='input-container'>
            <label>Name</label><br/>
            <input 
                type="text" 
                placeholder="Enter a name"
                value={name}
                className='input'
                onChange={(e) => {
                    setName(e.target.value);
                }}
                required
            /><br/>
        </div>
        <input type ='file' onChange={uploadPicture} className='custom-file-input'/>
        <button className='btn'>Create Genre</button>

    </div>
  )
}
