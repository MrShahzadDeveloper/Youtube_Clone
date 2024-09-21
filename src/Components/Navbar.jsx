import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/constants';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      justifyContent="space-between" // Use Material UI prop for justifyContent
      className="sticky top-0 bg-black"
      sx={{ borderBottom: '1px solid #3d3d3d' }}
    >
      <Link to="/" className="flex items-center">
        <img 
          src={logo} 
          alt="logo" 
          style={{ height: 45, width: 'auto' }} // Adjusted height and auto width to maintain aspect ratio
        />
      </Link>
      <Searchbar />
    </Stack>
  );
}

export default Navbar;
