# Descripción del proyecto Devsafio WEB

Proyecto para programa DLAB - Desafio Latam
El proyecto consiste en una plataforma online orientada al uso de búsqueda de empleo y reclutamiento del rubro TI. Partiendo del perfil de cada usuario, test técnicos, encuestas, exhibiciones de código y material de apoyo. La web pretende poner en contacto a miles de postulantes y empresas.

Principalmente se busca replicar, en primera instancia, la apariencia de la Landing Page de Devsafio desde el Figma compartido, en lo sucesivo se agregarán las distintas pantallas con la funcionalidad.


# Paso a paso de la instalación del proyecto:

Para clonar el proyecto desde GitHub para trabajar en él desde tu entorno local, necesitarás tener instalado Git en tu computadora. Si no tienes Git instalado, puedes descargarlo y seguir las instrucciones de instalación desde el siguiente enlace:

https://git-scm.com/downloads

Una vez que tengas Git instalado, puedes seguir estos pasos para clonar el repositorio y usarlo en tu entorno local:

Abre una consola o terminal en tu computadora, puede ser la Terminal del Visual Studio Code, desde la cual puedes seleccionar el tipo de consola, para lo que recomendamos usar Git Bash.

Navega hasta la carpeta donde quieras guardar el proyecto utilizando el comando cd. Por ejemplo, para ir a la carpeta "Proyectos" en tu carpeta de usuario, puedes usar el comando cd Proyectos.

Utiliza el comando git clone: git clone git@github.com:dlab-team/c6-backend.git

El comando anterior funcionará solo si tienes una llave SSH asociada a tu cuenta de GitHub. Si trabajas con Windows, en las versiones 10 y 11 puedes comprobar si tienes instalada la característica OpenSSH, en los sistemas Linux o Mac suele venir incluido. Si lo tienes, debes escribir en una terminal (en Windows es recomendable abrir el Powershell o Símbolo de sistema con la opción Ejecutar como administrador) el siguiente comando (todo lo que viene antes del punto): ssh-keygen. Luego, debes pulsar la tecla Enter cada vez hasta que se genere, y luego debes buscar en tu carpeta de usuario una carpeta, generalmente oculta, con el nombre .ssh. En esa carptea debes abrir el archivo id_rsa.pub con un editor de texto, copiar todo el contenido y pegarlo en la casilla Key del siguiente link: https://github.com/settings/ssh/new. Con esto habrás asociado tu ordenador a tu cuenta de GitHub.

Una vez que el proyecto haya sido clonado, entra a la carpeta del proyecto utilizando el comando cd ./c6-frontend.

Si el proyecto usa React, deberás instalar las dependencias necesarias para ejecutarlo. Para hacer esto, utiliza el comando npm install o yarn install, dependiendo de si usas npm o yarn como gestor de paquetes. Esto instalará todas las dependencias del proyecto que estén especificadas en el archivo package.json.

Una vez que hayas completado estos pasos, deberías poder ejecutar el proyecto de React en tu entorno local. Para hacerlo, podrías utilizar el comando npm start o yarn start, dependiendo de tu gestor de paquetes. Esto iniciará un servidor local y debería abrir automáticamente el proyecto en tu navegador.

## Equipo

TL: Sebastián Vidal

### Backend

### Frontend

- Ramiro Guillén : https://github.com/ramiroguillen
- Javier Perez: https://github.com/peladno
- Gabriel Balbontin (https://github.com/bagxxi)
- Christian Vergara : https://github.com/Chrisvd9
- Paul Levy: https://github.com/strike2-ux
