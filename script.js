
// Get main container from HTML
const pokeList = document.getElementById('pokeList');

// Pokemon API
let url = 'https://pokeapi.co/api/v2/pokemon/';

// Request 12 pokemons from the Pokemon API
for (let i = 1; i <= 12; i++) {    
    fetch(url + i)
    .then((response) => response.json())
    .then(data => showPokemon(data));
}

let showPokemon = (pokeData) => {

    // Get the pokemon type thru a map method so we can extract all we need and convert into a "p" tag
    let poketypes = pokeData.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
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
        <div class="-nameContainer">
            <h2 class="pokemonName">${pokeData.name}</h2>
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

// Execute function so it can load Pokemon
showPokemon();