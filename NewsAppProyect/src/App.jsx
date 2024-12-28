import React from 'react'
import NavBar from './components/NavBar';
import NewsPage from './Pages/NewsPage';
import SearchPage from './Pages/SearchPage';
import SettingsPage from './Pages/SettingsPage';
import FavoritePage from './Pages/FavoritePage';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {


  return (
    <>
    <div className="app">
    <BrowserRouter>
        <NavBar>
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
        </NavBar>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
