import deleteUserGamePreference from "../fetch/deleteUserGamePreference"

const displayUserGamePreferences = (games, URL) => {
    let likedGamesInnerHTML = ``
    let dislikedGamesInnerHTML = ``
    for (let i = 0; i < games.length; i++) {
        //filter the game depending if the game is liked or not
        if (games[i].isLiked == true) {
            likedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <div class='imageContainer'>
                                <button id="deleteGameBtn"> X</button>

                                <img  src="${games[i].image}" class='imgGame'  "alt="">
                            </div>
                            <div class='gameDetails'>
                                <h3>${games[i].name} </h3>
                                <h4 class="gameId" id="gameId">${games[i].gameId}</h4>
                            </div>
                        </div>`
        } else {
            dislikedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <div class='imageContainer'>
                                <button id="deleteGameBtn"> X</button>

                                <img  src="${games[i].image}" class='imgGame'  "alt="">
                            </div>
                            <div class='gameDetails'>
                                <h3>${games[i].name} </h3>
                                <h4 class="gameId" id="gameId">${games[i].gameId}</h4>
                            </div>
                        </div>`
        }
        //insert gameCards inside liked and disliked containers
        document.getElementById('favoriteGamesContainer').innerHTML = likedGamesInnerHTML
        document.getElementById('dislikedGamesContainer').innerHTML = dislikedGamesInnerHTML
        // add an event listner to every click on the element section with clasname myFavourites
        let myFavorites = document.querySelector('section#myFavorites')
        myFavorites.addEventListener('click', async (element) => {
            // if deleteGameBtn has been clicked, get gameId and do a fetch call to remove game from database
            if (element.target != element.currentTarget) {
                let elementId = element.target.id
                if (elementId == "deleteGameBtn") {
                    let gameCard = element.target.closest('div#gameCard')
                    let gameId = gameCard.querySelector('div.gameDetails').querySelector('h4').innerHTML
                    let result = await deleteUserGamePreference(URL, gameId)
                    console.log(result);
                    // if game has been succesfully removed from database, remove game from list
                    if (result.message == "ok") {
                        gameCard.remove()
                    }
                }

            };
        })
    }
}

export default displayUserGamePreferences