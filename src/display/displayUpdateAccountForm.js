import updateAccount from "../fetch/updateAccount"



const displayUpdateAccountForm = (URL) => {
    //create an event listener for my profile
    let myProfile = document.querySelector('#myProfile')
    myProfile.addEventListener("click", (element) => {
        // if the user clicks on the edit button, display an overlay with updateCredentials form
        if (element.target != element.currentTarget) {
            let elementInnerHTML = element.target.innerHTML
            if (elementInnerHTML == "edit") {
                const overlay = document.getElementById('overlay')
                const body = document.querySelector('body')
                let innerHTML = `
                <div class="overlay" id="overlay">
                    <div class="overlayContainer">
                        <h2>please enter the following details:</h2>
                        <div id="updateUserContainer">
                            <form id="editCredentialsForm">
                                <div class="input">
                                    <label for="currentPassword">Current Password:</label>
                                    <input type="password" id="currentPassword" placeholder="current password" required>
                                </div>
                                <div class="input">
                                    <label for="username">New ${element.target.classList[0]}:</label>
                                    <input type="text" id="newCredential" placeholder="${element.target.classList[0]}" required>
                                </div>
                                <div class='editCredentialsBtns'>
                                    <button id="submitBtn" type="submit">submit</button>
                                    <button id="cancelBtn">cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                `
                body.insertAdjacentHTML('beforebegin', innerHTML)
                // if user clicks on cancel button, remove overlay and form
                document.getElementById('cancelBtn').addEventListener('click', () => document.getElementById("overlay").remove())
                let editCredentialsForm = document.getElementById('editCredentialsForm')
                // if user clicks on submit get data from form and perform a fetch call to update user credentials
                editCredentialsForm.addEventListener('submit', async (event) => {
                    event.preventDefault()

                    let updateUserCredentials = {
                        userId: sessionStorage.getItem('id') || localStorage.getItem('id'),
                        password: document.getElementById('currentPassword').value,
                        newCredential: document.getElementById('newCredential').value,
                        type: element.target.classList[0]
                    }
                    let result = updateAccount(URL, updateUserCredentials)
                    if (result = "ok") {
                        if (updateUserCredentials.type == "username") {
                            //setting username in sessionStorage and localStorage
                            sessionStorage.setItem('username', updateUserCredentials.newCredential)
                            localStorage.setItem('username', updateUserCredentials.newCredential)
                        }
                        setTimeout(() => {
                            location.reload()

                        }, 1000)
                    }
                })
            }
        }
    })
}

export default displayUpdateAccountForm