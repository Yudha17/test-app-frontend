import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import profile from "./images sources/user.png"
import email from "./images sources/email icon.png"
import pass from "./images sources/pass icon.png"
import Axios from "axios"
import { motion} from "framer-motion"
import './Login.css';



function Login() {

  window.history.replaceState({}, document.title)

  const location = useLocation()
  


  useEffect(() => {

    if(location.state){
      console.log(location.state)
      setTimeout ( () => {
  
       setHistory(location.state.message)
          
      }, 1000) 
    }
      
  }, [])


        const [history, setHistory] = useState('')
        

        const [emailLog, setEmailLog] = useState('')
        const [passwordLog, setPasswordLog] = useState('')

        
        /*
        const [loginStatus, setLoginStatus] = useState('false')*/
        const [loginNotification, setLoginNotification] = useState('')
        const [loginNotification2, setLoginNotification2] = useState('')

        /*
        const [loginAuthenticated, setLoginAuthenticated] = useState('')*/

        let [loginStatus, setLoginStatus] = useState('on')

        let loginBlur = `login-button1-${loginStatus? 'on':'off'}`

        let [triggerAnimation, setTriggerAnimation] = useState('appear')

        let loginAppearTrigger = `login-button1-animate-${triggerAnimation? 'appear':'hide'}`

        let registerAppearTrigger = `register-button1-animate-${triggerAnimation? 'appear':'hide'}`

        let [firstSetup, setFirstSetup] = useState('login-button1-on')

        let firstSetupAppear = `${firstSetup? 'login-button1-on' : 'login-button1-animate-appear'}`


        const allowedEmailRegex = /[@]*[.]/
        const allowedPasswordRegex = /[!@#$%^&*`~()_{}[=|":';<>?,. ]*[A-Z]+/
        Axios.defaults.withCredentials = true

        let navigate = useNavigate()


        const register = () => {

            setTimeout ( () => {

              setTriggerAnimation(triggerAnimation == 'hide')

              const changeClass = document.querySelector('.login-button1-on')
              changeClass.className = 'login-button1-animate-hide'
   
            }, 200)


            setTimeout ( () => {

              navigate("/register")
                        
            }, 600)
          
        }
        

        const login = () => {

          if(emailLog.length==0 && passwordLog.length==0){
          
            setLoginNotification('Please insert email value and password value !') 
            setLoginNotification2('')
        

              setTimeout(() => {

                setLoginStatus(loginStatus == 'off')
                
                console.log(loginStatus)
              }, 100)
          
          } 

          else if (emailLog.length > 1 && !emailLog.match(allowedEmailRegex) && passwordLog.length==0){
            setLoginNotification('Please check format of email you have inserted !')
            setLoginNotification2('Email should have at least "@" and "." !')
        

              setTimeout(() => {

                setLoginStatus(loginStatus == 'off')
                
                console.log(loginStatus)
              }, 100)
          }

          else if (emailLog.length > 1 && emailLog.match(allowedEmailRegex) && passwordLog.length==0){
            setLoginNotification('Please insert 1 values on 1 input placeholder provided !')
            setLoginNotification2('')
        

              setTimeout(() => {

                setLoginStatus(loginStatus == 'off')
                
                console.log(loginStatus)
              }, 100)
          }

          else if (emailLog.length > 1 && emailLog.match(allowedEmailRegex) && passwordLog.length > 1 && !passwordLog.match(allowedPasswordRegex) ){
            setLoginNotification('Please check format of password you have inserted !')
            setLoginNotification2('Email should have at least "Capital Letter" and "Special Character" !')
        

              setTimeout(() => {

                setLoginStatus(loginStatus == 'off')
                
                console.log(loginStatus)
              }, 100)
          }
          

          else {

            Axios.post("http://localhost:3001/login", {
                email: emailLog,
                password: passwordLog,
                }).then((response) => {
                  if(response.data.message){
                      console.log(response)
                      setLoginNotification(response.data.message)
                      setLoginNotification2('') 
                      setLoginStatus(loginStatus == 'off')
                  } else {
                      console.log(response)
                      localStorage.setItem('token', response.data.token)
                      setLoginNotification('Login Successfully')  
                      setLoginNotification2('')  
                      setHistory(history == null)
                      setTimeout ( () => {

                        navigate("/dashboard")
                                  
                      }, 1500)
                
                  }
            })

          }

        }
            
        const emailInputChange = (event) => {
          
          setEmailLog(event.target.value)
          
      
          if(emailLog.length >= 0){
            setLoginStatus(loginStatus !== 'on')
            
           
          } 
      
        }
        
        const passwordInputChange = (event) => {
    
          setPasswordLog(event.target.value)
         
      
          if(passwordLog.length >= 0){
            setLoginStatus(loginStatus !== 'on')
            
           
          } 
      
        }
        
  
 
  
  
  return (
    <div className="mainlogin">
     <div className="login-box1">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
              <h1>Login Page</h1>
              <div className="first-input-login">
                <img src={email} alt="email" className="icon"/>
                <input 
                        type="text" 
                        onChange={emailInputChange}
                        placeholder="user name" 
                        className="textinput"
                        />
              </div>
              <div className="second-input-login">
                <img src={pass} alt="pass" className="icon"/>
                <input 
                        type="password"
                        onChange={passwordInputChange} 
                        placeholder="password" 
                        className="textinput"/>
              </div>
                  
                    <motion.p  className = {registerAppearTrigger}
                        onClick={register}>
                          Register
                    </motion.p>

                    <div className="login-button-container">
                        <motion.button className={loginBlur} onClick={login}>
                        Login
                        </motion.button>
            
                    </div>
   
                  <p className="notification1">
                    {loginNotification} 
                  </p>
                  <p className="notification2">
                    {loginNotification2}
                  </p>
                  <p className="notification3">
                    {history}
                  </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  )
}

export default Login
