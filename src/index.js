/**
 * 
 *      used sources:
 * 
 *              - WEB II frontend niko brusselaers: https: //github.com/EHB-MCT/web2-frontend-niko-brusselaers
 *              - enable cors: https: //developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 *              - css: https: //www.w3schools.com/css/default.asp
 *              - exporting function: https: //developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 *              - how to use localstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 *              - how to use sessionstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * 
 * 
 */

const findOnPreferenceBtn = document.getElementById("findOnPreferenceBtn")
const findRandomBtn = document.getElementById("findRandomBtn")
const findFromFavoritesBtn = document.getElementById("findFromFavoritesBtn")
const url = 'https://gamepickr-backend.onrender.com'


//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game
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
            //when data about game has been received update main page to display the randomly selected game
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