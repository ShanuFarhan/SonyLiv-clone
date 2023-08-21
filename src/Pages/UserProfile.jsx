// UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Grid, Typography, Button, Avatar, Paper, Card } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate=useNavigate()
    const token=localStorage.getItem('authToken')
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    profileImage: '', // You may initialize it with the user's profile image URL
    // Add other relevant user data fields here
  });

//   useEffect(() => {
//     // Fetch the user's profile data
//     axios
//       .patch('https://academics.newtonschool.co/api/v1/user/updateProfileImage', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           projectId: PROJECT_ID,
//         },
//       })
//       .then((response) => {
//         const { name, email, profileImage } = response.data.data.user;
//         console.log(response.data.data.user);
//         setUserProfile({
//           name,
//           email,
//           profileImage,
//           // Set other user data fields as needed
//         });
//       })
     
//       .catch((error) => {
//         console.error(error);
//         if (error.response) {
//             console.log('Response status:', error.response.status);
//             console.log('Error data:', error.response.data);
//           }
//       });
      
//   }, []);
const handleSignout=(e)=>{
    e.preventDefault()
    navigate('/')
}

  // Add functions to handle profile picture uploads, editing profile data, etc.
  const name=localStorage.getItem('authName')
  const email=localStorage.getItem('authEmail')


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
    {/* Center-align content */}
    <Grid item xs={12} md={6} lg={4} style={{marginTop:-200}}>
        <Typography marginLeft="165px" marginBottom="30px" variant='h5' justifyContent="center" alignItems="center" style={{color:'white',mt:0}}>My Account</Typography>
      {/* <Paper  elevation={3} style={{ padding: '20px', textAlign: 'center'}}> */}
      <Card  style={{borderRadius:15,marginLeft:60,backgroundColor:'grey',opacity:0.5,width:'70%', padding: '20px', textAlign: 'center'}}>
        <Avatar  src={userProfile.profileImage} alt="Profile" sx={{ width: 100, height: 100, mx: 'auto' }} />
        <Typography style={{color:'white'}} variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography style={{color:'white'}} variant="body1" color="textSecondary" gutterBottom>
          {email}
        </Typography>
        {/* Display other user data fields here */}
        <Button style={{color:'white'}}>
          Edit Profile
        </Button>
        
        </Card>
      {/* </Paper> */}
       <Button onClick={handleSignout} style={{color:'white',justifyContent:'center',margin:'40px 0 0 180px'}}>
          Sign out
        </Button> 
    </Grid>
  </Grid>
  );
};

export default UserProfile;
