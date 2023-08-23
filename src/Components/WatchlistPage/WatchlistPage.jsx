import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../../api';
import { Card, CardMedia, Typography,Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const WatchlistPage = ({selected}) => {
  const [watchlist, setWatchlist] = useState([]);
  const navigate=useNavigate()
  console.log("success",watchlist);
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
  const handleContent=(e)=>{
      
    var selectedId=e.target.name;
    console.log(e.target.name);
    for(let i=0;i<selected.length;i++){
      if(selected[i]._id==selectedId){
        console.log(selected[i]);
        setWatchlist(selected[i])
      }
    }
    navigate("/content")
}
  return (
    <div>
      <Typography variant='h4' style={{margin:"30px",color:'white'}}>My Watchlist</Typography>
      {/* <Typography style={{color:'white'}}>{content.title}</Typography> */}
      {watchlist ?(
      <Grid item xs={8} sm={4} md={2} key={selected._id} style={{border:"black"}}> 
          
            <img onClick={handleContent} name={selected._id} src={selected.thumbnail} alt={selected.title} style={{margin:"30px 50px",height:300, width: '80%', maxWidth: '300px' }} />

        </Grid>
        ):(
          <h2>No Watchlist added</h2>
        )}
    </div>
  );
};

export default WatchlistPage;
