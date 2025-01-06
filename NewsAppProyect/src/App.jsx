import React from 'react'
import NewsPage from './Pages/NewsPage';
import SearchPage from './Pages/SearchPage';
import SettingsPage from './Pages/SettingsPage';
import WelcomePage from './Pages/WelcomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import { UserContext } from './context/UserContext';
import { useContext } from 'react';
import { Typography, Box } from '@mui/material';

function App() {

  const { theme } = useContext(UserContext);
  const { backgroundImage } = useContext(UserContext);

  const appStyle = {

    backgroundImage:
      theme === 'dark'
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://previews.123rf.com/images/4zevar/4zevar1603/4zevar160300133/54964312-icono-de-noticias-icono-de-la-página-web.jpg')`
        : theme === 'daltonic'
        ? `linear-gradient(rgba(247, 252, 100, 0.7), rgba(247, 252, 100, 0.7)), url('https://previews.123rf.com/images/4zevar/4zevar1603/4zevar160300133/54964312-icono-de-noticias-icono-de-la-página-web.jpg')`
        : `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://previews.123rf.com/images/4zevar/4zevar1603/4zevar160300133/54964312-icono-de-noticias-icono-de-la-página-web.jpg')`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme === 'dark'
        ?  '#333' 
        : theme === 'daltonic'
        ? '#F7FC64'
        : '#fff',
    minHeight: '100vh', // Ocupa al menos el alto de la ventana
    width: '100vw',
    margin: 0,
    padding: 0,
  };

  return (
    <>
      <div className="app" style={appStyle}>
        <BrowserRouter>
          <NavBar/>
          
              <Routes>

                {/* Bienvenida */}
                <Route path="/" element={<WelcomePage />} /> 

                {/* PAGINA PRINCIPAL */}
                <Route path='/news' element={<NewsPage />}/>

                {/* RUTA DEL SEARCH */}
                <Route path='/search' element={<SearchPage />}/>
                
                {/* RUTA DE SETTINGS */}
                <Route path='/settings' element={<SettingsPage />}/>

                

              </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
