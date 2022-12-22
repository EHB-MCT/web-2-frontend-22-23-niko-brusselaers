const displayMainpageButtons = (isLoggedIn)  => {
    const mainPageBtnContainer = document.getElementById('mainPageBtnContainer')
    let innerHTML
    // if user is logged in, show all buttons
    if (isLoggedIn == "true") {
        innerHTML = `
        <button id="findOnPreferenceBtn"> Find on preference </button> 
        <button id="findRandomBtn"> Find random game </button>
        <button id="findFromFavoritesBtn"> Find random game from favorites </button>
        `
    } else {
        // if user is not logged in, findFromFavoritesBtn button is not added
        innerHTML = `
        <button id="findOnPreferenceBtn"> Find on preference </button> 
        <button id="findRandomBtn"> Find random game </button>

        `
    }
    //insert buttons into html element
    mainPageBtnContainer.innerHTML = innerHTML
}

export default displayMainpageButtons