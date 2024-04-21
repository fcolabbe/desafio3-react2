# Desafío Router II - Desafío Latam

Este proyecto es parte del tercer desafío del módulo React II del Bootcamp Full Stack de Desafío Latam. Se trata de una aplicación web desarrollada con React, Vite, JavaScript y CSS, cuyo objetivo es poner en práctica habilidades avanzadas con React Router, como obtener parámetros de una ruta, redireccionar programáticamente y aplicar una clase activa a la ruta visitada.

## Descripción

La aplicación consta de tres vistas principales:

1. **Vista Home**: La página de inicio de la aplicación.
2. **Vista Pokemones**: Muestra una lista de Pokemones obtenidos de la Poke API.
3. **Vista /pokemones/:name**: Muestra detalles específicos de un Pokemón en particular, obtenidos de la Poke API utilizando parámetros de ruta.

## ScreenShot
![Pantallazo](<Screenshot 2024-04-20 at 21.30.29.png>)

## Requerimientos

1. **Asignar una clase active a la ruta visitada**: Se utiliza el componente `NavLink` de React Router para aplicar una clase CSS `active` a la ruta que el usuario está consultando.
2. **Redireccionar programáticamente**: Se utiliza el hook `useNavigate` de React Router para redirigir programáticamente al usuario a una ruta específica.
3. **Obtener parámetros de la URL**: Se utiliza el hook `useParams` de React Router para obtener los parámetros de la URL en la vista `/pokemones/:name`.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router
- Poke API

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
5. Abre `http://localhost:5173` en tu navegador para ver la aplicación en funcionamiento.

## Créditos

Este proyecto fue desarrollado como parte del Bootcamp Full Stack de Desafío Latam por [Francisco Labbe](https://www.linkedin.com/in/fcolabbe/).