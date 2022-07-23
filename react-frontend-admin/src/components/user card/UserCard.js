import React from 'react';
import './styles.css';
import { TiDelete } from "react-icons/ti";

export default function UserCard() {
  return (
    <div className='user-container'>
        <img src={require('../../assets/background2.jpg')} className="user-image"/>
        <h3>User Name</h3>
        <h4>Genre</h4>
        <TiDelete/>
    </div>
  )
}
