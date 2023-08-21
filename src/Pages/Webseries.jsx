// MoviesSection.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
const Webseries = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data using the filter for movies
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "web series"}', {
      headers: {
        projectId: 'Your projectId',
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

  return (
    <Container>
      {/* <Typography style={{color:'white'}} variant='h4'>MOVIES</Typography> */}
      <Grid container spacing={3}>
        {movies.map((movie) => (
          // Display movie thumbnails here
          <Grid item xs={8} sm={4} md={2} key={movie._id}>
          <Card>
            <CardMedia component="img" height="200" image={movie.thumbnail}/>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Webseries;
