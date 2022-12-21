Estructura de archivos modular:

La idea es que este todo separado por modulos, que cada carpeta (modulo) tenga todo el codigo relacionado a este por ejemplo "Home" podría tener subcarpetas con distuntos componentes relacionados con este si se quiere.

De components  salen todos los componentes mas pequeños que van a ser utilizados, ya sean botones, navbar, tarjetas, etc.

De pages saldran todas las paginas principales de nuestra app (importaremos los componentes necesarios para el funcionamiento).

De Routes saldra todo lo relacionado a rutas (react router dom).

Los archivos index.js que estan al nivel de las carpetas son el punto donde vamos a importar nuestros componentes para poder exportarlos, de esta manera los podemos agrupar todos y así nos ahorramos un monton de lineas de código cuando tengamos que usarlos.

Porfavor chequear las carpetas y leer los comentarios que dejé para que vean como se importo y exportaron los componentes.

Dejo acá un modelo boen básico de como se vería.

```
src/
|-- components/
|   |-- Card/
|   |   |-- Index.jsx
|   |-- Button/
|   |   |-- Index.jsx
|   |-- NavBar/
|   |   |-- Index.jsx
|   |-- index.js
|-- context/
|   |-- UserContext/
|   |   |-- Index.js
|-- hooks/
|   |-- useMediaQuery/
|   |   |-- index.js
|-- pages/
|   |-- Home/
|   |   |-- Index.jsx
|   |-- Contact/
|   |   |-- Index.jsx
|   |-- index.js
|-- routes/
|   |-- routes.jsx
|-- utils/
|   |-- some-util/
|   |   |-- index.js
|   |-- index.js
|-- App.jsx
|-- index.js