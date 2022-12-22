import displayGame from "./displayGame"
import getGameByPreferences from "../fetch/getGameByPreferences"

const displayQuestions = async (questionType, selectedData = null, URL) => {
    const mainContent = document.getElementById('mainContent')

    switch (questionType) {
        case "genre":
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


            const questionContainerGenre = document.querySelector('#questionContainerGenre')
            questionContainerGenre.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            let nextBtnGenre = document.getElementById('nextBtnGenre')
            nextBtnGenre.addEventListener('click', () => {
                console.log('click');
                let genres = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    genres.push(element.innerHTML)
                })
                selectedData = {
                    genres: genres,
                    platform: null,
                    tag: null
                }
                displayQuestions("platform", selectedData, URL)
            })
            break;
        case "platform":
            console.log(selectedData);
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

            const questionContainerPlatform = document.querySelector('#questionContainerPlatform')
            questionContainerPlatform.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            let nextBtnPlatform = document.getElementById('nextBtnPlatform')
            nextBtnPlatform.addEventListener('click', () => {
                console.log('click');
                let platform = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    platform.push(element.id)
                })
                selectedData.platform = platform
                displayQuestions("tag", selectedData, URL)
            })
            break;
        case "tag":
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


            const questionContainerTag = document.querySelector('#questionContainerTag')
            questionContainerTag.addEventListener('click', (element) => {
                if (element.target != element.currentTarget) {
                    if (element.target.classList[0] == "selectedBtn") element.target.classList.remove("selectedBtn")
                    else element.target.classList.add("selectedBtn")

                }
            })
            let nextBtnTag = document.getElementById('nextBtnTag')
            nextBtnTag.addEventListener('click', () => {
                console.log('click');
                let tag = []
                let selectedBtns = document.querySelectorAll('button.selectedBtn')
                selectedBtns.forEach(element => {
                    tag.push(element.innerHTML)
                })
                selectedData.tag = tag
                console.log(selectedData);
                displayQuestions("fetch", selectedData, URL)

            })
            break;
        case "fetch":
            let randomGame = await getGameByPreferences(URL, selectedData)
            document.getElementById("mainPageBtnContainer").style.display = "flex"
            displayGame(randomGame,URL)
            break;


    }
}

export default displayQuestions