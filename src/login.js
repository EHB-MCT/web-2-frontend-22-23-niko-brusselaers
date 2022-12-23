const signInForm = document.getElementById('signInForm')
const isLoggedIn = sessionStorage.getItem('isLoggedIn')
const URL = 'https://gamepickr-backend.onrender.com'


// if user has already logged in, redirect to main
if (isLoggedIn == "true") {
    window.location.replace("index.html")
} else {
    signInForm.addEventListener("submit", (event) => {
        event.preventDefault()
        //get all input data from form
        let loginCredentials = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        }
        try {
            let statusCode
            // perform a fetch call to check if user credentials are valid
            fetch(`${URL}/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({
                        loginCredentials
                    })
                }).then(response => {
                    statusCode = response.status
                    return response.json()
                })
                .then(data => {
                    if (statusCode == 200) {
                        sessionStorage.setItem("isLoggedIn", true);
                        // if user credentials are valid and we receive statuscode 200,
                        if (document.getElementById('saveLogin').checked) {
                            // save data in localStorage if remember me has been checked
                            localStorage.setItem('id', data.user.userId);
                            localStorage.setItem('username', data.user.username);
                        } else {
                            // if remember me has not been checked, save data in sessionStorage
                            sessionStorage.setItem("id", data.user.userId);
                            sessionStorage.setItem('username', data.user.username);
                        }
                        // redirect to main page
                        window.location.replace("index.html")

                    }


                })
        } catch (error) {
            console.log(error.message);
        }

    })
}