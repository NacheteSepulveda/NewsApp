# NewsApp

A. INSTALACIÓN DE DEPENDENCIAS:
  1. Clonar repositorio desde visual studio code
  2. Desde la terminal del repositorio ingresar los siguientes comandos:
      * npm install
      * npm i
      * npm install react-router-dom
      * npm install @mui/material @emotion/react @emotion/styled
      * npm install @mui/icons-material

B. HOOKS UTILIZADOS:
  Durante el desarrollo se utilizaron los hooks aprendidos durante las clases, como lo son:
    * useState: Hook para almacenar el estado de una variable, por ejemplo: que sea null, '' o []
    * useEffect: Se utiliza para manejar efectos secundarios, como el llamado a las APIS
    * useRef: Referencia un valor que no necesita renderizarse, en este caso, es utilizado dentro del SearchPage para buscar una serie de noticias por palabra clave
    * useContext: Maneja variables y funciones globales.

C. EJECUCION DEL PROYECTO:
  Dentro de la terminal dirigirse a la ubicación del repositorio y escribir el siguiente comando: npm run dev

D. RESUMEN DE FUNCIONALIDADES:
  Mi aplicación consta de 3 páginas, las cuales son:
    * NewsPage.jsx -----> ENTREGA TODAS LAS NOTICIAS EN PAGINAS DE 5 NOTICIAS
    * SearchPage.jsx -----> BUSCA UNA NOTICIA POR TERMINO DE BÚSQUEDA
    * SettingsPage.jsx ------> CAMBIO DE COLOR PARA TODAS LAS PÁGINAS, QUE PUEDE SER ENTRE BLANCO, NEGRO Y UNA OPCIÓN PARA DALTÓNICOS

  Además de un contexto:
    * UserContext.jsx ------> MANEJO DE VARIABLES GLOBALES COMO EL TEMA, LA COMPAGINACIÓN, EL LLAMADO A LA API, ETC.

  Y los componentes utilizados:
    * NewsCard.jsx --------> DEVUELVE TODAS LAS NOTICIAS EN FORMATO CARD
    * NavBar.jsx ------> BARRA DE NAVEGACIÓN
    * SearchBar.jsx ------> CAMPO DE TEXTO PARA INGRESAR UN TÉRMINO DE BUSQUEDA

    
