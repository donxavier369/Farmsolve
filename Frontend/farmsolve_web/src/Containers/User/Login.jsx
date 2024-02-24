import React, { useState } from 'react';
import './Login.css';
import instance from '../Utils/axios';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import {Navigate, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {setCredentials} from '../../Redux/Slices/userAuthSlice'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e, 'eeeeeeeee');
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.email, formData.password);

    try {
      const response = await instance.post('/auth/token/obtain/', {
        email: formData.email,
        password: formData.password,
      });
      // Handle the response as needed
      console.log(response,"response");
      if (response.status === 200){
        const decodeAccessToken = jwtDecode(response.data.access)
        const is_active = decodeAccessToken.is_active
        try{
          const decodeAccessToken = jwtDecode(response.data.access)
          if(is_active === true){
            dispatch(setCredentials({decodeAccessToken,...response.data}))
            toast.success('Login Successfull')
            navigate('/');
          }else{
            toast.error('Account is blocked')
            console.log('Account is blocked')
          }

        }catch{
          console.log('token not decoded')
        }
      }else{
        toast.error(`Login failed: ${response.data.error}`);
        console.log('login faild', response.data.error);  
      }
    } catch (error) {
      toast.error(`Login failed`);
      console.error('Login Faild', error.message);
    }
  };

  return (
    <div className='login'>
      <div className='loginform'>
        <h3>Welcome Back.</h3>
        <h1>Login To Home</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder='Email' onChange={handleInputChange} /><br />
          <input type="password" name="password" placeholder='Password' onChange={handleInputChange} /><br />
          <div className='action_btns'>
            <button id='login_btn' type="submit">Login</button>
            <button><a href="register/">Register</a></button>
          </div>
        </form>
      </div>
      <div className='detail'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis eveniet hic ex illo dolore non dolorum ratione dolores aut doloribus a fuga aperiam, omnis eum aliquam, iure reiciendis? Eligendi, minus!</div>
    </div>
  );
}

export default Login;
