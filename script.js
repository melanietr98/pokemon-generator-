const pokemons = [
    { name: "Pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "Squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "Jigglypuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" }
];

const generateButton = document.getElementById("generate-button");
const pokemonContainer = document.getElementById("pokemon-container");

generateButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const pokemon = pokemons[randomIndex];

    // Create an image element and set its source to the URL of the randomly selected Pokemon
    const img = document.createElement("img");
    img.src = pokemon.image;
    img.alt = pokemon.name;

    // Create a heading element for the Pokemon's name
    const name = document.createElement("h2");
    name.innerText = pokemon.name;

    // Clear the container of any previous Pokemon
    pokemonContainer.innerHTML = "";

    // Append the image and name to the container
    pokemonContainer.appendChild(img);
    pokemonContainer.appendChild(name);
});
