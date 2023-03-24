
const pokeList = document.getElementById('pokeList');


let showPokemon = (i) => {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
    <div class="pokemon-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon">
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <h2 class="pokemon-nombre">Bulbasaur</h2>
        </div>
        <div class="pokemon-tipos">
            <p class="grass tipo">Grass</p>
            <p class="poison tipo">Poison</p>
        </div>
        <div class="pokemon-stats">
            <p class="stat">attack</p>
            <p class="stat">hp</p>
            <p class="stat">defense</p>
            <p class="stat">speed</p>
        </div>
    </div>
    `;
    pokeList.append(div);
};

for (let i = 1; i <= 12; i++) {    
    showPokemon(i);
}

/*
<div class="pokemon">
    <div class="pokemon-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon">
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <h2 class="pokemon-nombre">Bulbasaur</h2>
        </div>
        <div class="pokemon-tipos">
            <p class="grass tipo">Grass</p>
            <p class="poison tipo">Poison</p>
        </div>
        <div class="pokemon-stats">
            <p class="stat">attack</p>
            <p class="stat">hp</p>
            <p class="stat">defense</p>
            <p class="stat">speed</p>
        </div>
    </div>
</div>
*/