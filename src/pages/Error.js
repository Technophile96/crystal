import React from 'react'
import error404 from './404.gif'

const Error = () => {
  return (
    <>
    <img src={error404} alt="oh you found it :)" style={img}/>
    <h1 style={{color:'rgb(103, 102, 102)'}}>Page not Found</h1>
    </>
  )
}

export default Error

const img={
  height:"500px",
  width:"620px"
}