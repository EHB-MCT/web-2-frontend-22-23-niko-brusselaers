const createAccountForm = document.getElementById('createAccountForm')
const isLoggedIn = sessionStorage.getItem('isLoggedIn')
const URL = 'https://gamepickr-backend.onrender.com'

// if user has already logged in, redirect to main page
if (isLoggedIn == "true") {
    window.location.replace("index.html")
} else {
    createAccountForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log('click');
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
                fetch(`${URL}/createAccount`, {
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

        }
    })
}