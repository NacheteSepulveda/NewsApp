import { useEffect, useContext, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


function NewsPage() {

    const { articles, page, setPage, theme, fetchNews, category, setCategory} = useContext(UserContext);
    


    useEffect(() => {
        fetchNews(); // No pasa categoría explícita; usa el estado global `category`
      }, [page, category]);
      
    const handleCategoryChange = (category) => {
        setCategory(category); 
        setPage(1); 
    };

    const categories = [
        { label: 'General', value: 'general' },
        { label: 'Deportes', value: 'sports' },
        { label: 'Tecnología', value: 'technology' },
        { label: 'Entretenimiento', value: 'entertainment' },
        { label: 'Salud', value: 'health' },
      ];

    
    const textColorCat = theme === 'dark' ? '#ffffff' : theme === 'daltonic' ? '#4B0092' : '#000';




  return (
    <div>
            <Typography variant='h2' color='primary'>Estas Son Tus Noticias</Typography>
            <Typography variant='h6' color='primary'>Selecciona Tu Categoría favorita</Typography>


        <div>
            {categories.map((cat) => (
            <label key={cat.value} style={{ marginRight: '10px', color: textColorCat}}>
                <Checkbox
                checked={category === cat.value} // Usamos category desde el contexto
                onChange={() => handleCategoryChange(cat.value)} // Cambia categoría global
                style={{color: textColorCat}}/>
                {cat.label}
            </label>
))}
        </div>

            <div className="pagination"
            style={{display: 'flex',       
                    justifyContent: 'center', 
                    alignItems: 'center'}}>
                    
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</button>
                <button onClick={() => setPage(page + 1)} disabled={page === 8}>Siguiente</button>
                
            </div>

            <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                {articles.map((article, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <NewsCard article={article} />
                    </Grid>
        ))}
            </Grid>
            
            <div className="pagination"
            style={{display: 'flex',       
                    justifyContent: 'center', 
                    alignItems: 'center'}}>

                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</button>
                <button onClick={() => setPage(page + 1)} disabled={page === 8}>Siguiente</button>

            </div>
    </div>
  )
}

export default NewsPage