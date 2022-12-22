import displayNav from "./display/displayNav"

const isLoggedIn = sessionStorage.getItem('isLoggedIn')
// const url = 'https://gamepickr-backend.onrender.com'
const url = 'http://localhost:3000'

displayNav(isLoggedIn)
document.getElementById('profile').classList.add("activeLink")

if (isLoggedIn == "true") {
    // if user is logged in, retrieve user credentials and replace input placeholder with them
    const usernameInput = document.getElementById('username')
    const firstnameInput = document.getElementById('firstname')
    const lastnameInput = document.getElementById('lastname')
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
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
            passwordInput.placeholder = "*".repeat(data.userData.password)

        })

    // get all user game preferences from rest api
    fetch(`${url}/getUserPreferences`, {
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
            if (statusCode == 500) {
                document.getElementById('favoriteGamesContainer').innerHTML = `<p>no favourites games found</p>`
                document.getElementById('dislikedGamesContainer').innerHTML = `<p>no disliked games found</p>`

            } else {
                displayUserGamePreferences(data.games)

            }
        })




} else {
    window.location.replace("index.html")

}

function displayUserGamePreferences(games) {
    let likedGamesInnerHTML = ``
    let dislikedGamesInnerHTML = ``
    for (let i = 0; i < games.length; i++) {
        //filter the game depending if the game is liked or not
        if (games[i].isLiked == true) {
            likedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <button id="deleteGameBtn"> X</button>

                            <img src="${games[i].image}"
                                alt="">
                            <div>
                                <h3>${games[i].name} </h3>
                                <h4 class="gameId" id="gameId">${games[i].gameId} </h4>
                            </div>
                        </div>`
        } else {
            dislikedGamesInnerHTML += `
                        <div class="gameCard " id="gameCard">
                            <button id="deleteGameBtn"> X</button>

                            <img src="${games[i].image}"
                                alt="">
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

let myProfile = document.querySelector('#myProfile')

myProfile.addEventListener("click", (element) => {
    if (element.target != element.currentTarget) {
        const overlay = document.getElementById('overlay')
        const container = document.getElementById('updateUserContainer')
        console.log(element.target.id);
        switch (element.target.id) {
            case "editUsername":
                container.innerHTML = `
                <form action="" id="editCredentialsForm">
                    <div class="input">
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="checkPassword" placeholder="current password" required>
                    </div>
                    <div class="input">
                        <label for="username">New Username:</label>
                        <input type="text" id=updateUsername" placeholder="username" required>
                    </div>
                    <div class='editCredentialsBtns'>
                        <button id="cancelBtn">cancel</button>
                        <button id="submitBtn" type="submit">submit</button>
                    </div>
                </form>
                `
                overlay.style.display = "flex"
                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = "none")
                updateUserCredentials("username")
                break;
            case "editFirstname":
                container.innerHTML = `
                <form action="" id="editCredentialsForm">
                    <div class="input">
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="checkPassword" placeholder="current password" required>
                    </div>
                    <div class="input">
                        <label for="firstname">Firstname:</label>
                        <input type="text" id=updateFirstname" placeholder="firstname" required>
                    </div>
                    <div class='editCredentialsBtns'>
                        <button id="cancelBtn">cancel</button>
                        <button id="submitBtn" type="submit">submit</button>
                    </div>
                </form>

                `
                overlay.style.display = "flex"
                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = "none")
                updateUserCredentials("firstname")


                break;
            case "editLastname":
                container.innerHTML = `
                <form action="" id="editCredentialsForm">
                    <div class="input">
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="checkPassword" placeholder="current password" required>
                    </div>
                    <div class="input">
                        <label for="lastname">Lastname:</label>
                        <input type="text" id=updateLastname" placeholder="lastname" required>
                    </div>
                    <div class='editCredentialsBtns'>
                        <button id="cancelBtn">cancel</button>
                        <button id="submitBtn" type="submit">submit</button>
                    </div>
                </form>
                `
                overlay.style.display = "flex"
                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = "none")
                updateUserCredentials("lastname")


                break;
            case "editEmail":
                container.innerHTML = `
                <form action="" id="editCredentialsForm">
                    <div class="input">
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="checkPassword" placeholder="current password" required>
                    </div>
                    <div class="input">
                        <label for="email">New Email:</label>
                        <input type="email" id=updateEmail" placeholder="email" required>
                    </div>
                    <div class='editCredentialsBtns'>
                        <button id="cancelBtn">cancel</button>
                        <button id="submitBtn" type="submit">submit</button>
                    </div>
                </form>
                `
                overlay.style.display = "flex"
                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = "none")
                updateUserCredentials("Email")

                break;
            case "editPassword":
                container.innerHTML = `
                <form action="" id="editCredentialsForm">
                    <div class="input">
                        <label for="currentPassword">Current Password:</label>
                        <input type="password" id="checkPassword" placeholder="current password" required>
                    </div>
                    <div class="input">
                        <label for="newPassword">New Password:</label>
                        <input type="password" id="updatePassword" placeholder="New Password" required>
                    </div>
                    <div class='editCredentialsBtns'>
                        <button id="cancelBtn">cancel</button>
                        <button id="submitBtn" type="submit">submit</button>
                    </div>
                </form>

                `
                overlay.style.display = "flex"
                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = "none")
                updateUserCredentials("Password")


                break;
        }
    }
})

function updateUserCredentials(type) {
    let editCredentialsForm = document.getElementById('editCredentialsForm')
    editCredentialsForm.addEventListener('submit', (event) => {
        console.log('click');
        event.preventDefault()
        let newUserCredentials = {
            userId: sessionStorage.getItem('id') || localStorage.getItem('id'),
            password: document.getElementById('checkPassword').value,
            type: type,
            newCredential: null

        }
        switch (newUserCredentials.type) {
            case "username":
                newUserCredentials.newCredential = document.getElementById('updateUsername').value
                break;
            case "firstname":
                newUserCredentials.newCredential = document.getElementById('updateFirstname').value

                break;
            case "lastname":
                newUserCredentials.newCredential = document.getElementById('updateLastname').value

                break;
            case "email":
                newUserCredentials.newCredential = document.getElementById('updateEmail').value

                break;
            case "password":
                newUserCredentials.newCredential = document.getElementById('updatePassword')

                break;


        }

        console.log(newUserCredentials);


    })
}