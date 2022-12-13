

const signInForm = document.getElementById('signInForm')
const url = 'http://localhost:3000'

signInForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let loginCredentials = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    console.log(loginCredentials);
    try {
        let statusCode
        fetch(`http://localhost:3000/login`, {
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
                    sessionStorage.setItem("id", data.user.userId);
                    sessionStorage.setItem('username', data.user.username);
                    if (document.getElementById('saveLogin').checked) {
                        localStorage.setItem('id', data.user.userId);
                        localStorage.setItem('username', data.user.username);
                    }
                    window.location.replace("index.html")

                }


            })
    } catch (error) {
        console.log(error.message);
    }

})