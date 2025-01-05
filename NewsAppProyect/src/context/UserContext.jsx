import React from 'react'
import { createContext, useState } from 'react'


export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const [userName, setUserName] = useState('user')
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [backgroundImage, setBackgroundImage] = useState('');

    const fetchNews = async () => { //TRAER TODAS LAS NOTICIAS
        try {
            const apiKey = 'ce334ec0c68547058139ae8ea0792622'; // Reemplaza con tu clave de la News API
            let url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=5&apiKey=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles);

        } catch (error) {
            console.error('Error al obtener noticias:', error);
        }
    };


    const searchNews = async (input) => { //BUSCAR NOTICIAS
        try {
            const apiKey = 'ce334ec0c68547058139ae8ea0792622';
            let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(input)}&apiKey=${apiKey}`;
            const response = await fetch(url);

            const data = await response.json();
            setArticles(data.articles);

        } catch (error) {
            console.error('Error al buscar:', error);
        }
    }



    const toggleTheme = () => {
        
        if (theme === 'light') {
        setTheme('dark');

        } else if (theme === 'dark') {
        setTheme('daltonic');

        } else {
        setTheme('light');
        }
    };

    return (
        <UserContext.Provider
            value={{
                theme,
                setTheme,
                userName,
                setUserName,
                toggleTheme,
                articles,
                fetchNews,
                page,
                setPage,
                searchNews,
                backgroundImage,
                setBackgroundImage
            }}
        >
            {children}
        </UserContext.Provider>
    )
}


