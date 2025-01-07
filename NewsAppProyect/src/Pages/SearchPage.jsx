import React, { useContext, useRef } from 'react'
import { UserContext } from '../context/UserContext'
import SearchBar from '../components/SearchBar';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function SearchPage() {

  const {articles, searchNews, theme } = useContext(UserContext);
  const inputRef = useRef(null);

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);

    if (!inputValue) return
    searchNews(inputValue);
  };

  const textColorTitle = theme === 'dark' ? '#00000a' : theme === 'daltonic' ? '#D81B60' : '#000';

  const textColorDesc = theme === 'dark' ? '#00000a' : theme === 'daltonic' ? '#004D40' : '#000';

  const textColorUrl = theme === 'dark' ? '#00000a' : theme === 'daltonic' ? '#4B0092' : '#000';


  return (
    <div>
      <Typography variant="h2" color="warning">
        Búsqueda de Noticias
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: 4 
        }}
      >
        <SearchBar inputRef={inputRef} onSearch={handleSearch} />
      </Box>

      <div style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardActionArea component="a" href={article.url} target="_blank">
                {/* Imagen */}
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage}
                    alt={article.title || 'Imagen no disponible'}
                  />
                )}

                {/* Contenido */}
                <CardContent>
                  <Typography style={{ color: textColorTitle }} variant="h5" gutterBottom>
                    {article.title || 'Sin título'}
                  </Typography>

                  <Typography style={{ color: textColorDesc }} variant="body1">
                    {article.description || 'Sin descripción'}
                  </Typography>

                  <Typography style={{ color: textColorUrl }} variant="body2" sx={{ marginTop: 1 }}>
                    <NavLink
                      to={article.url || '#'}
                    >
                      {article.url || 'Sin url'}
                    </NavLink>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        </Grid>
      </div>
    </div>
  );
}

export default SearchPage