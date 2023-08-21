// MoviesSection.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Webseries = ({setContent}) => {
  const [movies, setMovies] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    // Fetch movies data using the filter for movies
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "web series"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
    .then((response) => {
        console.log(response.data.data);    
      setMovies(response.data.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  const handleContent=(e)=>{
      
    var selectedId=e.target.name;
    console.log(e.target.name);
    for(let i=0;i<movies.length;i++){
      if(movies[i]._id==selectedId){
        console.log(movies[i]);
        setContent(movies[i])
      }
    }
    navigate("/content")
}
  return (
    <Container>
      {/* <Typography style={{color:'white'}} variant='h4'>MOVIES</Typography> */}
      <Grid container spacing={3}>
        {movies.map((movie) => (
          // Display movie thumbnails here
          <Grid item xs={8} sm={4} md={2} key={movie._id}>
          <Card>
            <CardMedia onClick={handleContent} name={movie._id} component="img" height="200" image={movie.thumbnail}/>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Webseries;
