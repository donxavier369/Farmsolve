import React, { useState } from "react";
import "./Register.css";
import instance from "../Utils/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){
    const googleIcon = require("../../images/google.png")
    const [formData, setFormData] = useState({
        username : '',
        email: '',
        password: '',

    })

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        console.log(e,"eeeeeeeee")
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData.username, formData.email, formData.password)

        try{
            const response = await instance.post('/auth/register/',{
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            if(response.status === 201){
                console.log("registration success")
                toast.success("Registration Successfull")
            }else{
                console.log("registration failed")
                toast.error("Registration Failed")
            }

        }catch(error){
            console.log(error.response.status,"error occure catch worked")
            toast.error("Registration Failed")
        }
}
    
    return(
        <div className="body">
            <p id="content">Seeding Solutions, Harvesting Hope. Join us in cultivating a community of innovative problem solvers for the challenges that farmers face. Register now and let's grow a sustainable future together.</p>
            <div className="register" >
                <h3>Start for free</h3>
                <h1>Create new account.</h1>
                <p>Sighnup with google <a href="login/"><img id="googlicon"  src={googleIcon} alt="Google Login" /></a></p>
                <div>
                <form onSubmit={handleSubmit} >
                
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    // value={formData.username}
                    onChange={handleInputChange}
                    />
                <br />
                
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    />
                <br />
                
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
            
                    />
                <br />
                <div className="actions">
                <button id="register_btn" type="submit">Register</button>
                <button type="button"><a href="login/">Login</a></button>
                </div>
                </form>
            </div>

            </div>
        </div>
    )
}

export default Register