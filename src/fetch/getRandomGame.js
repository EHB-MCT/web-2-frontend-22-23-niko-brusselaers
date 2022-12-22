const getRandomGame = async (URL) => {
    return await fetch(`${URL}/getRandomGame`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export default getRandomGame