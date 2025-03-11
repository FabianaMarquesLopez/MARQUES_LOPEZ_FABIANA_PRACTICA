# MARQUES_LOPEZ_FABIANA_PRACTICA
Esta es una práctica que nos encargó Jesús el encargado de nuestras prácticas de Cojali. 

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

