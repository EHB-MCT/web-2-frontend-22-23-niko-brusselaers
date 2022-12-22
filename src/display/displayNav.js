//depending is the user is logged in or not, create a version of navigation
const displayNav = (isLoggedIn) => {
    const nav = document.getElementById('header')
    let innerHTML
    //if user is logged in, show; logo, mainpage link, profile link, and logout button
    if (isLoggedIn == "true") {
        innerHTML = `
            <a href="./index.html"> <img class="navLogo" src="./images/logo.png" alt="logo image Game Select"> </a>
        <div>
            <a href = "./index.html" class="navLinks" id='index'> Main </a>
            <a href = "./profile.html#myProfile" class = "navLinks" id='profile'> Profile </a> 
            <a href = "#" class = "navLinks" id="logout"> Log out </a>
        </div>
        `
        nav.innerHTML = innerHTML
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
    } else {
        // if user is not logged in, show logo, mainpage link and sign-in link
        innerHTML = `
            <a href="./index.html"> <img class="navLogo" src="./images/logo.png" alt="logo image Game Select" > </a>

        <div>
            <a href = "./index.html" class="navLinks" id='index' >  Main </a>
            <a href = "./login.html" class="navLinks" id='profile'> Sign In </a> 
        </div>
        `
        nav.innerHTML = innerHTML
    }
}


export default displayNav