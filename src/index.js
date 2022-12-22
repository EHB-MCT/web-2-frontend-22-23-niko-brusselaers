import displayGame from "./display/displayGame"
import displayMainpageButtons from "./display/displayMainpageButtons"
import displayNav from "./display/displayNav"
import getGameFromFavorites from "./fetch/getGameFromFavorites"
import getRandomGame from "./fetch/getRandomGame"
const isLoggedIn = sessionStorage.getItem('isLoggedIn')
// var URL = 'https://gamepickr-backend.onrender.com'
var URL = "http://localhost:3000"
// display a certain version of nav, depending if the user is logged in or not
displayNav(isLoggedIn)
document.getElementById('index').classList.add("activeLink")
//if user is logged in or not, display a series of buttons for selecting a random game
displayMainpageButtons(isLoggedIn)



//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game
const findRandomBtn = document.getElementById("findRandomBtn")
findRandomBtn.addEventListener("click", async () => {
    let randomGame = await getRandomGame(URL)
    //when data about game has been received update main page to display the randomly selected game
    displayGame(randomGame)

})

const findOnPreferenceBtn = document.getElementById("findOnPreferenceBtn")


// if user is logged in, create an eventlistener for findFromFavoritesBtn
if (isLoggedIn == "true") {
    const findFromFavoritesBtn = document.getElementById("findFromFavoritesBtn")
    // if user clicks on findFromFavoritesBtn, perform a fetch call to get a random game from user favourites
    findFromFavoritesBtn.addEventListener('click', async () => {
        let randomGame = await getGameFromFavorites(URL)
        //when data about game has been received update main page to display the randomly selected game
        displayGame(randomGame)
    })

}