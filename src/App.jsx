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
import MoviesSection from './Pages/MoviesSection';
import TvShows from './Pages/Tvshows';
import Webseries from './Pages/Webseries';
import UserProfile from './Pages/UserProfile';
import SubscriptionPage from './Pages/SubscriptionPage';


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
            <Route path='/content' element={[<Navbar/>,<ContentDetailsPage selected={selected} setSelected={setSelected} content={content} setContent={setContent}/>]}/>
            <Route path='/watchlist' element={[<Navbar/>,<WatchlistPage selected={selected} setSelected={setSelected} content={content} setContent={setContent}/>]}/>
            <Route path='/movies' element={[<Navbar/> ,<MoviesSection content={content} setContent={setContent}/>]}/>
            <Route path='/tvshows' element={[<Navbar/> ,<TvShows content={content} setContent={setContent}/>]}/>
            <Route path='/webseries' element={[<Navbar/>,<Webseries content={content} setContent={setContent}/>]}/>
            <Route path='/profile' element={[<Navbar/>,<UserProfile/>]}/>
            <Route path='/subscription' element={<SubscriptionPage/>}/>
          </Routes>
         
    </div>
  );
}

export default App;
