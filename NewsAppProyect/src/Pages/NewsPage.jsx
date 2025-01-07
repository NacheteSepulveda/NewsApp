import { useEffect, useContext, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';
import Grid from '@mui/material/Grid';

function NewsPage() {

    const { articles, page, setPage, fetchNews} = useContext(UserContext);


    useEffect(() => {
        fetchNews();
    }, [page]);




  return (
    <div>
            <Typography variant='h2' color='primary'>Estas Son Tus Noticias</Typography>

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