// const fetchPoke = async ()=> {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     const data = await response.json()
//     const imgFront = document.createElement("img")
//     imgFront.src = data.sprites.front_default
//     document.body.append(imgFront)
//     const imgBack = document.createElement("img")
//     imgBack.src = data.sprites.back_default
//     document.body.append(imgBack)
// }

// fetchPoke()

const fetchCard = async ()=> {
    const response = await fetch("https://api.pokemontcg.io/v2/cards")
    const data = await response.json()
    console.log(data)
    
}

fetchCard()