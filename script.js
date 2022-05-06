// async function to load the data
async function fetchData() {

    console.log("loading data...")
    let loading = document.createElement("h3")
    loading.classList.add("loading")
    loading.innerHTML = "loading data..."
    document.body.append(loading)
    const response = await fetch("https://api.pokemontcg.io/v2/cards")   
    const data = await response.json()
    console.log(data)
    loading.remove()
    console.log("data loaded")
  
    function getBlueCard(){
        const blueCardPost = document.createElement("img")
        blueCardPost.src = data.data[Math.floor(Math.random() * 251)].images.small
        if(!blueCardPost.url){
            console.log("is")
            // document.getElementById("cardBlue").removeChild(blueCardPost)
        }else{
            console.log("not")
        }
        // document.getElementById("cardBlue").removeChild(blueCardPost)
        document.getElementById("cardBlue").appendChild(blueCardPost)
    }
    document.getElementById("btn-blue").addEventListener("click",getBlueCard )

    function getRedCard(){
        const redCardPost = document.createElement("img")
        redCardPost.src = data.data[Math.floor(Math.random() * 251)].images.small
        // document.getElementById("cardRed").removeChild(redCardPost)
        document.getElementById("cardRed").appendChild(redCardPost)
    }
    document.getElementById("btn-red").addEventListener("click",getRedCard )

}

fetchData()

// function getBlueCard(){
//     const blueCardPost = document.createElement("img")
//     blueCardPost.src = data.data[Math.floor(Math.random() * 251)].images.small
//     document.getElementById("cardBlue").removeChild(blueCardPost)
//     document.getElementById("cardBlue").appendChild(blueCardPost)
// }
// document.getElementById("btn-blue").addEventListener("click",getBlueCard )
