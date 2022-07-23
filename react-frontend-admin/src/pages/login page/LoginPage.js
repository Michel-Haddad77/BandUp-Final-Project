import {useState} from 'react';
import './styles.css';
import url from '../../constants/url';
import axios from 'axios';

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    
  //when user presses on Login button
  async function login(){

      //linking with login api
      axios({
          method: 'post',
          url: url + 'user/login',
          data: {
              email, 
              password
          }
      }).then(function (response) {
          console.log(response.data);
          //store user token and info in async storage
          try {
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('user_info', JSON.stringify(response.data.user_info));
          } catch(error) {
              console.log(error);
          }
      }).catch(function (error){
          console.log(error);
      })
  }

  return (
    <div className='login-body'>
      <h1 className="brand" >Band Up</h1>
      <div className="login-container">
            <h3 className="login-h3">Welcome Admin</h3>
            <div>
              <div>
                <label>Email</label><br/>
                <input 
                    type="text" 
                    placeholder="admin@bandup.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                /><br/>
              </div>
              
              <div>
                <label>Password</label><br/>
                <input 
                    type= 'password'
                    placeholder="admin password"
                    className='input'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                /><br/>
              </div>

            </div>
      </div>
    </div>
    
  )
}
