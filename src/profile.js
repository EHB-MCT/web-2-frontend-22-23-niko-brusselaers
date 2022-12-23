import displayNav from "./display/displayNav"
import getUserPreferences from "./fetch/getUserPreferences"
import getUserData from "./fetch/getUserData"
import updateAccount from "./fetch/updateAccount"
import displayUpdateAccountForm from "./display/displayUpdateAccountForm"

const isLoggedIn = sessionStorage.getItem('isLoggedIn')
const URL = 'https://gamepickr-backend.onrender.com'
console.log(isLoggedIn);
displayNav(isLoggedIn)
document.getElementById('profile').classList.add("activeLink")

if (isLoggedIn == "true") {
    // if perform a fetch call to retrieve userDate and insert them as placeholder in the inputs
    getUserData(URL).userData
    // get all user game preferences from rest api
    getUserPreferences(URL)
    // create a eventlistner to add a form when user presses on any of the edit buttons on profile page
    displayUpdateAccountForm(URL)

    

    


} else {
    window.location.replace("index.html")

}