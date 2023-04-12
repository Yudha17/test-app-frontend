import React, { useState } from "react"
import name from "./images sources/name icon.png"
import email from "./images sources/email icon.png"
import pass from "./images sources/pass icon.png"
import confpass from "./images sources/confirm password icon.png"
import rotterr from "./images sources/rootterr mutual LOGO.png"
import Axios from "axios"
import './Register.css'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"



function Register() {

  const [fullNameReg, setFullNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [confPasswordReg, setConfPasswordReg] = useState('');

  let [registerStatus, setRegisterStatus] = useState('on')
  let registerBlur = `register-button2-${registerStatus? 'on':'off'}`
  
  const [loginNotification, setLoginNotification] = useState('');
  const [loginNotification2, setLoginNotification2] = useState('');

  const [loginAuthenticated, setLoginAuthenticated] = useState('');

  Axios.defaults.withCredentials = true

  const allowedEmailRegex = /[@]*[.]/
  const allowedPasswordRegex = /[!@#$%^&*`~()_{}[=|":';<>?,. ]*[A-Z]+/

  let navigate = useNavigate()
  

  const register = () => {
      if(fullNameReg.length==0 && emailReg.length==0 && passwordReg.length==0 && confPasswordReg==0){
      
        setLoginNotification('Please insert all value on all input placeholder provided !') 
        setLoginNotification2('')
      
        
        
          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
           
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length==0 && passwordReg.length==0 && confPasswordReg==0){
      
        setLoginNotification('Please insert 3 values on 3 input placeholder provided !') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length ==0 && emailReg.length > 1 && passwordReg.length==0 && confPasswordReg==0){
      
        setLoginNotification('Please insert 3 values on 3 input placeholder provided !') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length ==0 && emailReg.length == 0 && passwordReg.length > 1 && !passwordReg.match(allowedPasswordRegex) && confPasswordReg==0){
      
        setLoginNotification('Please insert 3 values on 3 input placeholder provided !') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length > 1 && !emailReg.match(allowedEmailRegex) && passwordReg.length==0 && confPasswordReg==0){
      
        setLoginNotification('Please check format of email you have inserted !')
        setLoginNotification2('Email should have at least "@" and "." !')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length==0 && confPasswordReg==0){
      
        setLoginNotification('Please insert 2 values on 2 input placeholder provided !') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && !passwordReg.match(allowedPasswordRegex) && confPasswordReg==0){
      
        setLoginNotification('Please check format of password you have inserted !')
        setLoginNotification2('Password should have at least "special character" and "capital letter" !')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && passwordReg.match(allowedPasswordRegex) && confPasswordReg==0){
      
        setLoginNotification('Please insert 1 values on 1 input placeholder provided !') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      }

      else if(fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && !passwordReg.match(allowedPasswordRegex) && confPasswordReg.length > 1 && !confPasswordReg.match(allowedPasswordRegex)){
      
        setLoginNotification('Please check format of password you have inserted !')
        setLoginNotification2('Password should have at least "special character" and "capital letter" !')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if(fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && passwordReg.match(allowedPasswordRegex) && confPasswordReg.length > 1 && !confPasswordReg.match(allowedPasswordRegex)){
      
        setLoginNotification('Please check format of password you have inserted !')
        setLoginNotification2('Password should have at least "special character" and "capital letter" !')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      } 

      else if (fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && passwordReg.match(allowedPasswordRegex) && confPasswordReg.length > 1 && confPasswordReg.match(allowedPasswordRegex) && passwordReg === confPasswordReg){
      
        Axios.post("http://localhost:3001/register", {
          full_name: fullNameReg,
          email: emailReg,
          password: passwordReg,
          confirm_password: confPasswordReg
        }).then((response) => {
          console.log(response);
          if(response.data.message){
            setLoginNotification(response.data.message);
          }

          if(response.data.message !== 'Registration Unsuccessful. Email already exist in database !'){
            setLoginNotification('Registration Successfully !') 
            setLoginNotification2('')
    
              setTimeout(() => {
    
                setRegisterStatus(registerStatus == 'off')
                
              }, 100)
    
              setTimeout ( () => {
    
                navigate("/", {
                  state: 
                    { 
                      message: "Please use email and password registered successfully !"
                    },
                })
                  
              }, 1000)
          }
        })

        
      
      }

      else if (fullNameReg.length > 1 && emailReg.length > 1 && emailReg.match(allowedEmailRegex) && passwordReg.length > 1 && passwordReg.match(allowedPasswordRegex) && confPasswordReg.length > 1 && confPasswordReg.match(allowedPasswordRegex) && passwordReg !== confPasswordReg){
      
        setLoginNotification('Password value and Confirm Password value are not same') 
        setLoginNotification2('Please check synchronization between 2 Password values !')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      }

      else {
      
        setLoginNotification('Please insert value preferencetially from Top continue to Bottom!') 
        setLoginNotification2('')

          setTimeout(() => {

            setRegisterStatus(registerStatus == 'off')
            
          }, 100)
      
      }

      

  }


  const login = () => {
    setTimeout ( () => {

      const changeClass1 = document.querySelector('.login-button2')
      changeClass1.className = 'login-button2-animate-hide'

      const changeClass2 = document.querySelector('.register-button2-on')
      changeClass2.className = 'register-button2-animate-hide'

        
    }, 200) 

    setTimeout ( () => {

              

      navigate("/")
                
    }, 600)
  }

  
  const nameInputChange = (event) => {
    
    setFullNameReg(event.target.value)
  

    if(fullNameReg.length >= 0){
      setRegisterStatus(registerStatus !== 'on')
      
     
    } 

  }

  const emailInputChange = (event) => {
    
    setEmailReg(event.target.value)
    

    if(emailReg.length >= 0){
      setRegisterStatus(registerStatus !== 'on')
      
     
    } 

  }

  const passwordInputChange = (event) => {
    
    setPasswordReg(event.target.value)
   

    if(passwordReg.length >= 0){
      setRegisterStatus(registerStatus !== 'on')
      
     
    } 

  }

  const confPasswordInputChange = (event) => {
    
    setConfPasswordReg(event.target.value)
    

    if(confPasswordReg.length >= 0){
      setRegisterStatus(registerStatus !== 'on')
      
     
    } 

  }


  return (
    <div className="mainregister">
     <div className="register-box1">
       <div>
         <div>
           <h1 className="title">Register Page</h1>
            <div>
              <img src={rotterr} alt="softwarelogo" className="logo"/>
            </div>

              <div className="first-input-register">
                <img src={name} alt="fullname" className="icon"/>
                <input  type="text" 
                        onChange={nameInputChange}
                        placeholder="full name" 
                        className="textinput"/>
              </div>

              <div className="second-input-register">
                <img src={email} alt="email" className="icon"/>
                <input  type="text" 
                        onChange={emailInputChange}
                        placeholder="user name" 
                        className="textinput"/>
              </div>

              <div className="third-input-register">
                <img src={pass} alt="pass" className="icon"/>
                <input  type="password"
                        onChange={passwordInputChange} 
                        placeholder="password" 
                        className="textinput"/>
              </div>

              <div className="fourth-input-register">
                <img src={confpass} alt="pass" className="icon"/>
                <input  type="password"
                        onChange={confPasswordInputChange} 
                        placeholder="confirm password" 
                        className="textinput"/>
              </div>
           <div>
         
            <motion.button className="login-button2" onClick={login}>
                    
              Login
            </motion.button>
         
          
          </div>
          <div>
          <motion.button className={registerBlur} onClick={register}>
              Register
          </motion.button>
          </div>

           
            <p className="notification">
              {loginNotification}
            </p>
            <p className="notification2">
              {loginNotification2}
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  )
}

export default Register
