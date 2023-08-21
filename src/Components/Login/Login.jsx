import React, { createContext, useState } from 'react';
import { TextField, Button,Box, Typography } from '@mui/material';
import axios from 'axios';
import { PROJECT_ID } from '../../api';
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
 
  const navigate=useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login', formData, {
            headers: {
              'Content-Type': 'application/json',
              projectId: PROJECT_ID,
            },
          });
          const token = response.data.token;

          // Store the token in local storage
          localStorage.setItem('authToken', token);
          navigate("/home")
          console.log('Login success:', response.data);
          // Handle successful login
        } catch (error) {
          console.error('Login error:', error);
          // Handle login error
        }
      };
  return (
    <form style={{height:600}} onSubmit={handleSubmit}>
        <Box sx={{height:500, opacity: 0.5,backgroundColor:'black',width:500,margin:'0px 50px 0 50px'}}>
      <Typography  
      style={{color:'white',marginTop:50,marginLeft:150}} variant='h4'>Login</Typography>
      
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="Email"
        name="email"
        type='email'
        value={formData.email}
        onChange={handleChange}
      />
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="Password"
        name="password"
        type='password'
        value={formData.password}
        onChange={handleChange}
      />
      
      <Button type="submit" variant="contained" 
      style={{backgroundColor:'red',margin:'40px 0 0 30px',width:400}}>
        Login
      </Button>
      <Typography variant='subtitle2' style={{color:'white',margin:'30px'}}>New user?<Link style={{fontWeight:700,color:'white'}} to="/register">Register</Link></Typography>
      </Box>
    </form>
  )
}

export default Login
