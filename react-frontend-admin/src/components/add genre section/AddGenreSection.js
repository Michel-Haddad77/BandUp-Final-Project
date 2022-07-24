import { useState } from 'react';
import './styles.css';
import axios from 'axios';
import url from '../../constants/url';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export default function AddGenreSection() {
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    //when user presses on create button
    function addGenre(){

        //linking with login api
        axios({
            method: 'post',
            url: url + 'admin/genre',
            data: {
                genre_name: name, 
                picture
            }
        }).then(function (response) {
            console.log(response.data);
            alert("New Genre Added, please refresh");
            
        }).catch(function (error){
            console.log(error);
            alert(error.response.data);
        })
    }

    //when admin clicks on upload picture button
    function uploadPicture(e){
            console.log(e.target.files[0]);
            let file = e.target.files[0];

            getBase64(file);        
    }

    //this function makes the image file to base64 format
    function getBase64(file){
        let reader = new FileReader();

        //to base 64
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            let result = reader.result;
            //remove the first part of the base 64 string because it is already added for each picture
            result = result.replace("data:image/png;base64,", "");
            setPicture(result);
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
        <button className='btn' onClick={addGenre}>Create Genre</button>

    </div>
  )
}
