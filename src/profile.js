const isLoggedIn = sessionStorage.getItem('isLoggedIn')
const url = 'http://localhost:3000'
document.getElementById('profile').classList.add("activeLink")


if (isLoggedIn == "true") {
    const usernameInput = document.getElementById('username')
    const firstnameInput = document.getElementById('firstname')
    const lastnameInput = document.getElementById('lastname')
    const emailInput = document.getElementById("email")
    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')
    const username = sessionStorage.getItem('username') || localStorage.getItem('username')
    let loginWithId = {
        "userId": userId,
        "username": username
    }
    fetch(`${url}/getUserData`, {
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
            usernameInput.placeholder = data.userData.username
            firstnameInput.placeholder = data.userData.firstname
            lastnameInput.placeholder = data.userData.lastname
            emailInput.placeholder = data.userData.email
        })

} else {
    window.location.replace("index.html")

}