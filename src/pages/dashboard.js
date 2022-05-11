import React from 'react'
import './dashboard.css'
import logo from './logopng.png'

const dashboard = () => {
  return (
      <>
        <nav>
            <div className='div-header'>
                <div>
                    <img src={logo} className='nhm' alt="Description of Home"/>
                </div>
                <div style={heda} className='btn'>
                    <button className='btnn'>Log out</button>
                </div>
            </div>
        </nav>
        <main className='main'>
            <h1>Greetings Muthukumaran M</h1>
        </main>
       </>
  )
}

export default dashboard

const heda={
    display:'flex',
    flexDirection:'row'
}
