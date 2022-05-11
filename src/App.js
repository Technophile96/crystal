import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
