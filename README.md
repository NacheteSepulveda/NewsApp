# NewsApp

A. INSTALACIÓN DE NODE.JS Y NPM:
  1. Entrar en https://nodejs.org/es/download/ y descargar el instalador de Node.js en el sistema operativo deseado. Podemos elegir entre Windows, Mac y Linux.
  
  2. Ejecutar el instalador que acabamos de descargar. Simplemente debemos avanzar en el proceso de instalación.
  
  3. Una vez finalizado el proceso de instalación, podemos comprobar fácilmente si se nos ha instalado correctamente. Para ello, vamos al intérprete de comandos de nuestro ordenador (en Windows, por ejemplo, escribir “cmd” en la barra de búsqueda y abrir la aplicación de “Símbolo del sistema”).
  
  4. En la ventana de comandos, escribir node -v y pulsar la tecla Enter. Nos debería aparecer la versión que tenemos instalada de Node.js (en mi caso la versión 12.19.0). Para comprobar que se nos ha instalado también NPM, escribiremos npm -v y pulsaremos de nuevo Enter. Nos debería aparecer también en este caso la versión del Node Package Manager (en mi caso la versión 6.14.8).


Con estos 4 sencillos pasos ya tendremos instalado y disponible para utilizar todo el potencial de Node.js junto con el instalador de paquetes NPM.



B. INSTALACIÓN DE DEPENDENCIAS:
  1. Clonar repositorio desde visual studio code
  2. Desde la terminal del repositorio ingresar los siguientes comandos:
      * npm install
      * npm i
      * npm install react-router-dom
      * npm install @mui/material @emotion/react @emotion/styled
      * npm install @mui/icons-material



C. HOOKS UTILIZADOS:
  Durante el desarrollo se utilizaron los hooks aprendidos durante las clases, como lo son:
    * useState: Hook para almacenar el estado de una variable, por ejemplo: que sea null, '' o []
    * useEffect: Se utiliza para manejar efectos secundarios, como el llamado a las APIS
    * useRef: Referencia un valor que no necesita renderizarse, en este caso, es utilizado dentro del SearchPage para buscar una serie de noticias por palabra clave
    * useContext: Maneja variables y funciones globales.

    

D. EJECUCION DEL PROYECTO:
  Dentro de la terminal dirigirse a la ubicación del repositorio y escribir el siguiente comando: npm run dev

  

E. RESUMEN DE FUNCIONALIDADES:
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



ESTRUCTURA DEL PROYECTO:
  src/
  ├── components/
  │   ├── Navbar.js           # Barra de navegación
  │   ├── NewsCard.js         # Tarjetas para mostrar noticias
  │   ├── SearchBar.js        # Barra de búsqueda
  ├── context/
  │   └── UserContext.js      # Manejo de preferencias de usuario
  ├── pages/
  │   ├── NewsPage.js         # Página principal de noticias
  │   ├── SearchPage.js       # Página para buscar noticias
  │   ├── SettingsPage.js     # Página de configuración
  │   ├── WelcomePage.js      # Página de bienvenida 
  ├── App.js                  # Rutas principales
  ├── index.css               # Estilos globales
  └── main.jsx                # Renderización inicial

    
