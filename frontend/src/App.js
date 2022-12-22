import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';
import CustomerFile from './pages/CustomerFile';
import CustomersList from './pages/CustomersList';
import ChangePassword from './pages/ChangePassword';
import VetoFile from './pages/VetoFile';
import Signup from './pages/Signup';
import Signup_confirmation from './pages/Signup_confirmation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup-confirmation' element={<Signup_confirmation/>}></Route>

        <Route path="/new-customer" element={<NewCustomer />}/>
        <Route path="/edit-customer" element={<EditCustomer />}/>

        <Route path="/customer" element={<CustomerFile />}/>
        <Route path="/customers-list" element={<CustomersList />}/>
        <Route path="/change-password" element={<ChangePassword />}/>
        <Route path='/veterinary' element={<VetoFile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
