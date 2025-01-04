import React from 'react'
import NewsPage from './Pages/NewsPage';
import SearchPage from './Pages/SearchPage';
import SettingsPage from './Pages/SettingsPage';
import FavoritePage from './Pages/FavoritePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {

  const { theme } = useContext(UserContext);

  const appStyle = {

    backgroundColor:
      theme === 'dark'
        ?  '#333' 
        : theme === 'daltonic'
        ? '#F7FC64'
        : '#fff', 
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh', // Ocupa al menos el alto de la ventana
    width: '100vw',
    margin: 0,
    padding: 0
  };

  return (
    <>
      <div className="app" style={appStyle}>
        <BrowserRouter>
          <NavBar/>
              <Routes>
                {/* PAGINA PRINCIPAL */}
                <Route path='/news' element={<NewsPage />}/>

                {/* RUTA DEL SEARCH */}
                <Route path='/search' element={<SearchPage />}/>
                
                {/* RUTA DE SETTINGS */}
                <Route path='/settings' element={<SettingsPage />}/>

                {/* RUTA DE FAVORITOS */}
                <Route path='/favorites' element={<FavoritePage />}/>

              </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
