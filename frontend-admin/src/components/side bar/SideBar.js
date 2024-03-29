import React from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate();

    //when admin logs out
    function logout(){
        localStorage.clear();
        navigate('/');
    }
    
    return (
        <div className='sidebar'>
        <div>
            <img  src={require('../../assets/logo.png')} className='logo'/>
            <h1 className='admin'>Administrator</h1>
        </div>
            <button 
                className='sidebar-btn' 
                onClick={()=>navigate('/home')}
            >Users</button>

            <button 
                className='sidebar-btn' 
                onClick={()=>navigate('/genres')}
            >Genres</button>

            <button 
                className='sidebar-btn' 
                onClick={()=>navigate('/instruments')}
            >Instruments</button>

            <button 
                className='sidebar-btn' 
                onClick={logout}
            >Logout</button>


        </div>
    )
}
