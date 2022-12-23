const deleteUserGamePreference = async (URL, gameId) => {
    // get userID from session or localStorage
    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    // do a fetch call to delete game user prefrences inside database
    return await fetch(`${URL}/deleteUserGamePreference`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "updateUserPreferences": {
                    "userId": userId,
                    "gameId": gameId
                }
            })

        })
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export default deleteUserGamePreference