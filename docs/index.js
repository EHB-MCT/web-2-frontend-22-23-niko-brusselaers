/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display/displayGame.js":
/*!************************************!*\
  !*** ./src/display/displayGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_updateUserPreferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/updateUserPreferences */ \"./src/fetch/updateUserPreferences.js\");\n\r\n\r\n\r\nconst displayGame = (gameData, URL) => {\r\n    // insert randomly selected game inside html element\r\n    let innerHTML = `\r\n            <h1> Random Game </h1> \r\n            <p> We have selected a random game for you. <br>\r\n                 </p>\r\n            <div class=\"gameCard\" id=\"gameCard\">\r\n                <div class='imageContainer'>\r\n                    <img src=\"${gameData.image}\" alt=\"\">\r\n                </div>\r\n                <div class='gameDetails'>\r\n                    <button id=\"dislikeBtn\"> <span class=\"icon-thumbs-down\" id=\"dislikeBtn\"> </span></button>\r\n                    <h3>${gameData.name}</h3> \r\n                    <button id=\"likeBtn\" > <span class = \"icon-heart\" id=\"likeBtn\"> </button>\r\n                    <h4 class=\"gameId\" id=\"gameId\">${gameData.gameId}</h4> \r\n                </div> \r\n            </div> \r\n        `\r\n    document.getElementById('mainContent').innerHTML = innerHTML\r\n    const gameCard = document.querySelector('#gameCard')\r\n    gameCard.addEventListener('click', async (element) => {\r\n        //if clicked element is not gameCard, retrieve userId and gameId\r\n        if (element.target != element.currentTarget) {\r\n            let newUserPreferences = {\r\n                userId: sessionStorage.getItem('id') || localStorage.getItem('id'),\r\n                gameId: element.currentTarget.querySelector('h4').innerHTML,\r\n                isLiked: null\r\n            }\r\n            // if likedBtn has been clicked set isLiked true else if dislikeBtn has been clicked set it to false\r\n            if (element.target.id == \"likeBtn\") newUserPreferences.isLiked = true\r\n            else if (element.target.id == \"dislikeBtn\") newUserPreferences.isLiked = false\r\n            // do a fetch call to update User Game Preference with the like/dislike of the displayed game\r\n            ;(0,_fetch_updateUserPreferences__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newUserPreferences, URL)\r\n\r\n\r\n\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGame);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayGame.js?");

/***/ }),

/***/ "./src/display/displayMainpageButtons.js":
/*!***********************************************!*\
  !*** ./src/display/displayMainpageButtons.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMainpageButtons = (isLoggedIn)  => {\r\n    const mainPageBtnContainer = document.getElementById('mainPageBtnContainer')\r\n    let innerHTML\r\n    // if user is logged in, show all buttons\r\n    if (isLoggedIn == \"true\") {\r\n        innerHTML = `\r\n        <button id=\"findOnPreferenceBtn\"> Find on preference </button> \r\n        <button id=\"findRandomBtn\"> Find random game </button>\r\n        <button id=\"findFromFavoritesBtn\"> Find random game from favorites </button>\r\n        `\r\n    } else {\r\n        // if user is not logged in, findFromFavoritesBtn button is not added\r\n        innerHTML = `\r\n        <button id=\"findOnPreferenceBtn\"> Find on preference </button> \r\n        <button id=\"findRandomBtn\"> Find random game </button>\r\n\r\n        `\r\n    }\r\n    //insert buttons into html element\r\n    mainPageBtnContainer.innerHTML = innerHTML\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMainpageButtons);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayMainpageButtons.js?");

/***/ }),

