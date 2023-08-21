// src/App.js
import React, { useState } from 'react';
import "./App.css"
import {Route,Routes} from 'react-router-dom'
import { CssBaseline, Container } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Login  from './Components/Login/Login';
import UpdatePasswordForm from './Components/UpdatePasswordForm/UpdatePasswordForm';
import ContentDetailsPage from './Components/ContentDetailsPage/ContentDetailsPage';
import WatchlistPage from './Components/WatchlistPage/WatchlistPage';
import MoviesSection from './Components/MoviesSection';
import TvShows from './Components/Tvshows';
import Webseries from './Components/Webseries';


function App() {
  const[content,setContent]=useState([]);
 const[selected,setSelected]=useState([]);
  
  return (
    <div>
      <CssBaseline />
          <Routes>
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={[<Navbar/>,<HeroBanner/>,<Banner content={content} setContent={setContent} />]}/>
            <Route path='/updatepassword' element={<UpdatePasswordForm/>}/>
            <Route path='/content' element={[<Navbar/>,<ContentDetailsPage content={content} setContent={setContent}/>]}/>
            <Route path='/watchlist' element={[<Navbar/>,<WatchlistPage content={content} setContent={setContent}/>]}/>
            <Route path='/movies' element={[<Navbar/> ,<MoviesSection/>]}/>
            <Route path='/tvshows' element={[<Navbar/> ,<TvShows/>]}/>
            {/* <Route path='/webseries' element={[<Navbar/> ,<WebSeries/>]}/> */}
            <Route path='/webseries' element={[<Navbar/>,<Webseries/>]}/>
          </Routes>
         
    </div>
  );
}

export default App;
