Estructura de archivos modular:

La idea es que este todo separado por modulos, que cada carpeta (modulo) tenga todo el codigo relacionado a este por ejemplo "Home" podría tener subcarpetas con distuntos componentes relacionados con este si se quiere, se puede ver el ejemplo de carpetas que deje en pages/home/components. Si la App es muy grande se pueden poner dentro hook, o cualquier carpeta y archivos que esten solo relacionados con Home. Asi podemos tener ordenado el proyecto y es mas facil buscar y hacer crecer el mismo.

De components  salen todos los componentes genericos que van a ser utilizados, ya sean botones, navbar, tarjetas, etc.

De pages saldran todas las paginas principales de nuestra app, junto con sus componentes, hook, etc (importaremos los componentes necesarios para el funcionamiento).


Los archivos "index.js que estan al nivel de carpetas" son el punto donde vamos a importar nuestros componentes para poder exportarlos, de esta manera los podemos agrupar todos y así nos ahorramos un monton de lineas de código cuando tengamos que usarlos, asi queda mucho mas ordenado y entendible.

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
|   |-- index.js(se importan y exportan todos componentes aca)
|-- routes/
|   |-- routes.jsx
|-- utils/
|   |-- some-util/
|   |   |-- index.js
|   |-- index.js(se importan y exportan funciones o lo que se tenga que exportar)
|-- App.jsx
|-- index.js
```

Acá dejo un ejemplo un poco mas complejo

```
src/
|-- components/
|   |-- Avatar/
|   |   |-- index.jsx
|   |-- Button/
|   |   |-- index.jsx
|   |-- TextField/
|   |   |-- index.jsx
|-- contexts/
|   |-- UserContext/
|   |   |-- UserContext.js
|-- hooks/
|   |-- useMediaQuery/
|   |   |-- Index.js
|-- features/
|   |-- Home/
|   |   |-- components/
|   |   |   |-- SomeUserProfileComponent/
|   |   |   |   |-- SomeUserProfileComponent.jsx
|   |   |   |-- Index.js(se importan y exportan todos componentes aca)
|   |   |-- utils/
|   |   |-- services/
|   |   |-- hooks/
|   |   |-- contexts/
|   |   |-- views/
|   |   |   |-- Index.jsx
|   |   |-- pages/
|   |   |   |-- Index.jsx
|   |-- index.js(se importan y exportan todos componentes aca)
|-- utils/
|   |-- some-common-util/
|   |   |-- index.js/
|-- services/
|   |-- some-common-service/
|   |   |-- index.js/
|   |   |-- some-common-service.js/
|-- App.jsx
|-- index.js
```

Dejo aca un repo de un proyecto que estoy haciendo, como es un proyecto chiquito, no tengo los componentes especificos en la carpeta screens, si no que los tengo todos en la carpeta components. Pero es mas o menos tengan la idea de como hacerlo. 

[Repo](https://github.com/peladno/inventory-reactNativeApp)