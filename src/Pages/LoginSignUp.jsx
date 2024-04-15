import React, { useState } from "react";
import './CSS/LoginSignup.css';


const LoginSignUp =()=>{

    const [state,setState]=useState("Login");

    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    

    const login =async()=>{
        console.log("login executed ",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
         if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");

         }else{
           alert(responseData.errors) ;
         }


    }

    const signup =async()=>{
        console.log("signup executed" ,formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
         if(responseData.success){
            localStorage.setItem('auth-tokrn',responseData.token);
            window.location.replace("/");

         }else{
           alert(responseData.errors) ;
         }
    }

    return (
    <div className="loginSignup">
        <div className="loginSignup-container">
            <h1>{state}</h1>
            <div className="loginSignup-fields" >
               {state ==="Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" ></input>:<></>} 
                <input type="email"  name="email" value={formData.email} onChange={changeHandler}  placeholder="Email Adress" ></input>
                <input type="password" name="password" value={formData.password} onChange={changeHandler}  placeholder="Password" ></input>

            </div>
            <button onClick={()=>{ state==="Login"?login():signup() }}>Continue</button>
            {state ==="Sign Up"?
            <p className="loginSignup-login">Already have an account ?
            <span onClick={()=>{setState("Login")}} >Login here</span></p>:

            <p className="loginSignup-login">Create an account ?
            <span onClick={()=>{setState("Sign Up")}} >Click here</span></p>}


            
            <div className="loginSignup-agree">
                <input type="checkbox" name="" id="" ></input>
                <p>By continuing ,i agree to the terms of use & privacy policy.</p>
                
            </div> 

        </div>


    </div>
    )
}
export default LoginSignUp