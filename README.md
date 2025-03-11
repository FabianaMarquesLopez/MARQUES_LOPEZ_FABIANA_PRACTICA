# MARQUES_LOPEZ_FABIANA_PRACTICA
Esta es una práctica que nos encargó Jesús el encargado de nuestras prácticas de Cojali. 

# Documentación del Código HTML (Index)

## Descripción General
Este documento HTML representa la página principal de un sitio web que presenta información sobre la serie **Rick y Morty**. La página incluye un menú de navegación lateral, diversas secciones con información sobre el proyecto y una integración con una API para mostrar personajes.

---

## Estructura del Documento
El documento sigue una estructura HTML estándar con las siguientes secciones principales:

### 1. **Encabezado (`<head>`)**
Contiene la configuración básica de la página:
- **Codificación UTF-8** para admitir caracteres especiales.
- **Meta etiqueta `viewport`** para hacer la página responsiva.
- **Enlace a la hoja de estilos `WebPage.css`**.

### 2. **Barra de Navegación (`<nav>`)**
Incluye enlaces a tres páginas principales:
- **Inicio** (`Index.html`)
- **Personajes** (`Personajes.html`)
- **Contacto** (`Contacto.html`)

### 3. **Menú Lateral (`<div class="sidebar">`)**
Un menú lateral que permite navegar entre secciones de la misma página:
- Introducción
- Sobre el proyecto
- Lenguajes utilizados
- Proceso de desarrollo
- Objetivos

---

## Contenido Principal (`<div class="container">`)
Cada sección proporciona información detallada sobre el proyecto:

### **1. Introducción**
Presenta a la autora del proyecto, **Fabiana Marqués López**, estudiante de **Desarrollo de Aplicaciones Web** en **IES Gregorio Prieto**. Se explica el objetivo del proyecto y su interés en la serie **Rick y Morty**.

### **2. Sobre el Proyecto**
Describe la idea original del proyecto, que inicialmente iba a estar basada en **Hunter x Hunter**, pero debido a restricciones de la API, se optó por la de **Rick y Morty**. Se detalla el proceso de implementación de la API y los desafios encontrados.

### **3. Lenguajes Utilizados**
Lista los lenguajes empleados:
- **HTML** para la estructura de la página.
- **CSS** para el diseño y maquetación.
- **JavaScript** para la interacción con la API.
- **API de Rick y Morty** para obtener datos de los personajes.

### **4. Proceso de Desarrollo**
Explica los pasos seguidos en el desarrollo:
1. Creación de la estructura HTML y navegación.
2. Diseño con CSS (usando **Grid y Flexbox** para distribuir los elementos).
3. Pruebas con tarjetas de personajes antes de integrar la API.
4. Integración de la API y resolución de dudas sobre su funcionamiento.

### **5. Objetivos**
Refleja la motivación personal del proyecto:
- Mejorar habilidades como desarrolladora web.
- Aprender a utilizar APIs externas.
- Ganar experiencia en proyectos prácticos.

---

## **Elementos Destacables**
- Secciones separadas con `---` para una mejor organización visual.
- Uso de etiquetas semánticas (`<header>`, `<nav>`, `<section>`).
- Integración de **imágenes** para mejorar la presentación.
- Conexión con un archivo externo **JavaScript (`WebPage.js`)** para funcionalidades adicionales.

---

## **Conclusión**
Este documento HTML sirve como la base estructural de un proyecto web educativo que permite a los usuarios explorar los personajes de **Rick y Morty** de manera interactiva. Mediante el uso de la API y el diseño web responsivo, se logra una experiencia dinámica y funcional.

---

# Documentación del Código HTML (Personajes)

## Descripción General
Este documento HTML representa la página principal donde los usuarios pueden buscar y filtrar personajes de **Rick y Morty**. La página contiene un menú de navegación, una barra de búsqueda, filtros y un espacio para mostrar los personajes obtenidos a través de la API.

---

## Estructura del Documento

### 1. **Encabezado (`<head>`)**
Contiene la configuración básica:
- **Codificación UTF-8** para admitir caracteres especiales.
- **Meta etiqueta `viewport`** para hacer la página responsiva.
- **Enlace a la hoja de estilos `WebPage.css`** para el diseño visual.

### 2. **Encabezado de la Página (`<header>`)**
Incluye un menú de navegación con enlaces a otras páginas:
- **Inicio** (`Index.html`)
- **Personajes** (`Personajes.html`)
- **Contacto** (`Contacto.html`)

### 3. **Imagen del Logo**
Se muestra el logo de la serie **Rick y Morty** utilizando la imagen `Rick_y_Morty_Logo.png`.

