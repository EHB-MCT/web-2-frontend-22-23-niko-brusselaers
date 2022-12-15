/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/**\r\n * \r\n *      used sources:\r\n * \r\n *              - WEB II frontend niko brusselaers: https: //github.com/EHB-MCT/web2-frontend-niko-brusselaers\r\n *              - enable cors: https: //developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin\r\n *              - css: https: //www.w3schools.com/css/default.asp\r\n *              - exporting function: https: //developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export\r\n *              - how to use localstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/localStorage\r\n *              - how to use sessionstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage\r\n *              - how to add a class to an element javascript: https: //www.w3schools.com/howto/howto_js_add_class.asp\r\n *              - how to change input placeholder text https: //stackoverflow.com/questions/13506481/change-placeholder-text\r\n * \r\n * \r\n */\r\n\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconsole.log(isLoggedIn);\r\nconst url = 'https://gamepickr-backend.onrender.com'\r\ndocument.getElementById('index').classList.add(\"activeLink\")\r\n\r\n//if user is logged in or not, display a series of buttons for selecting a random game\r\ndisplayMainpageButtons(isLoggedIn)\r\n\r\n\r\n//if user clicks find random game button, function will perform a fetch call to backend to receive data about a random game\r\nconst findRandomBtn = document.getElementById(\"findRandomBtn\")\r\nfindRandomBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault()\r\n    fetch(`${url}/getRandomGame`, {\r\n            method: \"GET\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            }\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            //when data about game has been received update main page to display the randomly selected game\r\n            displayGame(data)\r\n        })\r\n})\r\n\r\nconst findOnPreferenceBtn = document.getElementById(\"findOnPreferenceBtn\")\r\n\r\n\r\n// if user is logged in, create an eventlistener for findFromFavoritesBtn\r\nif (isLoggedIn == \"true\") {\r\n    const findFromFavoritesBtn = document.getElementById(\"findFromFavoritesBtn\")\r\n    // if user clicks on findFromFavoritesBtn, perform a fetch call to get a random game from user favourites\r\n    findFromFavoritesBtn.addEventListener('click', () => {\r\n\r\n    })\r\n\r\n}\r\n\r\nfunction displayGame(gameData) {\r\n    // insert randomly selected game inside html element\r\n    let innerHTML = `\r\n            <h1> Random Game </h1> \r\n            <p> We have selected a random game for you. <br>\r\n                 </p>\r\n            <div class = \"gameCard\"id = \"gameCard\">\r\n                <img src = \"${gameData.image}\"alt = \"\">\r\n                <div>\r\n                    <button id = \"dislikeBtn\"> <span class = \"icon-thumbs-down\"> </span></button>\r\n                    <h3> ${gameData.name} </h3> \r\n                    <button id = \"likeBtn\" > <span class = \"icon-heart\"> </button>\r\n                    <h4 class = \"gameId\" id = \"gameId\"> ${gameData.gameId} </h4> \r\n                </div> \r\n            </div> \r\n        `\r\n    document.getElementById('mainContent').innerHTML = innerHTML\r\n}\r\n\r\n\r\n\r\nfunction displayMainpageButtons(isLoggedIn) {\r\n    const mainPageBtnContainer = document.getElementById('mainPageBtnContainer')\r\n    let innerHTML\r\n    // if user is logged in, show all buttons\r\n    if (isLoggedIn == \"true\") {\r\n        innerHTML = `\r\n        <button id=\"findOnPreferenceBtn\"> Find on preference </button> \r\n        <button id=\"findRandomBtn\"> Find random game </button>\r\n        <button id=\"findFromFavoritesBtn\"> Find random game from favorites </button>\r\n        `\r\n    } else {\r\n        // if user is not logged in, findFromFavoritesBtn button is not added\r\n        innerHTML = `\r\n        <button id=\"findOnPreferenceBtn\"> Find on preference </button> \r\n        <button id=\"findRandomBtn\"> Find random game </button>\r\n\r\n        `\r\n    }\r\n    //insert buttons into html element\r\n    mainPageBtnContainer.innerHTML = innerHTML\r\n}\r\n\r\nfunction displayQuuestions() {\r\n\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;