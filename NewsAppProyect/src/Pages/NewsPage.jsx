import { useEffect, useContext, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';

function NewsPage() {

    const { articles, page, setPage, fetchNews, theme } = useContext(UserContext);


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

            <div className="news-container">
                {articles.map((article, index) => (
                    <NewsCard key={index} article={article}>

                    </NewsCard>
                ))}
            </div>
            
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