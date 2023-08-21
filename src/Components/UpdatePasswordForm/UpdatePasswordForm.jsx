import React, { useState } from 'react';
import { TextField, Button,Box, Typography } from '@mui/material';
import axios from 'axios';

const UpdatePasswordForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    passwordCurrent: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        'https://academics.newtonschool.co/api/v1/user/updateMyPassword',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            projectId: '1', // Replace with the correct project ID
          },
        }
      );
      console.log('Password update success:', response.data);
      // Handle successful password update
    } catch (error) {
      console.error('Password update error:', error);
      // Handle password update error
    }
  };

  return (
    <form style={{height:600}} onSubmit={handleSubmit}>
        <Box sx={{height:500, opacity: 0.5,backgroundColor:'black',width:500,margin:'0px 50px 0 50px'}}>
      <Typography  
      style={{color:'white',marginTop:50,marginLeft:70}} variant='h4'>Change Password</Typography>
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="Username"
        name="name"
        value={formData.name}
        onChange={handleChange}
        
      />
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="Email"
        name="email"
        type='email'
        value={formData.email}
        onChange={handleChange}
      
      />
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="CurrentPassword"
        name="password"
        type='password'
        value={formData.password}
        onChange={handleChange}
        
      />
      <input style={{paddingLeft:15,height:55,fontSize:16,color:'black',borderRadius:10,marginLeft:30,width:400,marginTop:30}}
        placeholder="NewPassword"
        name="password"
        type='password'
        value={formData.password}
        onChange={handleChange}
        
      />
      <Button type="submit" variant="contained"
      style={{backgroundColor:'red',margin:'40px 0 0 30px',width:400}}>
        Updatepassword
      </Button>
      </Box>
    </form>
  );
};

export default UpdatePasswordForm;
