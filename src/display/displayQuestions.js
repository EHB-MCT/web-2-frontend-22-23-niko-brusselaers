import displayGame from "./displayGame"
import getGameByPreferences from "../fetch/getGameByPreferences"

const displayQuestions = async (questionType, URL, selectedData = null) => {
    const mainContent = document.getElementById('mainContent')

    switch (questionType) {
        case "genre":
            //set button container display to none and display the option buttons for genre
            document.getElementById("mainPageBtnContainer").style.display = "none"
            mainContent.innerHTML = `
                <h1>Find By Preferences</h1>
                <p>
                    What are your favorite genres? <br>
                    multiple answers are possible 
                </p>
                <div id="questionContainerGenre" class="questionContainer">
                    <button>action</button>
                    <button>strategy</button>
                    <button>rpg</button>
                    <button>shooter</button>
                    <button>adventure</button>
                    <button>puzzle</button>
                    <button>racing</button>
                    <button>sports</button>
                </div>
                <button class="nextBtn" id="nextBtnGenre">Next</button>
                <div class="inputedDataContainer" id="inputedDataContainer"></div>
                `

            // if a question button is pressed, add or remove class selectedBtn to add or remove button border
            const questionContainerGenre = document.querySelector('#questionContainerGenre')
            questionContainerGenre.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            // if user presses the next button, read all buttons innerhtml with class selectedBtn
            // and add it to variable genres
            let nextBtnGenre = document.getElementById('nextBtnGenre')
            nextBtnGenre.addEventListener('click', () => {
                let genres = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    genres.push(element.innerHTML)
                })
                // insert genres into selectedData variable and start diplayFunctions to start the next series of questions
                selectedData = {
                    genres: genres,
                    platform: null,
                    tag: null
                }

                displayQuestions("platform", URL, selectedData)
            })
            break;
        case "platform":
            // display the option buttons for platform
            mainContent.innerHTML = `
                <h1>Find By Preferences</h1>
                <p>
                    on what platform do you play? <br>
                    multiple answers are possible 
                </p>
                <div id="questionContainerPlatform" class="questionContainer">
                    <button id="4">PC</button>
                    <button id="6">Linux</button>
                    <button id="187">Playstation 5</button>
                    <button id="18">Playstation 4</button>
                    <button id="1">Xbox one</button>
                    <button id="186 ">Xbox series</button>
                    <button id="7">Nintendo Switch</button>
                </div>
                <button class="nextBtn" id="nextBtnPlatform">Next</button>
                `
            // if a question button is pressed, add or remove class selectedBtn to add or remove button border
            const questionContainerPlatform = document.querySelector('#questionContainerPlatform')
            questionContainerPlatform.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            // if user presses the next button, read all buttons id's with class selectedBtn
            // and add it to variable platform
            let nextBtnPlatform = document.getElementById('nextBtnPlatform')
            nextBtnPlatform.addEventListener('click', () => {
                let platform = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    platform.push(element.id)
                })
                // insert platform into selectedData variable and start diplayFunctions to start the next series of questions
                selectedData.platform = platform
                displayQuestions("tag", URL, selectedData)

            })
            break;
        case "tag":
            // display the option buttons for tags
            mainContent.innerHTML = `
                <h1>Find By Preferences</h1>
                <p>
                    which type of games do you like? <br>
                    multiple answers are possible 
                </p>
                <div id="questionContainerTag" class="questionContainer">
                    <button>Singleplayer</button>
                    <button>Multiplayer</button>
                    <button>Co-op</button>
                    <button>Atmospheric</button>
                    <button>Full controller support</button>
                </div>
                <button class="nextBtn" id="nextBtnTag">Next</button>
                <div class="inputedDataContainer" id="inputedDataContainer"></div>
                `

            // if a question button is pressed, add or remove class selectedBtn to add or remove button border
            const questionContainerTag = document.querySelector('#questionContainerTag')
            questionContainerTag.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            // if user presses the next button, read all buttons innerhtml with class selectedBtn
            // and add it to variable tag
            let nextBtnTag = document.getElementById('nextBtnTag')
            nextBtnTag.addEventListener('click', () => {
                let tag = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    tag.push(element.innerHTML)
                })
                // insert tag into selectedData variable and start diplayFunctions to start fetch call and display random selected game
                selectedData.tag = tag
                displayQuestions("fetch", URL, selectedData)


            })
            break;
        case "fetch":
            //fetch a random game based on prefrences
            let randomGame = await getGameByPreferences(URL, selectedData)
            //set button container display to flex to it visible again
            document.getElementById("mainPageBtnContainer").style.display = "flex"
            //start function displayGame to display the randomly selected game
            displayGame(randomGame, URL)
            break;


    }
}

export default displayQuestions