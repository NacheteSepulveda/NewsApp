import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function SettingsPage() {

  const {theme, toggleTheme} = useContext(UserContext);


  return (
    <div style={{margin :'500px', }}>
      <Typography variant="h3" color='primary'> Configuracion </Typography>
      <h5>Color Actual: {theme}</h5>

      <Button
        variant="contained"
        color="secondary"
        onClick={toggleTheme}
        style={{ marginTop: '20px' }}// Desactiva si ya está en modo Daltonic
      >
        Cambiar de Color 
      </Button>
    </div>
  )
}

export default SettingsPage