/***/ "./src/display/displayNav.js":
/*!***********************************!*\
  !*** ./src/display/displayNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//depending is the user is logged in or not, create a version of navigation\r\nconst displayNav = (isLoggedIn) => {\r\n    const nav = document.getElementById('header')\r\n    let innerHTML\r\n    //if user is logged in, show; logo, mainpage link, profile link, and logout button\r\n    if (isLoggedIn == \"true\") {\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\"> </a>\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index'> Main </a>\r\n            <a href = \"./profile.html#myProfile\" class = \"navLinks\" id='profile'> Profile </a> \r\n            <a href = \"#\" class = \"navLinks\" id=\"logout\"> Log out </a>\r\n        </div>\r\n        `\r\n        nav.innerHTML = innerHTML\r\n        const logoutbtn = document.getElementById('logout')\r\n        // if user presses the logout button, remove all localStorage and sessionStorage keys for loggin in\r\n        logoutbtn.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            sessionStorage.setItem(\"isLoggedIn\", false);\r\n            sessionStorage.removeItem('id')\r\n            sessionStorage.removeItem('username')\r\n            localStorage.removeItem('id')\r\n            localStorage.removeItem('username')\r\n            window.location.reload()\r\n        })\r\n    } else {\r\n        // if user is not logged in, show logo, mainpage link and sign-in link\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\" > </a>\r\n\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index' >  Main </a>\r\n            <a href = \"./login.html\" class=\"navLinks\" id='profile'> Sign In </a> \r\n        </div>\r\n        `\r\n        nav.innerHTML = innerHTML\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNav);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayNav.js?");

/***/ }),