### 4. **Barra de Búsqueda (`<div class="search-container">`)**
Un campo de entrada (`<input>`) permite a los usuarios buscar personajes por nombre. Además, se incluye una imagen (`portal_gun.png`) como icono de búsqueda.

### 5. **Filtros (`<div class="filters">`)**
Los usuarios pueden filtrar personajes según:
- **Género** (`#gender-filter`): Masculino, Femenino, Sin género, Desconocido.
- **Estado** (`#status-filter`): Vivo, Muerto, Desconocido.

### 6. **Sección Principal (`<main>`)**
Espacio vacío donde se mostrarán los personajes obtenidos desde la API mediante JavaScript.

### 7. **Script Externo (`<script src="WebPage.js"></script>`)**
Se enlaza un archivo JavaScript (`WebPage.js`) que manejará la búsqueda, filtrado e inserción de personajes en el DOM.

---

## **Elementos Destacables**
- **Diseño interactivo** con búsqueda y filtros.
- **Uso de etiquetas semánticas** (`<header>`, `<main>`).
- **Conexión con un archivo JavaScript** para la interactividad.

---

## **Conclusión**
Esta página proporciona una interfaz intuitiva y funcional para que los usuarios exploren los personajes de **Rick y Morty** mediante la API, utilizando una combinación de HTML, CSS y JavaScript.

---

# Documentación del Código HTML (Contacto)

## Descripción General
Este documento HTML corresponde a la página de **Contacto** de la web, donde los usuarios pueden encontrar información sobre cómo comunicarse con la autora del sitio.

---

## Estructura del Documento

### 1. **Encabezado (`<head>`)**
Contiene:
- **Codificación UTF-8** para admitir caracteres especiales.
- **Meta etiqueta `viewport`** para hacer la página responsiva.
- **Enlace a la hoja de estilos `WebPage.css`** para el diseño visual.

### 2. **Encabezado de la Página (`<header>`)**
Incluye un menú de navegación con enlaces a:
- **Inicio** (`Index.html`)
- **Personajes** (`Personajes.html`)
- **Contacto** (`Contacto.html`)

### 3. **Sección de Contacto (`<div class="container">`)**
Dentro de la sección principal:
- Se muestra un **título `<h1>`** con el texto "Contacto".
- Se proporciona un **correo electrónico** de contacto dentro de un `<p>` resaltado con `<strong>`.
- Se incluye un `<hr>` para separar visualmente el contenido.

---

## **Elementos Destacables**
- **Diseño simple y claro** para facilitar el acceso a la información de contacto.
- **Uso de etiquetas semánticas** (`<header>`, `<section>`, `<p>`) para mejorar la estructura y accesibilidad.

---

## **Conclusión**
Esta página facilita la comunicación con la autora del sitio proporcionando un medio de contacto claro y accesible.

---

# Documentación del Archivo CSS

## General
Este archivo CSS define los estilos generales de la página web, incluyendo tipografía, diseño de la estructura, componentes y animaciones.

---

## Configuraciones Globales
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
```
- Se eliminan los margenes y el relleno predeterminado.
- Se usa `box-sizing: border-box` para asegurar que los elementos respeten su tamaño.
- Se establece la fuente predeterminada para la página.

---

## Estilo del Cuerpo (`body`)
```css
body{
    background-color: #28c265;
    text-align: center;
}
```
- Se define un fondo verde `#28c265`.
- Se alinea el texto al centro.

---

## Encabezados
```css
h1 {
    text-align: left;
    margin: 20px 0;
    color: rgb(0, 0, 0);
    display: inline;
    box-shadow: inset 0 -10px 0 #73e95b;  
}
```
- `h1` se alinea a la izquierda y tiene un subrayado estilo "resaltador".
- Color de texto en negro.

---

## Contenedor Principal
```css
.container {
    background: #f8f8f8;
    padding: 30px 80px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: left;
    max-width: 1400px;
    margin: auto;
}
```
- Se define un contenedor con fondo claro.
- Se limita el ancho a 1400px para mejor visualización.

---

## Navegación (`header` y `nav`)
```css
header {
    position: sticky;
    top: 0;
    background-color: #171717;
    z-index: 1000;
    padding: 15px 0;
    width: 100%;
}
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}
nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px 15px;
    transition: 0.3s;
}
nav ul li a:hover {
    background-color: #28c265;
    border-radius: 5px;
}
```
- El `header` es fijo en la parte superior.
- Los enlaces de navegación tienen un color blanco con efecto hover.

---

