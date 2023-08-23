import React, { useState } from 'react';
import { TextField, Button,Box, Typography } from '@mui/material';
import axios from 'axios';
import { PROJECT_ID } from '../../api';
import './RegistrationForm.css'
import { Link, useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    appType : "ott"
    
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 5000);
    // Return true if there are no errors, indicating a valid form
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    try {
      const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
          projectId: PROJECT_ID,
        },
      });
      navigate("/home")
      console.log('Registration success:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Error data:', error.response.data);
      }
    }
  }
  };
  

  return (
    <form style={{height:600}} onSubmit={handleSubmit}>
        <Box sx={{height:550, opacity: 0.5,backgroundColor:'black',width:500,margin:'0px 50px 0 70px'}}>
      <Typography  
      style={{color:'white',marginTop:30,marginLeft:150}} variant='h4'>Register</Typography>
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:20}}
        placeholder="Username"
        name="name"
        value={formData.name}
        onChange={handleChange}
        
      />
      {errors.name && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.name}</Typography>}
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:30}}
        placeholder="Email"
        name="email"
        type='email'
        value={formData.email}
        onChange={handleChange}
      
      />
      {errors.email && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.email}</Typography>}
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:30}}
        placeholder="Password"
        name="password"
        type='password'
        value={formData.password}
        onChange={handleChange}
        
      />
      {errors.password && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.password}</Typography>}

      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:50,width:350,marginTop:30}}
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      {errors.confirmPassword && <Typography marginLeft="30px" variant='subtitle' color="error">{errors.confirmPassword}</Typography>}

      <Button type="submit" variant="contained"
      style={{backgroundColor:'red',margin:'40px 0 0 50px',width:350}}>
        Sign Up
      </Button>
      <Typography variant='subtitle2' style={{color:'white',margin:'30px'}}>Already have an acount?<Link style={{fontWeight:700,color:'white'}} to="/">Login</Link></Typography>
      </Box>
    </form>
  );
};

export default RegistrationForm;
