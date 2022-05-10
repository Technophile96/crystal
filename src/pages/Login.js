import React from 'react'
import './login.css'
import Loginpart from './Loginpart.js'
import LOGO from './logopng.png'

const Login = () => {
  return (
    <> 
        <div className='image'>
          <img src={LOGO} alt="lgo for the project"/>
        </div>
        <div className='hovering'>
          <Loginpart/>
        </div>
        <div className='split left'>
            <div className='centered'>
              <p className='test'>Welcome to <br/><span style={{color:'#996600'}}>
                Crystal Delta </span><br/>Banking</p>
            </div>
        </div>
        <div className='split right'>
            <div className='centered'>
            </div>
        </div>
        
    </>
  )
}

export default Login