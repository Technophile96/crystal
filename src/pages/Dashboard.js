import React from 'react'
import './dashboard.css'
import logo from './logopng.png'
import axios from 'axios' 
import { useState } from 'react'
import useCollapse from 'react-collapsed';

const Dashboard = () => {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
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
                    <button className='btnn'>Log out</button>
                </div>
            </div>
        </nav>
        <main className='main'>
        {teahList.map((item, index)=>{
            return(
            <h1 className='username'>Greetings {item.custname}</h1>
            )
        })}
            <div className='detailbox'>
                <div className='options'>
                    <button className='btn1 active'>Account Summary</button>
                    <button className='btn2'>Transfer Fund</button>
                </div>
                <div className='display'>
                    <h1>Account Summary</h1>
                    <div>
                    <button {...getToggleProps()}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </button>
                    <section {...getCollapseProps()}>Collapsed content 🙈</section>
                    </div>
                </div>
            </div>
        </main>
       </>
  )
}

export default Dashboard

const heda={
    display:'flex',
    flexDirection:'row'
}
