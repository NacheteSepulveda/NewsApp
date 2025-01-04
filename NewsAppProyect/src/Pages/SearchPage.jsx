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

function SearchPage() {

  const {articles, searchNews } = useContext(UserContext);
  const inputRef = useRef(null);

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);

    if (!inputValue) return
    searchNews(inputValue);
  };

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
        {articles.map((article, index) => (
          <Card 
            sx={{ maxWidth: 345, margin: '20px auto' }} 
            key={index}
          >
            <CardActionArea
              component="a"
              href={article.url}
            >
              {/* Imagen de la noticia */}
              {article.urlToImage && (
                <CardMedia
                  component="img"
                  height="140"
                  image={article.urlToImage}
                  alt={article.title || 'Imagen no disponible'}
                />
              )}

              {/* Contenido de la noticia */}
              <CardContent>
                <Typography variant="h5" color="primary">
                  {article.title || 'Sin título'}
                </Typography>

                <Typography variant="body1" color="secondary" sx={{ marginTop: 1 }}>
                  {article.description || 'Sin descripción'}
                </Typography>

                {/* Link opcional con NavLink */}
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <NavLink
                    to={article.url || '#'}
                    style={{ textDecoration: 'none', color: 'blue' }}
                  >
                    {article.url || 'Sin url'}
                  </NavLink>
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SearchPage