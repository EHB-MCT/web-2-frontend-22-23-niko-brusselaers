const createAccountForm = document.getElementById('createAccountForm')
const url = 'http://localhost:3000'


createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //get all input data from form
    const newUser = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value
    }
    let repeatPassword = document.getElementById('repeatPassword').value
    // if both password input value are the same, perform a fetch call to backend to create a new account
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
                    return response.json()
                })
                .then(data => {
                    //if fetch call is succesful and we receive statuscode 200, redirect to login page
                    if (statusCode == 200) {
                        window.location.replace("login.html")

                    }
                })
        } catch (error) {
            console.log(error.message);
        }

    } else {
        console.log("passwords do not match");
    }
})