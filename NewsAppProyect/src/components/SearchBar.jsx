import React from 'react'
import { Button } from '@mui/material'

function SearchBar({inputRef, onSearch}) {
  return (
    <div>
      
      <input
      ref={inputRef}
      type='text'
      placeholder='Ingresa Tu Busqueda'

      />
    <Button variant="contained" onClick={onSearch}>
      Buscar Noticia
    </Button>

    </div>
  )
}

export default SearchBar
