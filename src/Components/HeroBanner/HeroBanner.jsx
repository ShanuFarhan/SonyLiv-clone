import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { fetchShows } from '../../api';
import ReactPlayer from 'react-player';
import './HeroBanner.css'
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
const HeroBanner = () => {
  const [heroShow, setHeroShow] = useState([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useEffect(() => {
    const fetchHeroShow = async () => {
      const data = await fetchShows(4,1);
      setHeroShow(data.data);
      console.log(data.data);
    };

    fetchHeroShow();
  }, []);
  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
   <Container>
        {heroShow.map((hero,index)=>(
          <div key={index}>
          <Box  style={{
            width:'100%',
            background: `linear-gradient(to right,#000, transparent),url(${heroShow ? hero.thumbnail:""})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
             minHeight: '400px', // Adjust as needed
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
              color: 'white',
      }}
    >
        <div className='left'>
            
            <Typography variant="subtitle1" gutterBottom>
              {hero.description}
            </Typography>
              <Typography variant='h6'>{`Cast: ${hero.cast}`}</Typography>
              <Typography variant='h6'>{hero.keywords[0]}|{hero.keywords[1]}|{hero.keywords[2]}</Typography>
              <Button onClick={handleOpenVideo} style={{marginTop:10,backgroundColor:'white',color:'black',fontWeight:600}} 
              variant='contained'><BsFillPlayFill/>Watch Free Preview</Button>
              </div>
              <div className='player'>
                
          {isVideoOpen && (
            <Box>
               <AiOutlineClose onClick={handleCloseVideo}/>
          <ReactPlayer 
          url={hero.video_url}
          
          playing='true'  
          controls
          width="100%"
          height="300px"
          style={{ marginTop: '20px' }}
          onEnded={handleCloseVideo}
        />
       
          </Box>
      )}
      </div>
            
            <div className='right'>
            <Button style={{
              height:34,
              padding:'5px 0 0 0',
              width:90,
              textSizeAdjust:'auto',
              borderRadius:'30px',
              marginLeft:20,
              alignContent:'center',
              backgroundImage:'linear-gradient(to right, darkblue, red)',}} variant="contained" color="primary">
              New Movie
            </Button>
            <Typography variant="h6" gutterBottom>
              {hero.title}
            </Typography>
            
            <Typography variant="h8" gutterBottom>
              {hero.director}
            </Typography>

            </div>
            
            </Box>
          </div>
        ))}
      </Container>
    
  );
};

export default HeroBanner;
