// retrieving isLoggedIn key from session storage
const isLoggedIn = sessionStorage.getItem('isLoggedIn')
//depending is the user is logged in or not, create a version of navigation
displayNav(isLoggedIn)
// if user is logged in, create a eventlistener for logout button 
if (isLoggedIn == "true") {
    const logoutbtn = document.getElementById('logout')
    // if user presses the logout button, remove all localStorage and sessionStorage keys for loggin in
    logoutbtn.addEventListener('click', (event) => {
        event.preventDefault()
        sessionStorage.setItem("isLoggedIn", false);
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('username')
        localStorage.removeItem('id')
        localStorage.removeItem('username')
        window.location.reload()
    })
}


function displayNav(isLoggedIn) {
    const nav = document.getElementById('header')
    let innerHTML
    //if user is logged in, show; logo, mainpage link, profile link, and logout button
    if (isLoggedIn == "true") {
        innerHTML = `
            <a href="./index.html"> <img class="navLogo" src="./images/logo.png" alt="logo image Game Select"> </a>
        <div>
            <a href = "./index.html" class = "navLinks activeLink"> Main </a>
            <a href = "./profile.html" class = "navLinks"> Profile </a> 
            <a href = "#" class = "navLinks" id="logout"> Log out </a>
        </div>
        `
    } else {
        // if user is not logged in, show logo, mainpage link and sign-in link
        innerHTML = `
            <a href="./index.html"> <img class="navLogo" src="./images/logo.png" alt="logo image Game Select" > </a>

        <div>
            <a href = "./index.html" class = "navLinks activeLink"> Main </a>
            <a href = "./login.html" class = "navLinks" > Sign In </a> 
        </div>
        `
    }
    nav.innerHTML = innerHTML
}