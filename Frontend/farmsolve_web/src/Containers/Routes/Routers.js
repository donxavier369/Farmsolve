import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../User/Register';
import Login from '../User/Login';
import Home from '../User/Home';
import BlogPostForm from '../Blog/Write';
import Oauth from '../User/Oauth';

function AppRouter() {
  return (
    
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/blogpost' element={<BlogPostForm/>} /> 
        <Route path='/oauth' element={<Oauth/>}/>
      </Routes>
  );
}

export default AppRouter;
