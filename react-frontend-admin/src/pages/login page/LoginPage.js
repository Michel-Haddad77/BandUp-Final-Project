import React from 'react';
import './styles.css';

export default function LoginPage() {
  return (
    <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input 
                type="text" 
                placeholder="admin@bandup.com"
                className='input'
                onChange={(e) => {
                    //setEmail(e.target.value);
                }}
                required
            /><br/>
    </div>
  )
}
