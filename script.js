
let pokemons = [];

// Get main container from HTML
const pokeList = document.getElementById('pokeList');

// Select all h2 tags inside pokeList
const pokeNames = document.getElementById('redirectName');

// Get searchbox and button from HTML
const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');

// Pokemon API
let url = 'https://pokeapi.co/api/v2/pokemon/'; 
 


let main = async() => {
    // Request 12 pokemons from the Pokemon API
    for (let i = 1; i <= 12; i++) {    
        let response = await fetch(url + i);
        let pokemon = await response.json();
        pokemons.push(pokemon);
    }
    showPokemons(pokemons);
}

let showPokemons = (pokemonsList) => {
    pokeList.innerHTML = '';
    pokemonsList.forEach((element) => showPokemon(element));
}

let showPokemon = (pokeData) => {

    // Get the pokemon type thru a map method so we can extract all we need and convert into a "p" tag
    let poketypes = pokeData.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    // Join the array
    poketypes = poketypes.join('');

    // Get the pokemon stats thru a map method so we can extract all we need and convert into a "p" tag
    let pokeStats = pokeData.stats.map(stats => `<p class="stat">${stats.stat.name}: ${stats.base_stat}</p>`);
    // Slice the info that we don't need
    pokeStats.splice(3,2);
    // Join the array
    pokeStats = pokeStats.join('');

    // Create div for each pokemon we receive from the API
    const div = document.createElement('div');
    // Assign name to class
    div.classList.add('pokemon');
    // Send the HTML template
    div.innerHTML = `
    <div class="pokemonImg">
        <img src="${pokeData.sprites.other['official-artwork'].front_default}" alt="${pokeData.name}">
    </div>
    <div class="pokemonInfo">
        <div class="nameContainer" id="redirectName">
            <a href="https://pokemon.fandom.com/wiki/${pokeData.name}" target="_blank">
                <h2 class="pokemonName">${pokeData.name}</h2>
            </a>
        </div>
        <div class="pokemonTypes">
            ${poketypes}
        </div>
        <div class="pokemonStats">
            ${pokeStats}
        </div>
    </div>
    `;
    pokeList.append(div);
};

searchBtn.addEventListener('click', function(e) {
    // Prevent of auto reload
    e.preventDefault();

    let filterPokemon = [];
    
    const search = searchInput.value.toLowerCase();

    pokemons.forEach(pokemon => {
        console.log(pokemon.name, pokemon.name.includes(search));

        if(pokemon.name.includes(search)) {
            filterPokemon.push(pokemon);
        }
    });
    console.log(filterPokemon);
    showPokemons(filterPokemon);
});

main();