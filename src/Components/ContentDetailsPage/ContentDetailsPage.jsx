import React,{useState} from 'react';
import { Container, Typography, Paper, Box ,Button} from '@mui/material';
import ReactPlayer from 'react-player';
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import axios from 'axios';
import { PROJECT_ID } from '../../api';
const ContentDetailsPage = ({ content,setSelected }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  // const[watchAdded,setWatchAdded]=useState([])
  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };
  const token = localStorage.getItem('authToken');
  console.log(token);
  const addToWatchlist = async (e) => {
    try {
      if (isInWatchlist) {
        // Remove from watchlist
        await axios.patch(
          `https://academics.newtonschool.co/api/v1/social_media/watchlist/${content._id}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              projectID: PROJECT_ID,
            },
          }
        );
        console.log('Watch success:');
      } else {
        // Add to watchlist
        await axios.patch(
          `https://academics.newtonschool.co/api/v1/social_media/watchlist/${content._id}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              projectID: PROJECT_ID,
            },
          }
        );
        
      }
      // console.log("Watchlist added");
     
      setIsInWatchlist(!isInWatchlist);
      // console.log("added",!isInWatchlist);
      var selectedId=e.target.name;
        console.log(e.target.name);
      
          if(content._id==selectedId){
            console.log(content);
            setSelected(content)
          }
      // setWatchAdded(content)
      // console.log("added",watchAdded);
    } catch (error) {
      console.error('Watchlist action error:', error);
      if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Error data:', error.response.data);
      }
    }
  };
  return (
    <Container style={{backgroundColor:'black'}} maxWidth="md">
      {/* <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}> */}
      {isVideoOpen ? (
            <Box style={{marginTop:200}}>
               <AiOutlineClose style={{color:'white'}} onClick={handleCloseVideo}/>
          <ReactPlayer
          url={content.video_url}
          controls
          width="100%"
          height="300px"
          playing='true'
          style={{ marginTop: '20px' }}
          onEnded={handleCloseVideo}
        />      
        </Box>
         ):(
        <Box style={{color:'white'}} display="flex" flexDirection="column" alignItems="center">
          
          <img src={content.thumbnail}  alt={content.title} style={{ width: '80%', maxWidth: '300px' }} />
          <Typography variant="h4" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {content.keywords}
          </Typography>
          {/* <Typography variant="subtitle1" gutterBottom>
            Release Date: {content.releaseDate}
          </Typography> */}
          <Typography variant="subtitle1" gutterBottom>
            {content.type}
          </Typography>
          {/* <Typography variant="h6" gutterBottom>
            
          </Typography> */}
          <Typography variant="body1" gutterBottom>
          Cast: {content.cast}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Director: {content.director}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {content.description}
          </Typography>
          <Button onClick={handleOpenVideo} style={{marginTop:10,backgroundColor:'white',color:'black',fontWeight:600}} 
              variant='contained'><BsFillPlayFill/>Watch Free Preview</Button>  
                    
          <Button name={content._id} 
          style={{marginTop:10,backgroundColor:'white',color:'black',fontWeight:600}}
           variant="contained" color="primary" onClick={addToWatchlist}>
        {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </Button>
              </Box>
              )}
      {/* </Paper> */}
    </Container>
  );
};

export default ContentDetailsPage;
