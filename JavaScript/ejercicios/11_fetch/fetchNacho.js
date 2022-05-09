const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

button.addEventListener("click", (event) => {
    event.preventDefault(); // para prevenir que se recarge la pantalla al darle al boton
    getPokemonData(input.value);
})

/* function getPokemonData(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => response.json())
        .then((data) => {
            //crear pokemon
            createPokemon(data);
        })
} */

//hacer la misma llamada con async/await

const getPokemonData = async function (pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const data = await response.json();
        createPokemon(data)

    } catch (error) {
        console.log(error.message);
    }
}

//creando el pokemon
function createPokemon(pokemon) {
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}