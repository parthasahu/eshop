import { AppBar, Toolbar, Typography, TextField, Paper, IconButton, InputBase } from "@mui/material/";
import { Link } from 'react-router-dom'

import { ShoppingCart, Search } from "@mui/icons-material"
import React from "react";
import './Header.css'

export default function Header() {
  const displayDesktop = () => {
    return (
      <div className="top-bar">
        <Toolbar>
          <ShoppingCart className="logo" />
          <Typography>
            upGrad E-shop
          </Typography>

          <div className="search">
            <Paper
              component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height:35 }}>              
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}/>
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <Search />
              </IconButton>              
            </Paper>
          </div>

          <div className="nav-link">
            <Link className="menu-link" to="/login">Login</Link>
            <Link className="menu-link" to="/signup">Sign Up</Link>
          </div>
        </Toolbar>
      </div>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}