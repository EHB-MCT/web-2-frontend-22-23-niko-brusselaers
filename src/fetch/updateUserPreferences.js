const updateUserPreferences = async (newUserPreferences,URL) => {
    //post user new like of dislike of a game and store it inside database
    await fetch(`${URL}/updateUserGamePreference`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            newUserPreferences
        })
    })
}

export default updateUserPreferences