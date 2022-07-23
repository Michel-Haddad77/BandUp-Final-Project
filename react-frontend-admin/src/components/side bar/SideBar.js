import React from 'react';
import './styles.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <img  src={require('../../assets/logo.png')} className='logo'/>
        <h1 className='admin'>Administrator</h1>
    </div>
  )
}
