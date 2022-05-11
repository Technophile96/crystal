import React from 'react'
import './dashboard.css'
import logo from './logopng.png'
import axios from 'axios' 
import { useState } from 'react'

const dashboard = () => {
    // retriveName();
    // const [teahList, setList] = useState([]); 
    // const retriveName = (e) =>{
    //     e.preventDefault();
    //     axios.post("https://crystal-delta-banking.herokuapp.com/api/name",{
    //         CustID:localStorage.getItem('Name'),
    //     }).then((response)=>{
    //        console.log(response);
    //        setList(response.data);
    //     });
    //   };

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
        {/* {teahList.map((item, index)=>{
            return(
            <h1 className='username'>Greetings {item.custname}</h1>
            )
        })} */}
           <h1 className='username'>Greetings {localStorage.getItem('Name')}</h1>
            <div className='detailbox'>
                <div className='options'>
                    <button className='btn1 active'>Account Summary</button>
                    <button className='btn2'>Transfer Fund</button>
                </div>
                <div className='display'>
                    <h1>Account Summary</h1>
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
