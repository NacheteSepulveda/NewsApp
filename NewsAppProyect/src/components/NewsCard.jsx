import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


function NewsCard({ article }) {
  const { title, description, url, urlToImage } = article;

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
              <Typography gutterBottom variant="h5" component="div">
                {title || 'Título no disponible'}
              </Typography>

              {/* Descripción */}
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description || 'Descripción no disponible'}
              </Typography>
              
              {/* url */}
              <Typography variant="h8" color='secondary'>
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