/***/ "./src/display/displayQuestions.js":
/*!*****************************************!*\
  !*** ./src/display/displayQuestions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayGame */ \"./src/display/displayGame.js\");\n/* harmony import */ var _fetch_getGameByPreferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/getGameByPreferences */ \"./src/fetch/getGameByPreferences.js\");\n\r\n\r\n\r\nconst displayQuestions = async (questionType, selectedData = null, URL) => {\r\n    const mainContent = document.getElementById('mainContent')\r\n\r\n    switch (questionType) {\r\n        case \"genre\":\r\n            //set button container display to none and display the option buttons for genre\r\n            document.getElementById(\"mainPageBtnContainer\").style.display = \"none\"\r\n            mainContent.innerHTML = `\r\n                <h1>Find By Preferences</h1>\r\n                <p>\r\n                    What are your favorite genres? <br>\r\n                    multiple answers are possible \r\n                </p>\r\n                <div id=\"questionContainerGenre\" class=\"questionContainer\">\r\n                    <button>action</button>\r\n                    <button>strategy</button>\r\n                    <button>rpg</button>\r\n                    <button>shooter</button>\r\n                    <button>adventure</button>\r\n                    <button>puzzle</button>\r\n                    <button>racing</button>\r\n                    <button>sports</button>\r\n                </div>\r\n                <button class=\"nextBtn\" id=\"nextBtnGenre\">Next</button>\r\n                <div class=\"inputedDataContainer\" id=\"inputedDataContainer\"></div>\r\n                `\r\n\r\n            // if a question button is pressed, add or remove class selectedBtn to add or remove button border\r\n            const questionContainerGenre = document.querySelector('#questionContainerGenre')\r\n            questionContainerGenre.addEventListener('click', (element) => {\r\n                if (element.target != element.currentTarget) {\r\n                    if (element.target.classList[0] == \"selectedBtn\") element.target.classList.remove(\"selectedBtn\")\r\n                    else element.target.classList.add(\"selectedBtn\")\r\n\r\n                }\r\n            })\r\n            // if user presses the next button, read all buttons innerhtml with class selectedBtn\r\n            // and add it to variable genres\r\n            let nextBtnGenre = document.getElementById('nextBtnGenre')\r\n            nextBtnGenre.addEventListener('click', () => {\r\n                let genres = []\r\n                let selectedBtns = document.querySelectorAll('button.selectedBtn')\r\n                selectedBtns.forEach(element => {\r\n                    genres.push(element.innerHTML)\r\n                })\r\n                // insert genres into selectedData variable and start diplayFunctions to start the next series of questions\r\n                selectedData = {\r\n                    genres: genres,\r\n                    platform: null,\r\n                    tag: null\r\n                }\r\n\r\n                displayQuestions(\"platform\", selectedData, URL)\r\n            })\r\n            break;\r\n        case \"platform\":\r\n            // display the option buttons for platform\r\n            mainContent.innerHTML = `\r\n                <h1>Find By Preferences</h1>\r\n                <p>\r\n                    on what platform do you play? <br>\r\n                    multiple answers are possible \r\n                </p>\r\n                <div id=\"questionContainerPlatform\" class=\"questionContainer\">\r\n                    <button id=\"4\">PC</button>\r\n                    <button id=\"6\">Linux</button>\r\n                    <button id=\"187\">Playstation 5</button>\r\n                    <button id=\"18\">Playstation 4</button>\r\n                    <button id=\"1\">Xbox one</button>\r\n                    <button id=\"186 \">Xbox series</button>\r\n                    <button id=\"7\">Nintendo Switch</button>\r\n                </div>\r\n                <button class=\"nextBtn\" id=\"nextBtnPlatform\">Next</button>\r\n                `\r\n            // if a question button is pressed, add or remove class selectedBtn to add or remove button border\r\n            const questionContainerPlatform = document.querySelector('#questionContainerPlatform')\r\n            questionContainerPlatform.addEventListener('click', (element) => {\r\n                if (element.target != element.currentTarget) {\r\n                    if (element.target.classList[0] == \"selectedBtn\") element.target.classList.remove(\"selectedBtn\")\r\n                    else element.target.classList.add(\"selectedBtn\")\r\n\r\n                }\r\n            })\r\n            // if user presses the next button, read all buttons id's with class selectedBtn\r\n            // and add it to variable platform\r\n            let nextBtnPlatform = document.getElementById('nextBtnPlatform')\r\n            nextBtnPlatform.addEventListener('click', () => {\r\n                let platform = []\r\n                let selectedBtns = document.querySelectorAll('button.selectedBtn')\r\n                selectedBtns.forEach(element => {\r\n                    platform.push(element.id)\r\n                })\r\n                // insert platform into selectedData variable and start diplayFunctions to start the next series of questions\r\n                selectedData.platform = platform\r\n                displayQuestions(\"tag\", selectedData, URL)\r\n            })\r\n            break;\r\n        case \"tag\":\r\n            // display the option buttons for tags\r\n            mainContent.innerHTML = `\r\n                <h1>Find By Preferences</h1>\r\n                <p>\r\n                    which type of games do you like? <br>\r\n                    multiple answers are possible \r\n                </p>\r\n                <div id=\"questionContainerTag\" class=\"questionContainer\">\r\n                    <button>Singleplayer</button>\r\n                    <button>Multiplayer</button>\r\n                    <button>Co-op</button>\r\n                    <button>Atmospheric</button>\r\n                    <button>Full controller support</button>\r\n                </div>\r\n                <button class=\"nextBtn\" id=\"nextBtnTag\">Next</button>\r\n                <div class=\"inputedDataContainer\" id=\"inputedDataContainer\"></div>\r\n                `\r\n\r\n            // if a question button is pressed, add or remove class selectedBtn to add or remove button border\r\n            const questionContainerTag = document.querySelector('#questionContainerTag')\r\n            questionContainerTag.addEventListener('click', (element) => {\r\n                if (element.target != element.currentTarget) {\r\n                    if (element.target.classList[0] == \"selectedBtn\") element.target.classList.remove(\"selectedBtn\")\r\n                    else element.target.classList.add(\"selectedBtn\")\r\n\r\n                }\r\n            })\r\n            // if user presses the next button, read all buttons innerhtml with class selectedBtn\r\n            // and add it to variable tag\r\n            let nextBtnTag = document.getElementById('nextBtnTag')\r\n            nextBtnTag.addEventListener('click', () => {\r\n                let tag = []\r\n                let selectedBtns = document.querySelectorAll('button.selectedBtn')\r\n                selectedBtns.forEach(element => {\r\n                    tag.push(element.innerHTML)\r\n                })\r\n                // insert tag into selectedData variable and start diplayFunctions to start fetch call and display random selected game\r\n                selectedData.tag = tag\r\n                displayQuestions(\"fetch\", selectedData, URL)\r\n\r\n            })\r\n            break;\r\n        case \"fetch\":\r\n            //fetch a random game based on prefrences\r\n            let randomGame = await (0,_fetch_getGameByPreferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(URL, selectedData)\r\n            //set button container display to flex to it visible again\r\n            document.getElementById(\"mainPageBtnContainer\").style.display = \"flex\"\r\n            //start function displayGame to display the randomly selected game\r\n            ;(0,_displayGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(randomGame, URL)\r\n            break;\r\n\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayQuestions);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayQuestions.js?");

/***/ }),

