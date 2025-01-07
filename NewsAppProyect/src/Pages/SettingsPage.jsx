import React from 'react'
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext'
import { Typography, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function SettingsPage() {

  const {theme, toggleTheme, userName, setUserName } = useContext(UserContext);
  const [name, setName] = useState(userName);

  const textColor = theme === 'dark' ? '#fff' : theme === 'daltonic' ? '#004D40' : '#000';

  const handleSave = () => {
    setUserName(name);
  };

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
    <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: textColor, marginBottom: '10px' }}>
          Como te Llamas?
        </Typography>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 , color: 'white'}}
        />
        <br />
        <Button variant="contained" onClick={handleSave}>
          Guardar Nombre
        </Button>
      </Box>

      {/* Configuración de Tema */}
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: textColor, marginBottom: '10px' }}>
          Seleccione Su Color
        </Typography>
        <Typography variant="body1" style={{ color: textColor, marginBottom: '10px' }}>
          Color Actual: {theme}
        </Typography>
        <Button variant="contained" color="secondary" onClick={toggleTheme}>
          Cambiar de Color (Blanco, Negro o Para Daltónicos)
        </Button>
      </Box>
    </Box>
  );
}

export default SettingsPage