import React from 'react';
import './styles.css';

export default function LoginPage() {
  return (
    <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <div>
              <label>Email</label><br/>
              <input 
                  type="text" 
                  placeholder="admin@bandup.com"
                  onChange={(e) => {
                      //setEmail(e.target.value);
                  }}
                  required
              /><br/>
            </div>
            
            <div>
              <label>Email</label><br/>
              <input 
                  type= 'password'
                  placeholder="admin password"
                  className='input'
                  onChange={(e) => {
                      //setEmail(e.target.value);
                  }}
                  required
              /><br/>
            </div>
    </div>
  )
}
