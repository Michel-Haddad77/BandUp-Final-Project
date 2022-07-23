import React from 'react'

export default function LoginPage() {
  return (
    <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input 
                type="text" 
                placeholder="admin@bandup.com"
              
                onChange={(e) => {
                    //setEmail(e.target.value);
                }}
                required
            /><br/>
    </div>
  )
}
