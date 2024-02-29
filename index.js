const poke_container = document.getElementById('poke-container')
const pokemon_count = 150

// create an object of colors
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#F4E7DA',
	rock: '#D5D5D4',
	fairy: '#FCEAFF',
	poison: '#98D7A5',
	bug: '#F8D5A3',
	dragon: '#97B3E6',
	psychic: '#EAEDA1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
// places all objects inside of an array
const main_types = Object.keys(colors);
console.log(main_types)
// create a  for loop
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        // console.log(i);
        await getPokemon(i); 
    }
}; 
// getting an api response and adding string interpolation to get the id of all 150 pokemon counts
    const getPokemon = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`; 
        const response = await fetch(url)
        const data = await response.json();
        // console.log(data)
        createPokemonCard(data);
    }; 

    const createPokemonCard = (pokemon) => { 
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon'); 

        const poke_types =pokemon.types.map( type => type.type.name)
        const type = main_types.find((type) => poke_types.indexOf(type) > -1); 
        console.log(type); 
        // get items out of the object using []
        const color = colors[type]; 
        pokemonEl.style.backgroundColor = color; 

        const PokemonInnerHtml = 
        `
        <div class="image-container"> 
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
         </div>

         <div class="info">
         <span class="number"> #${pokemon.id}
         <h3 class="name">${pokemon.name} </h3>
            <small class="type">Type <span>  ${type} </span></small>
         </div>
        `

        pokemonEl.innerHTML = PokemonInnerHtml
        poke_container.appendChild(pokemonEl)

    }
    fetchPokemons()
