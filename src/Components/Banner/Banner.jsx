import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { fetchShows } from '../../api';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const Banner = ({setContent}) => {
  const navigate=useNavigate()
    const [shows, setShows] = useState([]);
    // console.log(shows);
    useEffect(() => {
      const fetchInitialData = async () => {
        const data = await fetchShows(1, 18);
        setShows(data.data);
        // console.log(data.data);
      };
  
      fetchInitialData();
    }, []);

    const handleContent=(e)=>{
      
        var selectedId=e.target.name;
        console.log(e.target.name);
        for(let i=0;i<shows.length;i++){
          if(shows[i]._id==selectedId){
            console.log(shows[i]);
            setContent(shows[i])
          }
        }
        navigate("/content")
    }
  
  return (
    
    <Container style={{margin:60,padding:0,width:'100%'}}>
    <Typography variant="h6" sx={{fontWeight:500, color:'white', marginTop: 2, marginBottom: 1 }}>
      More Like This <AiOutlineArrowRight style={{paddingTop:4}}/>
    </Typography>
    <Grid container spacing={3}>
      
      {shows &&shows.map((show) => (
        
        <Grid item xs={8} sm={4} md={2} key={show._id}>
          <Card>
            <CardMedia onClick={handleContent} component="img" height="200" name={show._id} image={show.thumbnail}/>
          </Card>
        </Grid>
))}
    </Grid>
  </Container>
  )
}

export default Banner
