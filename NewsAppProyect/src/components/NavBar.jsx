import React from 'react'
import { NavLink } from 'react-router'
import { Typography } from '@mui/material';

function NavBar(){
  
  return (
    <NavBar>
        <Typography variant='h2'>BIENVENIDO A LAS NOTICIAS</Typography>
        <ul>
            <li><NavLink to="/news">Noticias</NavLink></li>
            <li><NavLink to="/search">Buscar</NavLink></li>
            <li><NavLink to="/settings">Configuración</NavLink></li>
            <li><NavLink to="/favorites">Favoritos</NavLink></li>
        </ul>
    </NavBar>
  )
}

export default NavBar