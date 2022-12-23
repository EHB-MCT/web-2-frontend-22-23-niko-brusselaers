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

/***/ "./src/display/displayNav.js":
/*!***********************************!*\
  !*** ./src/display/displayNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//depending is the user is logged in or not, create a version of navigation\r\nconst displayNav = (isLoggedIn) => {\r\n    const nav = document.getElementById('header')\r\n    let innerHTML\r\n    //if user is logged in, show; logo, mainpage link, profile link, and logout button\r\n    if (isLoggedIn == \"true\") {\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\"> </a>\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index'> Main </a>\r\n            <a href = \"./profile.html#myProfile\" class = \"navLinks\" id='profile'> Profile </a> \r\n            <a href = \"#\" class = \"navLinks\" id=\"logout\"> Log out </a>\r\n        </div>\r\n        `\r\n        nav.innerHTML = innerHTML\r\n        const logoutbtn = document.getElementById('logout')\r\n        // if user presses the logout button, remove all localStorage and sessionStorage keys for loggin in\r\n        logoutbtn.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            sessionStorage.setItem(\"isLoggedIn\", false);\r\n            sessionStorage.removeItem('id')\r\n            sessionStorage.removeItem('username')\r\n            localStorage.removeItem('id')\r\n            localStorage.removeItem('username')\r\n            window.location.reload()\r\n        })\r\n    } else {\r\n        // if user is not logged in, show logo, mainpage link and sign-in link\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\" > </a>\r\n\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index' >  Main </a>\r\n            <a href = \"./login.html\" class=\"navLinks\" id='profile'> Sign In </a> \r\n        </div>\r\n        `\r\n        nav.innerHTML = innerHTML\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNav);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayNav.js?");

/***/ }),

/***/ "./src/display/displayUpdateAccountForm.js":
/*!*************************************************!*\
  !*** ./src/display/displayUpdateAccountForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_updateAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/updateAccount */ \"./src/fetch/updateAccount.js\");\n\r\n\r\n\r\n\r\nconst displayUpdateAccountForm = (URL) => {\r\n    //create an event listener for my profile\r\n    let myProfile = document.querySelector('#myProfile')\r\n    myProfile.addEventListener(\"click\", (element) => {\r\n        // if the user clicks on the edit button, display an overlay with updateCredentials form\r\n        if (element.target != element.currentTarget) {\r\n            let elementInnerHTML = element.target.innerHTML\r\n            if (elementInnerHTML == \"edit\") {\r\n                const overlay = document.getElementById('overlay')\r\n                const body = document.querySelector('body')\r\n                let innerHTML = `\r\n                <div class=\"overlay\" id=\"overlay\">\r\n                    <div class=\"overlayContainer\">\r\n                        <h2>please enter the following details:</h2>\r\n                        <div id=\"updateUserContainer\">\r\n                            <form id=\"editCredentialsForm\">\r\n                                <div class=\"input\">\r\n                                    <label for=\"currentPassword\">Current Password:</label>\r\n                                    <input type=\"password\" id=\"currentPassword\" placeholder=\"current password\" required>\r\n                                </div>\r\n                                <div class=\"input\">\r\n                                    <label for=\"username\">New ${element.target.classList[0]}:</label>\r\n                                    <input type=\"text\" id=\"newCredential\" placeholder=\"${element.target.classList[0]}\" required>\r\n                                </div>\r\n                                <div class='editCredentialsBtns'>\r\n                                    <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                                    <button id=\"cancelBtn\">cancel</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                `\r\n                body.insertAdjacentHTML('beforebegin', innerHTML)\r\n                // if user clicks on cancel button, remove overlay and form\r\n                document.getElementById('cancelBtn').addEventListener('click', () => document.getElementById(\"overlay\").remove())\r\n                let editCredentialsForm = document.getElementById('editCredentialsForm')\r\n                // if user clicks on submit get data from form and perform a fetch call to update user credentials\r\n                editCredentialsForm.addEventListener('submit', async (event) => {\r\n                    event.preventDefault()\r\n\r\n                    let updateUserCredentials = {\r\n                        userId: sessionStorage.getItem('id') || localStorage.getItem('id'),\r\n                        password: document.getElementById('currentPassword').value,\r\n                        newCredential: document.getElementById('newCredential').value,\r\n                        type: element.target.classList[0]\r\n                    }\r\n                    let result = (0,_fetch_updateAccount__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL, updateUserCredentials)\r\n                    if (result = \"ok\") {\r\n                        if (updateUserCredentials.type == \"username\") {\r\n                            //setting username in sessionStorage and localStorage\r\n                            sessionStorage.setItem('username', updateUserCredentials.newCredential)\r\n                            localStorage.setItem('username', updateUserCredentials.newCredential)\r\n                        }\r\n                        setTimeout(() => {\r\n                            location.reload()\r\n\r\n                        }, 1000)\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUpdateAccountForm);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayUpdateAccountForm.js?");

