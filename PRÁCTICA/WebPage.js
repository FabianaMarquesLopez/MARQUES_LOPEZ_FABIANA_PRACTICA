async function getCharacters(done) {
    let allCharacters = [];
    let nextPage = "https://rickandmortyapi.com/api/character";
    try {
        while (nextPage) {
            const response = await fetch(nextPage);
            const data = await response.json();
            allCharacters = allCharacters.concat(data.results);
            nextPage = data.info.next;
        }
        done(allCharacters);
    } catch (error) {
        console.error("Error obteniendo los personajes:", error);
    }
}

// Const para filtros
const main = document.querySelector("main");
const buscador = document.getElementById("buscador");
const genderFilter = document.getElementById("gender-filter");
const statusFilter = document.getElementById("status-filter");

let personajes = [];

// Función para mostrar personajes
function mostrarPersonajes(data) {
    main.innerHTML = ""; 
    data.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
            <article>
                <div class="img-container">
                    <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
                <span>${personaje.species}</span>
                <span>${personaje.type}</span>
                <span>${personaje.gender}</span>
            </article>
        `);
        main.append(article);
    });
}

// Obtener personajes al cargar la página
getCharacters(data => {
    personajes = data;
    mostrarPersonajes(personajes);
});

// Función para filtrar los personajes
function filtrarPersonajes() {
    const texto = buscador.value.toLowerCase();
    const generoSeleccionado = genderFilter.value;
    const estadoSeleccionado = statusFilter.value;

    const personajesFiltrados = personajes.filter(personaje => {
        return (
            personaje.name.toLowerCase().includes(texto) &&
            (generoSeleccionado === "" || personaje.gender === generoSeleccionado) &&
            (estadoSeleccionado === "" || personaje.status === estadoSeleccionado)
        );
    });

    mostrarPersonajes(personajesFiltrados);
}

// Eventos para aplicar el filtro
buscador.addEventListener("input", filtrarPersonajes);
genderFilter.addEventListener("change", filtrarPersonajes);
statusFilter.addEventListener("change", filtrarPersonajes);

