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
            <h1 className='username'>Greetings Muthukumaran M</h1>
            <div className='detailbox'>
                <div className='options'>
                    <h1>options</h1>
                </div>
                <div className='display'>
                    <h1>display</h1>
                </div>
            </div>
        </main>
       </>
  )
}

export default dashboard

const heda={
    display:'flex',
    flexDirection:'row'
}