/***/ }),

/***/ "./src/display/displayUserGamePreferences.js":
/*!***************************************************!*\
  !*** ./src/display/displayUserGamePreferences.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_deleteUserGamePreference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/deleteUserGamePreference */ \"./src/fetch/deleteUserGamePreference.js\");\n\r\n\r\nconst displayUserGamePreferences = (games, URL) => {\r\n    const favoritesDiv = document.getElementById('favoritesDiv')\r\n    favoritesDiv.insertAdjacentHTML(\"afterbegin\", '<button id=\"scrollLeftLiked\">&#x3c;</button>')\r\n    const dislikesDiv = document.getElementById('dislikesDiv')\r\n    dislikesDiv.insertAdjacentHTML(\"afterbegin\", '<button id=\"scrollLeftDisliked\">&#x3c;</button>')\r\n    let likedGamesInnerHTML = ``\r\n    let dislikedGamesInnerHTML = ``\r\n    for (let i = 0; i < games.length; i++) {\r\n        //filter the game depending if the game is liked or not\r\n        if (games[i].isLiked == true) {\r\n            likedGamesInnerHTML += `\r\n                        <div class=\"gameCard\" id=\"gameCard\">\r\n                            <div class='imageContainer'>\r\n                                <button id=\"deleteGameBtn\"> X</button>\r\n                                <img  src=\"${games[i].image}\" class='imgGame'  \"alt=\"\">\r\n                            </div>\r\n                            <div class='gameDetails'>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId}</h4>\r\n                            </div>\r\n                        </div>`\r\n        } else {\r\n            dislikedGamesInnerHTML += `\r\n                        <div class=\"gameCard\" id=\"gameCard\">\r\n                            <div class='imageContainer'>\r\n                                <button id=\"deleteGameBtn\"> X</button>\r\n                                <img  src=\"${games[i].image}\" class='imgGame'  \"alt=\"\">\r\n                            </div>\r\n                            <div class='gameDetails'>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId}</h4>\r\n                            </div>\r\n                        </div>`\r\n        }\r\n    }\r\n\r\n    //insert gameCards inside liked and disliked containers\r\n    document.getElementById('favoriteGamesContainer').innerHTML = likedGamesInnerHTML\r\n    document.getElementById('dislikedGamesContainer').innerHTML = dislikedGamesInnerHTML\r\n    favoritesDiv.insertAdjacentHTML(\"beforeend\", '<button id=\"scrollRightLiked\">&#x3e;</button>')\r\n    dislikesDiv.insertAdjacentHTML('beforeend', '<button id=\"scrollRightLiked\">&#x3e;</button>')\r\n\r\n\r\n    // if user clicks on scroll left or right button, itmes inside gamesContainer will scroll to left or right\r\n    const scrollLeftLiked = document.getElementById('scrollLeftLiked')\r\n    const scrollRightLiked = document.getElementById('scrollRightLiked')\r\n\r\n    scrollLeftLiked.addEventListener('click', () => document.getElementById('favoriteGamesContainer').scrollLeft += -800)\r\n    scrollRightLiked.addEventListener('click', () => document.getElementById('favoriteGamesContainer').scrollLeft += 800)\r\n\r\n\r\n    const scrollLeftDisliked = document.getElementById('scrollLeftLiked')\r\n    const scrollRightDisliked = document.getElementById('scrollRightDisliked')\r\n\r\n    scrollLeftDisliked.addEventListener('click', () => document.getElementById('dislikedGamesContainer').scrollLeft += -800)\r\n    scrollRightDisliked.addEventListener('click', () => document.getElementById('dislikedGamesContainer').scrollLeft += 800)\r\n\r\n    // add an event listner to every click on the element section with clasname myFavourites\r\n    let myFavorites = document.querySelector('section#myFavorites')\r\n    myFavorites.addEventListener('click', async (element) => {\r\n        // if deleteGameBtn has been clicked, get gameId and do a fetch call to remove game from database\r\n        if (element.target != element.currentTarget) {\r\n            let elementId = element.target.id\r\n            if (elementId == \"deleteGameBtn\") {\r\n                let gameCard = element.target.closest('div#gameCard')\r\n                let gameId = gameCard.querySelector('div.gameDetails').querySelector('h4').innerHTML\r\n                let result = await (0,_fetch_deleteUserGamePreference__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL, gameId)\r\n                console.log(result);\r\n                // if game has been succesfully removed from database, remove game from list\r\n                if (result.message == \"ok\") {\r\n                    gameCard.remove()\r\n                }\r\n            }\r\n\r\n        };\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUserGamePreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayUserGamePreferences.js?");

/***/ }),

