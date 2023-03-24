
const pokeList = document.getElementById('pokeList');


let showPokemon = (i) => {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `Card: ${i}`;
    pokeList.append(div);
};

for (let i = 1; i <= 12; i++) {    
    showPokemon(i);
}
