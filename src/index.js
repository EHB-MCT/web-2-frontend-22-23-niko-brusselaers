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
 *              - how to add a class to an element javascript: https: //www.w3schools.com/howto/howto_js_add_class.asp
 *              - how to change input placeholder text https: //stackoverflow.com/questions/13506481/change-placeholder-text
 * 
 * 
 */

const isLoggedIn = sessionStorage.getItem('isLoggedIn')
console.log(isLoggedIn);
const url = 'https://gamepickr-backend.onrender.com'
document.getElementById('index').classList.add("activeLink")

//if user is logged in or not, display a series of buttons for selecting a random game
displayMainpageButtons(isLoggedIn)


//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game
const findRandomBtn = document.getElementById("findRandomBtn")
findRandomBtn.addEventListener("click", (event) => {
    event.preventDefault()
    fetch(`${url}/getRandomGame`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            //when data about game has been received update main page to display the randomly selected game
            displayGame(data)
        })
})

const findOnPreferenceBtn = document.getElementById("findOnPreferenceBtn")


// if user is logged in, create an eventlistener for findFromFavoritesBtn
if (isLoggedIn == "true") {
    const findFromFavoritesBtn = document.getElementById("findFromFavoritesBtn")
    // if user clicks on findFromFavoritesBtn, perform a fetch call to get a random game from user favourites
    findFromFavoritesBtn.addEventListener('click', () => {
        let userId = sessionStorage.getItem('id') || localStorage.getItem('id')
        console.log(userId);
        fetch(`${url}/getGameFromFavorites`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId
                })

            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //when data about game has been received update main page to display the randomly selected game
                displayGame(data)
            })
    })

}

function displayGame(gameData) {
    // insert randomly selected game inside html element
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
        `
    document.getElementById('mainContent').innerHTML = innerHTML
}



function displayMainpageButtons(isLoggedIn) {
    const mainPageBtnContainer = document.getElementById('mainPageBtnContainer')
    let innerHTML
    // if user is logged in, show all buttons
    if (isLoggedIn == "true") {
        innerHTML = `
        <button id="findOnPreferenceBtn"> Find on preference </button> 
        <button id="findRandomBtn"> Find random game </button>
        <button id="findFromFavoritesBtn"> Find random game from favorites </button>
        `
    } else {
        // if user is not logged in, findFromFavoritesBtn button is not added
        innerHTML = `
        <button id="findOnPreferenceBtn"> Find on preference </button> 
        <button id="findRandomBtn"> Find random game </button>

        `
    }
    //insert buttons into html element
    mainPageBtnContainer.innerHTML = innerHTML
}

function displayQuuestions() {

}