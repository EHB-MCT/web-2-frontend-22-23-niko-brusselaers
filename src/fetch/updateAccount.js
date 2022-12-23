const updateAccount = async (URL, updateUserCredentials) => {
    console.log(updateUserCredentials);
    return await fetch(`${URL}/updateAccount`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "updateUserCredentials": {
                    "userId": updateUserCredentials.userId,
                    "password": updateUserCredentials.password,
                    "newCredential": updateUserCredentials.newCredential,
                    "type": updateUserCredentials.type
                }
            })

        })
        .then(response => response.json())
        .then(async data => {
            return data.message
        })
}

export default updateAccount