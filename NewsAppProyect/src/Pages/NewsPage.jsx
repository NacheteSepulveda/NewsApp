import { useEffect, useState } from 'react';

function NewsPage() {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);

    const fetchNews = async () => {
        const apiKey = 'ce334ec0c68547058139ae8ea0792622';
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=5&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(data.articles);
    };

    useEffect(() => {
        fetchNews();
    }, [page]);

  return (
    <div>
            <h2>Noticias</h2>
            <div className="news-container">
                {news.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</button>
                <button onClick={() => setPage(page + 1)}>Siguiente</button>
            </div>
        </div>
  )
}

export default NewsPage