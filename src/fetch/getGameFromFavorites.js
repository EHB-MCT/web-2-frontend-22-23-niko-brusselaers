const getGameFromFavorites = async (URL) => {
    //do a fetch call to get a random game from api and return this data
    let userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    return await fetch(`${URL}/getGameFromFavorites`, {
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
            return data
        })
}

export default getGameFromFavorites