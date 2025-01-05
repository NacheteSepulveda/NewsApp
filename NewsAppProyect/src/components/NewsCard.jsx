import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { UserContext } from '../context/UserContext';


function NewsCard({ article }) {
  const { title, description, url, urlToImage } = article;

  const {theme} = useContext(UserContext);

  const textColorTitle = theme === 'dark' ? '#00000a' : theme === 'daltonic' ? '#D81B60' : '#000';

  const textColorDesc = theme === 'dark' ? '#00000a' : theme === 'daltonic' ? '#004D40' : '#000';

  const textColorUrl = theme === 'dark' ? '#4b77dc' : theme === 'daltonic' ? '#4B0092' : '#000';

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={20}/>
          <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardActionArea component="a" href={url} target="_blank" rel="noopener noreferrer">
              {/* Imagen de la noticia */}
              {urlToImage && (
                <CardMedia
                  component="img"
                  height="140"
                  image={urlToImage}
                  alt={title || 'Imagen de la noticia'}
                />
              )}

            {/* Contenido de la noticia */}
            
            <CardContent>
              {/* Título */}
              <Typography style={{ color: textColorTitle }} gutterBottom variant="h5" component="div">
                {title || 'Título no disponible'}
              </Typography>

              {/* Descripción */}
              <Typography style={{ color: textColorDesc }} variant="body2" sx={{ color: 'text.secondary' }}>
                {description || 'Descripción no disponible'}
              </Typography>
              
              {/* url */}
              <Typography style={{ color: textColorUrl }} variant="h8" color='secondary'>
                {url || 'No existe url'}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export default NewsCard;