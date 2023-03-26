
// Array to save pokemon from API
let pokemons = [];

// Get main container from HTML
const pokeList = document.getElementById('pokeList');

// Select all h2 tags inside pokeList
const pokeNames = document.getElementById('redirectName');

// Get searchbox and button from HTML
const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');
const resetBtn = document.getElementById('bttnReset');

// Pokemon API
let url = 'https://pokeapi.co/api/v2/pokemon/'; 
 
// Main function to get data from API
let main = async() => {
    // Request 12 pokemons from the Pokemon API
    for (let i = 1; i <= 12; i++) {    
        let response = await fetch(url + i);
        let pokemon = await response.json();
        pokemons.push(pokemon);
    }
    showPokemons(pokemons);
}

// This function is like a template and control the rendering of pokemon and the search
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

// Event to click button and search pokemon
searchBtn.addEventListener('click', function(e) {
    // Prevent of auto reload
    e.preventDefault();

    let filterPokemon = [];
    
    // Value of text box
    const search = searchInput.value.toLowerCase();

    // Inserto into an array the value of the pokemon on search box
    pokemons.forEach(pokemon => {

        if(pokemon.name.includes(search)) {
            filterPokemon.push(pokemon);
        }
    });

    // Send value to "template" function
    showPokemons(filterPokemon);
});

// Reset button
resetBtn.addEventListener('click', function(e) {

    // Show initial pokemon
    showPokemons(pokemons);
});

// Execute main function so all can works
main();
