/**
 * 
 *      used sources:
 * 
 *              -enable cors: https: //developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 *              -css: https: //www.w3schools.com/css/default.asp
 */


const findOnPreferenceBtn = document.getElementById("findOnPreferenceBtn")
const findRandomBtn = document.getElementById("findRandomBtn")
const findFromFavoritesBtn = document.getElementById("findFromFavoritesBtn")


const url = 'https://gamepickr-backend.onrender.com'
findRandomBtn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log('click');
    fetch(`${url}/getRandomGame`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayGame(data)
        })
})

const displayGame = (gameData) => {
    let innerHTML = `
            <h1> Random Game </h1> 
            <p> We have selected a random game for you. <br>
                 </p>
            <div class = "gameCard"id = "gameCard">
                <img src = "${gameData.image}"alt = "">
                <div>
                    <button id = "dislikeBtn"> <span class = "icon-thumbs-down"> </span></button>
                    <h3> ${gameData.name} </h3> 
                    <button id = "likeBtn" > <span class = "icon-heart"> </button>
                    <h4 class = "gameId" id = "gameId"> ${gameData.gameId} </h4> 
                </div> 
            </div> 
            <div>
                <button id = "findOnPreferenceBtn"> Find on preference </button>
                <button id = "findRandomBtn"> Find random game </button>
                <button id = "findFromFavoritesBtn" > Find random game from favorites </button> 
            </div>
        `
    document.getElementById('body').innerHTML = innerHTML
}