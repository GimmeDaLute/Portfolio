
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const fetchAsync = async (pokemonIndex) => {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    const pokemonData = await rawData.json();

    const pokemonName = pokemonData.name;
    const nameHeading = document.getElementById("pokemonName")
    nameHeading.textContent = capitalizeFirstLetter(pokemonName)

    const pokemonFrontSprite = document.getElementById("pokemonFrontSprite");
    pokemonFrontSprite.src = pokemonData.sprites.front_default;
    const pokemonBackSprite = document.getElementById("pokemonBackSprite");
    pokemonBackSprite.src = pokemonData.sprites.back_default;

    const pokemonTypeImage = document.getElementById("pokemonTypeImage");
    const pokemonTypeImageTwo = document.getElementById("pokemonTypeImageTwo");

    pokemonTypeImage.innerHTML = "";
    pokemonTypeImage.src = `./media/${capitalizeFirstLetter(pokemonData.types[0].type.name)}_icon_SwSh.png`;

    if (pokemonData.types[1]) {
        const pokemonTypeImage = document.getElementById("pokemonTypeImageTwo");
        pokemonTypeImage.src = `./media/${capitalizeFirstLetter(pokemonData.types[1].type.name)}_icon_SwSh.png`;
    } else {
        pokemonTypeImageTwo.src = "";
        pokemonTypeImageTwo.innerHTML = "";
    }

    const pokemonType = document.getElementById("pokemonType");
    pokemonType.innerHTML = "";

    if (pokemonData.types[1]) {
        pokemonType.textContent = capitalizeFirstLetter(pokemonData.types[0].type.name) + " + " + capitalizeFirstLetter(pokemonData.types[1].type.name);
    } else {
        pokemonType.textContent = capitalizeFirstLetter(pokemonData.types[0].type.name)
    }

    const pokemonMoveList = document.getElementById("moveList");
    pokemonMoveList.innerHTML = "";
    for (let index = 0; index < 4; index++) {
        let li = document.createElement("li")
        li.textContent = capitalizeFirstLetter(pokemonData.moves[index].move.name);
        pokemonMoveList.appendChild(li);
    }

}

fetchAsync(1).catch(error => console.log(error))

let index = 1;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const buttonPrevious = document.getElementById("previousPokemonButton");
buttonPrevious.addEventListener('click', () => {
    if (index == 1) {
        index = 905
        fetchAsync(index).catch(error => console.log(error))
    } else {
        index --
        fetchAsync(index).catch(error => console.log(error))
    }
})

const buttonNext = document.getElementById("nextPokemonButton");
buttonNext.addEventListener('click', () => {
    if (index == 905) {
        index = 1
        fetchAsync(index).catch(error => console.log(error))
    } else {
        index ++
        fetchAsync(index).catch(error => console.log(error))
    }
})

const buttonRandom = document.getElementById("randomPokemonButton");
buttonRandom.addEventListener('click', () => {
    index = getRandomInt(905)
    if (index == 0) {
        index = 1
        fetchAsync(index).catch(error => console.log(error))
    } else if (index == 905) {
        index = 1
        fetchAsync(index).catch(error => console.log(error))
    } else {
        fetchAsync(index).catch(error => console.log(error))
    }
})
