import React, { useState } from 'react'
import './loginpart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Loginpart = () => {
   
  let navigate = useNavigate(); 
  const [username,setUsernameReg] = useState("");
  const [Password,setPasswordReg] = useState("");
  const loginsystem = (e) =>{
    e.preventDefault();
    axios.post("https://crystal-delta-banking.herokuapp.com/register",{
      customerID:username,
      userPwd:Password,
    }).then((response)=>{
       console.log(response);
       if(response.data.status==="200"){
         toast.success("Login  Successfull!");
         navigate("./dashboard");
       }
       else{
         //alert("Wrong username/password combination!");
         toast.error("Wrong username/password");
       }
    });
  };

  return (
    <div className='Loginpart'>
        <h6>Login to your account</h6>
        <div className='FORM'>
          <form >
          <label>
            Customer ID<br></br>
            <input 
            type='text' 
            style={box} 
            onChange={(e)=>{
              setUsernameReg(e.target.value);
              }} />
              <br></br>
            <br></br>
            Password<br></br>
            <input type='password' style={box} onChange={(e)=>{
              setPasswordReg(e.target.value);
              }}
              /><br></br>
            <br></br>
            <br></br>
            <button onClick={loginsystem} style={suh}>Login</button>
          </label>
        </form>
        </div>
    </div>
  )
}

export default Loginpart

const box={
    width:'100%',
    height:'50px'
  }
  
  const suh={
    width:'100%',
    height:'50px',
    backgroundColor:'#3399ff'
  }