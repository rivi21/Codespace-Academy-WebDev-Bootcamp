
const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

/* const img = document.createElement('img');
const h3 = document.createElement('h3');
const div = document.createElement('div'); */

button.addEventListener('click', (event) => {
    event.preventDefault();//para prevenir que se recargue la pantalla al darle al boton
    getPokemonData(input.value);
})
// hacer la llamada con.then:

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
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data = await response.json();
    createPokemon(data)
}

//NOTA: se pueden usar indistintamente la opción .then y la async/await no hay una mejor que la otra
//dependerá cual usemos de lo que usen en la empresa

//con try/catch
/* const getPokemonData = async function (pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const data = await response.json();
        createPokemon(data)

    } catch (error) {
        console.log(error.message);
    }
} */

//crear pokemon(se concatenan en pantalla)

/* function createPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
} */

//crear pokemon (que salga solo uno):

//Habría que sacar de la funcion los createElements,(están arriba)
//y poner un div.innerHTML = '' al ppio de la función para que borre lo que había antes
function createPokemon(pokemon) {
    div.innerHTML = '';

    img.src = pokemon.sprites.front_default;

    h3.textContent = pokemon.name;

    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}

