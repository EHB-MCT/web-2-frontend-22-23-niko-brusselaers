const getUserData = async (URL) => {
    // get userId and username from session or local storage
    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    const username = sessionStorage.getItem('username') || localStorage.getItem('username')
    //doing a fetch call to api to retrieve user credentials data
    return await fetch(`${URL}/getUserData`, {
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
            document.getElementById('username').placeholder = data.userData.username
            document.getElementById('firstname').placeholder = data.userData.firstname
            document.getElementById('lastname').placeholder = data.userData.lastname
            document.getElementById("email").placeholder = data.userData.email
            document.getElementById("password").placeholder = "*".repeat(data.userData.password)
        })
}

export default getUserData