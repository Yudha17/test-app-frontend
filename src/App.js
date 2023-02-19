import React, { useEffect, useState } from "react";
import profile from "./images source/user.png";
import email from "./images source/email.jpg";
import pass from "./images source/pass.png";
import Axios from "axios";
import './App.css';

function App() {

  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      if(response.data.message){
        console.log(response);
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus('Login Successfull');
      }
      
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if(response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].username);
      }
      
    });
  },[]);

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" 
                    onChange={(e) => { setUsernameLog(e.target.value); }}
                    placeholder="user name" 
                    className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password"
                    onChange={(e) => { setPasswordLog(e.target.value); }} 
                    placeholder="password" 
                    className="name"/>
           </div>
          <div className="login-button">
          <button onClick={login}>Login</button>
          </div>
           
            <p className="notification">
              {loginStatus}
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default App;
