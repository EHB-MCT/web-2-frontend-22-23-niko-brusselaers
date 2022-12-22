const isLoggedIn = sessionStorage.getItem('isLoggedIn')
// var URL = 'https://gamepickr-backend.onrender.com'
var URL = "http://localhost:3000"
document.getElementById('index').classList.add("activeLink")

//if user is logged in or not, display a series of buttons for selecting a random game
displayMainpageButtons(isLoggedIn)


//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game
const findRandomBtn = document.getElementById("findRandomBtn")
findRandomBtn.addEventListener("click", (event) => {
    event.preventDefault()
    fetch(`${URL}/getRandomGame`, {
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
        fetch(`${URL}/getGameFromFavorites`, {
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
            <div class="gameCard" id="gameCard">
                <img src="${gameData.image}" alt="">
                <div>
                    <button id="dislikeBtn"> <span class="icon-thumbs-down" id="dislikeBtn"> </span></button>
                    <h3>${gameData.name}</h3> 
                    <button id="likeBtn" > <span class = "icon-heart" id="likeBtn"> </button>
                    <h4 class="gameId" id="gameId">${gameData.gameId}</h4> 
                </div> 
            </div> 
        `
    document.getElementById('mainContent').innerHTML = innerHTML
    const gameCard = document.querySelector('#gameCard')
    gameCard.addEventListener('click', async (element) => {
        //if clicked element is not gameCard, retrieve userId and gameId
        if (element.target != element.currentTarget) {
            let updateUserPreferences = {
                userId: sessionStorage.getItem('id') || localStorage.getItem('id'),
                gameId: element.currentTarget.querySelector('h4').innerHTML,
                isLiked: null
            }
            // if likedBtn has been clicked set isLiked true else if dislikeBtn has been clicked set it to false
            if (element.target.id == "likeBtn") updateUserPreferences.isLiked = true
            else if (element.target.id == "dislikeBtn") updateUserPreferences.isLiked = false
            // do a fetch call to update User Game Preference with the like/dislike of the displayed game
            let statusCode
            await fetch(`${URL}/updateUserGamePreference`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    updateUserPreferences
                })
            })


        }
    })
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

function displayQuestions() {

}