## Tarjetas de Personajes (`article`)
```css
article {
    background: #f8f8f8;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    transition: transform 0.3s, width 0.3s;
    max-width: 300px;
    margin: auto;
}
article:hover{
    transform: scale(1.05);
}
```
- Tarjetas con fondo claro, sombra y bordes redondeados.
- Efecto `hover` para ampliar ligeramente la tarjeta.

---

## Búsqueda (`search-container`)
```css
.search-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    width: 100%;
    max-width: 400px;
}
.search-icon {
    position: absolute;
    left: 15px;
    width: 25px;
    height: 25px;
    pointer-events: none;
}
#buscador {
    width: 100%;
    padding: 10px 15px 10px 45px;
    border: 2px solid #ffffff;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease-in-out;
    text-align: left;
}
```
- Se define el campo de búsqueda con un icono a la izquierda.
- Se utiliza `border-radius` para esquinas redondeadas.

---

## Filtros
```css
.filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px auto;
}
.filters select {
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #28c265;
    font-size: 16px;
    cursor: pointer;
}
```
- Se estilizan los `select` con bordes redondeados y color verde.

---

## Barra Lateral (`sidebar`)
```css
.sidebar {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 200px;
    background: #171717;
    padding: 15px;
    border-radius: 10px 0 0 10px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    text-align: left;
    transition: right 0.3s ease-in-out;
}
.sidebar ul li a:hover {
    background: #28c265;
}
```
- Barra lateral fija en el lado derecho de la pantalla.

---

## Línea Separadora Personalizada (`hr`)
```css
hr {
    border: none;
    height: 2px;
    background: repeating-linear-gradient(
        to right,
        black 0px,
        black 2px,
        transparent 1px,
        transparent 10px
    );
}
```
- Se crea una `hr` personalizada con puntos en lugar de una línea sólida.

---

## Conclusión
Este CSS proporciona una apariencia moderna y funcional para la página web, con una estructura bien definida y efectos visuales atractivos. Se usan técnicas como `CSS Grid`, `Flexbox` y `box-shadow` para mejorar la presentación visual.

---

# Documentación del Código JavaScript

## Descripción
Este script obtiene y muestra personajes de la API de Rick and Morty. Permite filtrar los personajes por nombre, género y estado, actualizando la visualización en la página web.

## 1. Obtención de Personajes

### Función `getCharacters(done)`
Esta función obtiene todos los personajes de la API de Rick and Morty y los pasa a la función de retorno `done`.

#### Parámetros:
- `done`: Una función de callback que recibe la lista de personajes.

#### Proceso:
1. Inicializa `allCharacters` como un array vacío.
2. Usa `fetch` para obtener datos de la API hasta que no haya más páginas disponibles.
3. Agrega los personajes obtenidos a `allCharacters`.
4. Llama a la función `done` con la lista completa de personajes.
5. Maneja posibles errores con un bloque `try-catch`.

---

## 2. Referencias a Elementos del DOM
Se seleccionan elementos HTML para interactuar con los filtros y la visualización de personajes:
- `main`: Contenedor donde se mostrarán los personajes.
- `buscador`: Campo de entrada para buscar personajes por nombre.
- `genderFilter`: Menú desplegable para filtrar por género.
- `statusFilter`: Menú desplegable para filtrar por estado.

---

## 3. Mostrar Personajes

### Función `mostrarPersonajes(data)`
Genera y muestra los personajes en el `main` del HTML.

#### Parámetros:
- `data`: Un array de objetos con la información de los personajes.

#### Proceso:
1. Limpia el contenido de `main`.
2. Itera sobre el array `data`.
3. Crea un elemento `article` con la información de cada personaje.
4. Agrega el elemento al contenedor `main`.

---

## 4. Filtrado de Personajes

### Función `filtrarPersonajes()`
Filtra los personajes según el nombre, género y estado seleccionados.

#### Proceso:
1. Obtiene el valor de `buscador` en minúsculas.
2. Obtiene los valores de los filtros `genderFilter` y `statusFilter`.
3. Filtra el array `personajes` según:
   - Si el nombre incluye el texto buscado.
   - Si el género coincide con el seleccionado (o si no hay selección).
   - Si el estado coincide con el seleccionado (o si no hay selección).
4. Llama a `mostrarPersonajes` con los personajes filtrados.

---

## 5. Eventos
Se agregan eventos para ejecutar la función de filtrado cuando el usuario:
- Escribe en el campo `buscador`.
- Cambia el valor de `genderFilter`.
- Cambia el valor de `statusFilter`.

---

## 6. Inicialización
Al cargar la página, se ejecuta `getCharacters`, que obtiene los personajes y los almacena en `personajes`, luego se llama a `mostrarPersonajes` para mostrarlos por defecto en la página.

