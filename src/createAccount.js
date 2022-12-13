/**
 * createAccountForm
 * userName
 * email
 * password
 * repeatPassword
 */

const createAccountForm = document.getElementById('createAccountForm')
const url = 'http://localhost:3000'


createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newUser = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value
    }
    let repeatPassword = document.getElementById('repeatPassword').value
    console.log(repeatPassword);
    console.log(newUser);
    if (newUser.password == repeatPassword) {
        try {
            let statusCode
            fetch(`http://localhost:3000/createAccount`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        newUser
                    })
                }).then(response => {
                    statusCode = response.status
                    return response.json()})
                .then(data => {
                    console.log(data);
                    if (statusCode == 200) {
                        window.location.replace("signIn.html")
                        
                    }
                })
        } catch (error) {
            console.log(error.message);
        }

    } else {
        console.log("passwords do not match");
    }
})