// SubscriptionPage.js

import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const SubscriptionPage = () => {
  return (
    <Container maxWidth="md">
        <img style={{width:40,height:50,marginLeft:-200}} src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?h=246&w=246&t=c_fill&q=low&fr=webp" alt="" />
        <Typography style={{color:'white',margin:80}} variant="h4" align="center" gutterBottom>
          Subscription Plans
        </Typography>
      <Paper elevation={3} style={{backgroundColor:'black',border:'solid white', padding: '20px', marginTop: '50px' }}>
        
        <Grid container spacing={3} justifyContent="center">
          {/* Subscription Plan 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent style={{backgroundColor:'black',color:'white',height:200}}>
                <Typography variant="h6">Basic Plan</Typography>
                <Typography variant="body1">Price: $9.99/month</Typography>
                <Typography variant="body2">
                  - Access to basic content
                  <br />- No ads
                  <br />- No HD quality
                </Typography>
                <Button style={{backgroundColor:'white',color:'black'}} variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Subscription Plan 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent style={{backgroundColor:'black',color:'white'}}>
                <Typography variant="h6">Premium Plan</Typography>
                <Typography variant="body1">Price: $19.99/month</Typography>
                <Typography variant="body2">
                  - Access to premium content
                  <br />- No ads
                  <br />- HD quality
                </Typography>
                <Button style={{backgroundColor:'white',color:'black'}} variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Subscription Plan 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent style={{backgroundColor:'black',color:'white'}}>
                <Typography variant="h6">Family Plan</Typography>
                <Typography variant="body1">Price: $29.99/month</Typography>
                <Typography variant="body2">
                  - Access for the whole family
                  <br />- No ads
                  <br />- HD quality
                </Typography>
                <Button style={{backgroundColor:'white',color:'black'}} variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SubscriptionPage;
