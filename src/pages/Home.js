import React, {useState, useEffect} from 'react';
import "./home.css"
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("https://crystal-delta-banking.herokuapp.com/api/get");
        setData(response.data);
    };

    useEffect(() =>{
        loadData();
    }, []);

    return (
        <>
        <div style={{marginTop: "150px"}}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Inedx</th>
                        <th style={{textAlign:"center"}}>ID</th>
                        <th style={{textAlign:"center"}}>PWD</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>{
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.idcustomer}</td>
                                <td>{item.userPwd}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Home