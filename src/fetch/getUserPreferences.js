import displayUserGamePreferences from "../display/displayUserGamePreferences"

const getUserPreferences = async (URL) => {
    let statusCode
    // retrieve userId from sessionStorage or localStorage
    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    // get all user game preferences from rest api
    await fetch(`${URL}/getUserPreferences`, {
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
            // if statuscode is 500 or there are no games, display that no game have been found, else display all games
            if (statusCode == 500 || data.games.length == 0) {
                document.getElementById('favoriteGamesContainer').innerHTML = `<p class='gameContainerText'>no favourites games found</p>`
                document.getElementById('dislikedGamesContainer').innerHTML = `<p class='gameContainerText'>no disliked games found</p>`

            } else {
                displayUserGamePreferences(data.games)
            }
        })
}

export default getUserPreferences