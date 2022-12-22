import displayNav from "./display/displayNav"
import getUserPreferences from "./fetch/getUserPreferences"
import getUserData from "./fetch/getUserData"

const isLoggedIn = sessionStorage.getItem('isLoggedIn')
// const url = 'https://gamepickr-backend.onrender.com'
var URL = 'http://localhost:3000'

displayNav(isLoggedIn)
document.getElementById('profile').classList.add("activeLink")

if (isLoggedIn == "true") {
    // if perform a fetch call to retrieve userDate and insert them as placeholder in the inputs
    getUserData(URL).userData
    // get all user game preferences from rest api
    getUserPreferences(URL)




} else {
    window.location.replace("index.html")

}



let myProfile = document.querySelector('#myProfile')

myProfile.addEventListener("click", (element) => {
    if (element.target != element.currentTarget) {
        const overlay = document.getElementById('overlay')
        const container = document.getElementById('updateUserContainer')
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



    })
}