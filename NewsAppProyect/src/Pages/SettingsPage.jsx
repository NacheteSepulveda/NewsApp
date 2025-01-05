import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function SettingsPage() {

  const {theme, toggleTheme} = useContext(UserContext);

  const textColor = theme === 'dark' ? '#fff' : theme === 'daltonic' ? '#004D40' : '#000';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      {/* Configuración en la esquina superior izquierda */}
      <Typography
        variant="h3"
        style={{
          color: textColor,
          marginBottom: '1100px'
        }}
      >
        Seleccione Su Color
      </Typography>

      {/* Color Actual y Botón en la esquina superior derecha */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: textColor,
            marginBottom: '30px',
          }}
        >
          Color Actual: {theme}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleTheme}
          style={{
            marginBottom: '1130px',
          }}
        >
          Cambiar de Color (Blanco, Negro o Para Daltónicos)
        </Button>
      </Box>
    </Box>
  );
}

export default SettingsPage