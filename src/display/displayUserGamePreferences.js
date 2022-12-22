const displayUserGamePreferences = (games) => {
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
                                <h4 class="gameId" id="gameId">${games[i].gameId} </h4>
                            </div>
                        </div>`
        } else {
            dislikedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <div class='imageContainer'>
                                <button id="deleteGameBtn"> X</button>

                                <img src="${games[i].image}" class='imgGame'  alt="">
                            </div>
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

export default displayUserGamePreferences