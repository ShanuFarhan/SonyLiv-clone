import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../../api';
import { Card, CardMedia, Typography,Grid } from '@mui/material';
const WatchlistPage = ({content}) => {
  const [watchlist, setWatchlist] = useState([]);
  const token=localStorage.getItem('authToken')

  useEffect(() => {
    // Fetch the user's watchlist using the API
    axios.get('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    })
    
    .then((response) => {
      console.log("GETWatch",response.data);
      setWatchlist(response.data);
    })
    .catch((error) => {
      console.error('Fetch watchlist error:', error);
    });
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{color:'white'}}>My Watchlist</Typography>
      {/* <Typography style={{color:'white'}}>{content.title}</Typography> */}
      <img src={content.thumbnail} alt={content.title} style={{height:350, width: '80%', maxWidth: '300px' }} />
      {/* <Grid item xs={8} sm={4} md={2} key={content._id}> 
          <Card>
            <CardMedia component="img" height="200" image={content.thumbnail}/>
          </Card>
        </Grid> */}
    </div>
  );
};

export default WatchlistPage;
