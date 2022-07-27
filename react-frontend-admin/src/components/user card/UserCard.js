import React from 'react';
import './styles.css';
import { TiDelete } from "react-icons/ti";


export default function UserCard({is_user, name, picture, genre_instrument, deleteUser}) {

  return (
    <div className='user-container'>
        <img 
          src={picture? `data:image;base64,${picture}`: require('../../assets/profile.png')} 
          className="user-image"
        />
        <h3 className='name'>{name}</h3>
        <h4 className='genre'>{genre_instrument}</h4>
        {is_user && <TiDelete className="delete-btn" onClick={deleteUser}/>}
        
    </div>
  )
}
