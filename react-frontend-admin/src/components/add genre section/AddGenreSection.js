import { useState } from 'react';
import './styles.css';

export default function AddGenreSection() {
    const [name, setName] = useState("");

  return (
    <div className='add-genre-container'>
        <h2 className='title'>Add Genre</h2>
        <div className='input-container'>
            <label>Name</label><br/>
            <input 
                type="text" 
                placeholder="Enter a name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                required
            /><br/>
        </div>

        <div className='btn-container'>
            <button className='btn'>Upload Picture</button>
            <button className='btn'>Create Genre</button>
        </div>
    </div>
  )
}