/***/ "./src/fetch/getGameByPreferences.js":
/*!*******************************************!*\
  !*** ./src/fetch/getGameByPreferences.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGameByPreferences = async (URL, selectedData) => {\r\n    //do a fetch call to get a game based on entered questions from api and return this data\r\n    return await fetch(`${URL}/getGameByPreferences`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                genres: selectedData.genres,\r\n                platform: selectedData.platform,\r\n                tag: selectedData.tag\r\n            })\r\n\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            return data\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGameByPreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getGameByPreferences.js?");

/***/ }),

/***/ "./src/fetch/getGameFromFavorites.js":
/*!*******************************************!*\
  !*** ./src/fetch/getGameFromFavorites.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGameFromFavorites = async (URL) => {\r\n    //do a fetch call to get a random game from api and return this data\r\n    let userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    return await fetch(`${URL}/getGameFromFavorites`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                userId\r\n            })\r\n\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            return data\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGameFromFavorites);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getGameFromFavorites.js?");

/***/ }),

/***/ "./src/fetch/getRandomGame.js":
/*!************************************!*\
  !*** ./src/fetch/getRandomGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getRandomGame = async (URL) => {\r\n    //doing a fetch call to get random game from api\r\n    return await fetch(`${URL}/getRandomGame`, {\r\n            method: \"GET\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            }\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            return data\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomGame);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getRandomGame.js?");

/***/ }),

/***/ "./src/fetch/updateUserPreferences.js":
/*!********************************************!*\
  !*** ./src/fetch/updateUserPreferences.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateUserPreferences = async (newUserPreferences,URL) => {\r\n    //post user new like of dislike of a game and store it inside database\r\n    await fetch(`${URL}/updateUserGamePreference`, {\r\n        method: \"PUT\",\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({\r\n            newUserPreferences\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateUserPreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/updateUserPreferences.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_displayGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/displayGame */ \"./src/display/displayGame.js\");\n/* harmony import */ var _display_displayMainpageButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/displayMainpageButtons */ \"./src/display/displayMainpageButtons.js\");\n/* harmony import */ var _display_displayNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/displayNav */ \"./src/display/displayNav.js\");\n/* harmony import */ var _display_displayQuestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/displayQuestions */ \"./src/display/displayQuestions.js\");\n/* harmony import */ var _fetch_getGameFromFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch/getGameFromFavorites */ \"./src/fetch/getGameFromFavorites.js\");\n/* harmony import */ var _fetch_getRandomGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch/getRandomGame */ \"./src/fetch/getRandomGame.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst URL = 'https://gamepickr-backend.onrender.com'\r\n// display a certain version of nav, depending if the user is logged in or not\r\n;(0,_display_displayNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isLoggedIn)\r\ndocument.getElementById('index').classList.add(\"activeLink\")\r\n//if user is logged in or not, display a series of buttons for selecting a random game\r\n;(0,_display_displayMainpageButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(isLoggedIn)\r\n\r\n\r\n\r\n//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game\r\nconst findRandomBtn = document.getElementById(\"findRandomBtn\")\r\nfindRandomBtn.addEventListener(\"click\", async () => {\r\n    let randomGame = await (0,_fetch_getRandomGame__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(URL)\r\n    //when data about game has been received update main page to display the randomly selected game\r\n    ;(0,_display_displayGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(randomGame,URL)\r\n\r\n})\r\n\r\n//if the user clicks on the find on preference buttons, function will start wil displaying questions\r\nconst findOnPreferenceBtn = document.getElementById(\"findOnPreferenceBtn\")\r\nfindOnPreferenceBtn.addEventListener('click', () => {\r\n    let randomGame = (0,_display_displayQuestions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"genre\", undefined,URL = URL)\r\n    //when data about game has been received update main page to display the randomly selected game\r\n})\r\n\r\n\r\n// if user is logged in, create an eventlistener for findFromFavoritesBtn\r\nif (isLoggedIn == \"true\") {\r\n    const findFromFavoritesBtn = document.getElementById(\"findFromFavoritesBtn\")\r\n    // if user clicks on findFromFavoritesBtn, perform a fetch call to get a random game from user favourites\r\n    findFromFavoritesBtn.addEventListener('click', async () => {\r\n        let randomGame = await (0,_fetch_getGameFromFavorites__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(URL)\r\n        //when data about game has been received update main page to display the randomly selected game\r\n        ;(0,_display_displayGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(randomGame, URL)\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;