/***/ "./src/fetch/deleteUserGamePreference.js":
/*!***********************************************!*\
  !*** ./src/fetch/deleteUserGamePreference.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteUserGamePreference = async (URL, gameId) => {\r\n    // get userID from session or localStorage\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    // do a fetch call to delete game user prefrences inside database\r\n    return await fetch(`${URL}/deleteUserGamePreference`, {\r\n            method: \"DELETE\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                \"updateUserPreferences\": {\r\n                    \"userId\": userId,\r\n                    \"gameId\": gameId\r\n                }\r\n            })\r\n\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            return data\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteUserGamePreference);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/deleteUserGamePreference.js?");

/***/ }),

/***/ "./src/fetch/getUserData.js":
/*!**********************************!*\
  !*** ./src/fetch/getUserData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getUserData = async (URL) => {\r\n    // get userId and username from session or local storage\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    const username = sessionStorage.getItem('username') || localStorage.getItem('username')\r\n    //doing a fetch call to api to retrieve user credentials data\r\n    return await fetch(`${URL}/getUserData`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                loginWithId: {\r\n                    userId: userId,\r\n                    username: username\r\n                }\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            document.getElementById('username').placeholder = data.userData.username\r\n            document.getElementById('firstname').placeholder = data.userData.firstname\r\n            document.getElementById('lastname').placeholder = data.userData.lastname\r\n            document.getElementById(\"email\").placeholder = data.userData.email\r\n            document.getElementById(\"password\").placeholder = \"*\".repeat(data.userData.password)\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserData);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getUserData.js?");

/***/ }),

/***/ "./src/fetch/getUserPreferences.js":
/*!*****************************************!*\
  !*** ./src/fetch/getUserPreferences.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_displayUserGamePreferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/displayUserGamePreferences */ \"./src/display/displayUserGamePreferences.js\");\n\r\n\r\nconst getUserPreferences = async (URL) => {\r\n    let statusCode\r\n    // retrieve userId from sessionStorage or localStorage\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    // get all user game preferences from rest api\r\n    await fetch(`${URL}/getUserPreferences`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                userId\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        .then(data => {\r\n            // if statuscode is 500 or there are no games, display that no game have been found, else display all games\r\n            if (statusCode == 500 || data.games.length == 0) {\r\n                document.getElementById('favoriteGamesContainer').innerHTML = `<p class='gameContainerText'>no favourites games found</p>`\r\n                document.getElementById('dislikedGamesContainer').innerHTML = `<p class='gameContainerText'>no disliked games found</p>`\r\n\r\n            } else {\r\n                (0,_display_displayUserGamePreferences__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.games,URL)\r\n            }\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserPreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getUserPreferences.js?");

/***/ }),

/***/ "./src/fetch/updateAccount.js":
/*!************************************!*\
  !*** ./src/fetch/updateAccount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateAccount = async (URL, updateUserCredentials) => {\r\n    console.log(updateUserCredentials);\r\n    return await fetch(`${URL}/updateAccount`, {\r\n            method: \"PUT\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                \"updateUserCredentials\": {\r\n                    \"userId\": updateUserCredentials.userId,\r\n                    \"password\": updateUserCredentials.password,\r\n                    \"newCredential\": updateUserCredentials.newCredential,\r\n                    \"type\": updateUserCredentials.type\r\n                }\r\n            })\r\n\r\n        })\r\n        .then(response => response.json())\r\n        .then(async data => {\r\n            return data.message\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateAccount);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/updateAccount.js?");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_displayNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/displayNav */ \"./src/display/displayNav.js\");\n/* harmony import */ var _fetch_getUserPreferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch/getUserPreferences */ \"./src/fetch/getUserPreferences.js\");\n/* harmony import */ var _fetch_getUserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch/getUserData */ \"./src/fetch/getUserData.js\");\n/* harmony import */ var _fetch_updateAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch/updateAccount */ \"./src/fetch/updateAccount.js\");\n/* harmony import */ var _display_displayUpdateAccountForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/displayUpdateAccountForm */ \"./src/display/displayUpdateAccountForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst URL = 'https://gamepickr-backend.onrender.com'\r\nconsole.log(isLoggedIn);\r\n(0,_display_displayNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isLoggedIn)\r\ndocument.getElementById('profile').classList.add(\"activeLink\")\r\n\r\nif (isLoggedIn == \"true\") {\r\n    // if perform a fetch call to retrieve userDate and insert them as placeholder in the inputs\r\n    (0,_fetch_getUserData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(URL).userData\r\n    // get all user game preferences from rest api\r\n    ;(0,_fetch_getUserPreferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(URL)\r\n    // create a eventlistner to add a form when user presses on any of the edit buttons on profile page\r\n    ;(0,_display_displayUpdateAccountForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(URL)\r\n\r\n    \r\n\r\n    \r\n\r\n\r\n} else {\r\n    window.location.replace(\"index.html\")\r\n\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/profile.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/profile.js");
/******/ 	
/******/ })()
;