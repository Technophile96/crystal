import React from 'react'
import './dashboard.css'
import logo from './logopng.png'
import axios from 'axios'
import { useState } from 'react';
import Popup from './Popup';

const Dashboard = () => {
    const id=localStorage.getItem('Name');
    const [teahList, setList] = useState([]);
    const [tnsList, setTnsList] = useState([]); 
    const retriveName = (e) =>{
        e.preventDefault();
        axios.post("https://crystal-delta-banking.herokuapp.com/api/name",{
            CustID:id,
        }).then((response)=>{
           console.log(response);
           setList(response.data);
        });
      };
      const retriveTransactions = (e) =>{
        e.preventDefault();
        axios.get("https://crystal-delta-banking.herokuapp.com/api/tns",{
            CustID:id,
        }).then((response)=>{
           console.log(response);
           setTnsList(response.data);
        });
      };

      const [isOpen, setIsOpen] = useState(false);
 
      const togglePopup = () => {
        setIsOpen(!isOpen);
      }

  return (
      <>
        <nav>
            <div className='div-header' onLoad={retriveName}>
                <div>
                    <img src={logo} className='nhm' alt="Description of Home"/>
                </div>
                <div style={heda} className='btn'>
                    <button className='btnn' >Log out</button>
                </div>
            </div>
        </nav>
        {teahList.map((item, index)=>{
            return (
        <main className='main'>
        
            <h1 className='username'>Greetings {item.custname}!</h1>
            
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
                            <p className='topic2'>Closing Balance: <span style={amt}>{item.savings}.00</span></p>
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
                        <button className='buttoon' onClick={togglePopup}>View Statement</button>
                        {isOpen && <Popup
                        content={<>
                         {tnsList.map((tnsitem, tnsindex)=>{
                          return (
                              <>
                            <b>Design your Popup</b>
                            <table className='styled-table'>
                            <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>Date</th>
                                    <th style={{textAlign:"center"}}>Description</th>
                                    <th style={{textAlign:"center"}}>Transaction No</th>
                                    <th style={{textAlign:"center"}}>credit/debit</th>
                                    <th style={{textAlign:"center"}}>Closing Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={tnsitem.id}>
                                    <td>{tnsitem.Date}</td>
                                    <td>{tnsitem.Description}</td>
                                    <td>{tnsitem.TransactionNo}</td>
                                    <td>{tnsitem.creditdebit}</td>
                                    <td>{tnsitem.balance}</td>
                                </tr>
                            </tbody>
                            </table>
                            </>
                            )
                         })}
                        </>}
                        handleClose={togglePopup}
                        />}
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
const amt={
    color: '#44c7e1'
}