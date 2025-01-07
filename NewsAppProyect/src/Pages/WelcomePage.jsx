import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        ¡Bienvenido a NewsApp!
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 4 }}>
        Explora las últimas noticias, busca temas de interés, entérate de todo.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/news"
        sx={{ marginBottom: 2 }}
      >
        Comenzar a Explorar
      </Button>
    </Box>
  );
}

export default WelcomePage;