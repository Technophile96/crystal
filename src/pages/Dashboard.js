import React from 'react'
import './dashboard.css'
import logo from './logopng.png'
import axios from 'axios' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    
    let navigate = useNavigate(); 
    const [teahList, setList] = useState([]); 
    const retriveName = (e) =>{
        const id=localStorage.getItem('Name');
        e.preventDefault();
        axios.post("https://crystal-delta-banking.herokuapp.com/api/name",{
            CustID:id,
        }).then((response)=>{
           console.log(response);
           setList(response.data);
        });
      };

  return (
      <>
        <nav>
            <div className='div-header' onLoad={retriveName}>
                <div>
                    <img src={logo} className='nhm' alt="Description of Home"/>
                </div>
                <div style={heda} className='btn'>
                    <button className='btnn' onClick={navigate("./")}>Log out</button>
                </div>
            </div>
        </nav>
        {teahList.map((item, index)=>{
            return (
        <main className='main'>
        
            <h1 className='username'>Greetings {item.custname}</h1>
        
            <div className='detailbox'>
                <div className='options'>
                    <button className='btn1 active'>Account Summary</button>
                    <button className='btn2'>Transfer Fund</button>
                </div>
                <div className='display'>
                    <p className='title'>Account Summary</p>
                    <div className='accdetails'>
                        <div className='topic'>
                            <p className='topic1'>Savings Account</p>
                            <p className='topic2'>Closing Balance: {item.savings}.00</p>
                        </div>
                        <div className='fulldetails'>
                            <div className='det1'>
                                <p>Account No: {item.idAccounts}</p>
                                <p>Name : {item.custname}</p>
                            </div>
                            <div className='det2'>
                                <p>Branch : {item.branch}</p>
                                <p>IFSC code : {item.IFSC}</p>
                            </div>
                        </div>
                        <button className='buttoon'>View Statement</button>
                    </div>
                </div>
            </div>
        </main>
            )
        })}
       </>
  )
}

export default Dashboard

const heda={
    display:'flex',
    flexDirection:'row'
}
