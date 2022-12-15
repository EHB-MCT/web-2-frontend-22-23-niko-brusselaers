const isLoggedIn = sessionStorage.getItem('isLoggedIn')
const url = 'https://gamepickr-backend.onrender.com'
document.getElementById('profile').classList.add("activeLink")

if (isLoggedIn == "true") {
    // if user is logged in, retrieve user credentials and replace input placeholder with them
    const usernameInput = document.getElementById('username')
    const firstnameInput = document.getElementById('firstname')
    const lastnameInput = document.getElementById('lastname')
    const emailInput = document.getElementById("email")
    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    const username = sessionStorage.getItem('username') || localStorage.getItem('username')
    let loginWithId = {
        "userId": userId,
        "username": username
    }
    fetch(`${url}/getUserData`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginWithId: {
                    userId: userId,
                    username: username
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            usernameInput.placeholder = data.userData.username
            firstnameInput.placeholder = data.userData.firstname
            lastnameInput.placeholder = data.userData.lastname
            emailInput.placeholder = data.userData.email
        })

    // get all user game preferences from rest api
    fetch(`${url}/getUserPreferences`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId
            })
        })
        .then(response => {
            statusCode = response.status
            return response.json()
        })
        .then(data => {
            if (statusCode == 500) {
                document.getElementById('favoriteGamesContainer').innerHTML = `<p>no favourites games found</p>`
                document.getElementById('dislikedGamesContainer').innerHTML = `<p>no disliked games found</p>`

            } else {
                displayUserGamePreferences(data.games)

            }
        })




} else {
    window.location.replace("index.html")

}

function displayUserGamePreferences(games) {
    let likedGamesInnerHTML = ``
    let dislikedGamesInnerHTML = ``
    console.log(games);
    for (let i = 0; i < games.length; i++) {
        //filtezr the game depending if the game is liked or not
        if (games[i].isLiked == true) {
            likedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <button id="deleteGameBtn"> X</button>

                            <img src="${games[i].image}"
                                alt="">
                            <div>
                                <h3>${games[i].name} </h3>
                                <h4 class="gameId" id="gameId">${games[i].gameId} </h4>
                            </div>
                        </div>`
        } else {
            dislikedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <button id="deleteGameBtn"> X</button>

                            <img src="${games[i].image}"
                                alt="">
                            <div>
                                <h3>${games[i].name} </h3>
                                <h4 class="gameId" id="gameId">${games[i].gameId} </h4>
                            </div>
                        </div>`
        }
        //insert gameCards inside liked and disliked containers
        document.getElementById('favoriteGamesContainer').innerHTML = likedGamesInnerHTML
        document.getElementById('dislikedGamesContainer').innerHTML = dislikedGamesInnerHTML
    }
}