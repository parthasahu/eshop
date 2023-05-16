import { AppBar, Toolbar, Typography, Button } from "@mui/material/";
import {Link} from 'react-router-dom'

import {ShoppingCart} from "@mui/icons-material"
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
            serach
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