const url = 'http://localhost:3000'

loginWithId = () => {
    //retrieve user credential either from sessionStorage or localStorage, if both ar empty return null
    let userId = sessionStorage.getItem('id') || localStorage.getItem('id') || null
    let username = sessionStorage.getItem('username') || localStorage.getItem('username') || null
    // if userId and username are not null, do a fetch request to check if userId and username are valid
    if (userId != null && !username != null) {
        fetch(`${url}/loginId`, {
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
                }

            )
            .then(response => response.json())
            .then(data => {
                // if credentials are valid, create a new variable in sessionStorage and set it to true
                if (data.isValid) {
                    sessionStorage.setItem("isLoggedIn", true);
                    // if credentials are not valid, create a new variable in sessionStorage and set it to false and remove credentials out of both sessionStorage and localStorage
                } else {
                    sessionStorage.setItem("isLoggedIn", false);
                    sessionStorage.removeItem('id')
                    sessionStorage.removeItem('username')
                    localStorage.removeItem('id')
                    localStorage.removeItem('username')
                }
            })
        //if no credentials are saved in localStorage or sessionsStorage, create a new variable in sessionStorage and set it to false
    } else {
        sessionStorage.setItem("isLoggedIn", false);
    }
}

loginWithId()