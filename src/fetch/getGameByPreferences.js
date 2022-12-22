const getGameByPreferences = async (URL, selectedData) => {
    //do a fetch call to get a game based on entered questions from api and return this data
    return await fetch(`${URL}/getGameByPreferences`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                genres: selectedData.genres,
                platform: selectedData.platform,
                tag: selectedData.tag
            })

        })
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export default getGameByPreferences