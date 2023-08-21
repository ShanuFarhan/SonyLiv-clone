// src/components/NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography,Button, InputBase, IconButton, Menu, MenuItem,Link,Stack } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const isLinkActive = (link) => window.location.pathname === link;

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" >
      <Toolbar className='navbar'>
        <img  src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?h=246&w=246&t=c_fill&q=low&fr=webp" alt="" />
      <Stack>
      <Button className='subbtn' size="small" variant="contained">Subscribe</Button>
      </Stack>
      <div style={{ margin:20 }} /> 
        <Stack  spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" >
        <NavLink to="/home" style={{ color:'white', textDecoration: 'none'}}>
          <Link
            href="/home"
            underline="none"
            color={isLinkActive('/home') ? 'white' : 'inherit'}
            sx={{ marginRight: 2, fontWeight: isLinkActive('/home') ? 'bold' : 'normal', '&:hover': { fontWeight: 'bold'  } }}
          >
            Home
          </Link></NavLink>
          <NavLink to="/movies" style={{ color:'white', textDecoration: 'none'}}>
          <Link
            href="/movies"
            underline="none"
            color={isLinkActive('/movies') ? 'white' : 'inherit'}
            sx={{ marginRight: 2, fontWeight: isLinkActive('/movies') ? 'bold' : 'normal', '&:hover': { fontWeight: 'bold'  } }}
          >
            Movies
          </Link></NavLink>
          <NavLink to="/tvshows" style={{ color:'white', textDecoration: 'none'}}>
          <Link
            href="/tvshows"
            underline="none"
            color={isLinkActive('/tvshows') ? 'white' : 'inherit'}
            sx={{ marginRight: 2, fontWeight: isLinkActive('/tvshows') ? 'bold' : 'normal', '&:hover': { fontWeight: 'bold'  } }}
          >
            TV Shows
          </Link></NavLink>
          <NavLink to="/webseries" style={{ color:'white', textDecoration: 'none'}}>
          <Link
            href="/webseries"
            underline="none"
            color={isLinkActive('/webseries') ? 'white' : 'inherit'}
            sx={{ marginRight: 2, fontWeight: isLinkActive('/webseries') ? 'bold' : 'normal', '&:hover': { fontWeight: 'bold'  } }}
          >
            Web Series
          </Link></NavLink>
          <NavLink to="/subscription" style={{ color:'white', textDecoration: 'none'}}>
          <Link
            href="/subscription"
            underline="none"
            color={isLinkActive('/subscription') ? 'white' : 'inherit'}
            sx={{ marginRight: 2, fontWeight: isLinkActive('/subscription') ? 'bold' : 'normal', '&:hover': { fontWeight: 'bold' } }}
          >
            Subscription
          </Link></NavLink>
        </Stack>
        <div style={{ flexGrow: 1 }} /> 
        <Stack direction='row'>
            
          <IconButton>
            <Search className='searchicon'/>
          </IconButton>
          <InputBase  placeholder="Search..." />
        </Stack>

        <div>
          <IconButton onClick={handleProfileMenuOpen}>
            <AccountCircle color='primary' />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            {/* Profile menu items */}
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <NavLink to="/watchlist"  style={{ color:'black', textDecoration: 'none'}} ><MenuItem onClick={handleProfileMenuClose}>Watchlist</MenuItem></NavLink>
            <MenuItem onClick={handleProfileMenuClose}>Favorites</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>History</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
