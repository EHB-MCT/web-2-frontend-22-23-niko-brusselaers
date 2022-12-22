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

/***/ "./src/display/displayUserGamePreferences.js":
/*!***************************************************!*\
  !*** ./src/display/displayUserGamePreferences.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayUserGamePreferences = (games) => {\r\n    let likedGamesInnerHTML = ``\r\n    let dislikedGamesInnerHTML = ``\r\n    for (let i = 0; i < games.length; i++) {\r\n        //filter the game depending if the game is liked or not\r\n        if (games[i].isLiked == true) {\r\n            likedGamesInnerHTML += `\r\n                        <div class=\"gameCard \" id=\"gameCard\">\r\n                            <button id=\"deleteGameBtn\"> X</button>\r\n\r\n                            <img src=\"${games[i].image}\"\r\n                                alt=\"\">\r\n                            <div>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId} </h4>\r\n                            </div>\r\n                        </div>`\r\n        } else {\r\n            dislikedGamesInnerHTML += `\r\n                        <div class=\"gameCard \" id=\"gameCard\">\r\n                            <button id=\"deleteGameBtn\"> X</button>\r\n\r\n                            <img src=\"${games[i].image}\"\r\n                                alt=\"\">\r\n                            <div>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId} </h4>\r\n                            </div>\r\n                        </div>`\r\n        }\r\n        //insert gameCards inside liked and disliked containers\r\n        document.getElementById('favoriteGamesContainer').innerHTML = likedGamesInnerHTML\r\n        document.getElementById('dislikedGamesContainer').innerHTML = dislikedGamesInnerHTML\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUserGamePreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/display/displayUserGamePreferences.js?");

/***/ }),

/***/ "./src/fetch/getUserData.js":
/*!**********************************!*\
  !*** ./src/fetch/getUserData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getUserData = async (URL) => {\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    const username = sessionStorage.getItem('username') || localStorage.getItem('username')\r\n    return await fetch(`${URL}/getUserData`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                loginWithId: {\r\n                    userId: userId,\r\n                    username: username\r\n                }\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            document.getElementById('username').placeholder = data.userData.username\r\n            document.getElementById('firstname').placeholder = data.userData.firstname\r\n            document.getElementById('lastname').placeholder = data.userData.lastname\r\n            document.getElementById(\"email\").placeholder = data.userData.email\r\n            document.getElementById(\"password\").placeholder = \"*\".repeat(data.userData.password)\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserData);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getUserData.js?");

/***/ }),

/***/ "./src/fetch/getUserPreferences.js":
/*!*****************************************!*\
  !*** ./src/fetch/getUserPreferences.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_displayUserGamePreferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/displayUserGamePreferences */ \"./src/display/displayUserGamePreferences.js\");\n\r\n\r\nconst getUserPreferences = async (URL) => {\r\n    let statusCode\r\n    // retrieve userId from sessionStorage or localStorage\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    // get all user game preferences from rest api\r\n    await fetch(`${URL}/getUserPreferences`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                userId\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        .then(data => {\r\n            // if statuscode is 500 or there are no games, display that no game have been found, else display all games\r\n            if (statusCode == 500 || data.games.length == 0) {\r\n                document.getElementById('favoriteGamesContainer').innerHTML = `<p class='gameContainerText'>no favourites games found</p>`\r\n                document.getElementById('dislikedGamesContainer').innerHTML = `<p class='gameContainerText'>no disliked games found</p>`\r\n\r\n            } else {\r\n                (0,_display_displayUserGamePreferences__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.games)\r\n            }\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserPreferences);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/getUserPreferences.js?");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_displayNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/displayNav */ \"./src/display/displayNav.js\");\n/* harmony import */ var _fetch_getUserPreferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch/getUserPreferences */ \"./src/fetch/getUserPreferences.js\");\n/* harmony import */ var _fetch_getUserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch/getUserData */ \"./src/fetch/getUserData.js\");\n\r\n\r\n\r\n\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\n// const url = 'https://gamepickr-backend.onrender.com'\r\nvar URL = 'http://localhost:3000'\r\n\r\n;(0,_display_displayNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isLoggedIn)\r\ndocument.getElementById('profile').classList.add(\"activeLink\")\r\n\r\nif (isLoggedIn == \"true\") {\r\n    // if perform a fetch call to retrieve userDate and insert them as placeholder in the inputs\r\n    (0,_fetch_getUserData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(URL).userData\r\n    // get all user game preferences from rest api\r\n    ;(0,_fetch_getUserPreferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(URL)\r\n\r\n\r\n\r\n\r\n} else {\r\n    window.location.replace(\"index.html\")\r\n\r\n}\r\n\r\n\r\n\r\nlet myProfile = document.querySelector('#myProfile')\r\n\r\nmyProfile.addEventListener(\"click\", (element) => {\r\n    if (element.target != element.currentTarget) {\r\n        const overlay = document.getElementById('overlay')\r\n        const container = document.getElementById('updateUserContainer')\r\n        console.log(element.target.id);\r\n        switch (element.target.id) {\r\n            case \"editUsername\":\r\n                container.innerHTML = `\r\n                <form action=\"\" id=\"editCredentialsForm\">\r\n                    <div class=\"input\">\r\n                        <label for=\"currentPassword\">Current Password:</label>\r\n                        <input type=\"password\" id=\"checkPassword\" placeholder=\"current password\" required>\r\n                    </div>\r\n                    <div class=\"input\">\r\n                        <label for=\"username\">New Username:</label>\r\n                        <input type=\"text\" id=updateUsername\" placeholder=\"username\" required>\r\n                    </div>\r\n                    <div class='editCredentialsBtns'>\r\n                        <button id=\"cancelBtn\">cancel</button>\r\n                        <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                    </div>\r\n                </form>\r\n                `\r\n                overlay.style.display = \"flex\"\r\n                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = \"none\")\r\n                updateUserCredentials(\"username\")\r\n                break;\r\n            case \"editFirstname\":\r\n                container.innerHTML = `\r\n                <form action=\"\" id=\"editCredentialsForm\">\r\n                    <div class=\"input\">\r\n                        <label for=\"currentPassword\">Current Password:</label>\r\n                        <input type=\"password\" id=\"checkPassword\" placeholder=\"current password\" required>\r\n                    </div>\r\n                    <div class=\"input\">\r\n                        <label for=\"firstname\">Firstname:</label>\r\n                        <input type=\"text\" id=updateFirstname\" placeholder=\"firstname\" required>\r\n                    </div>\r\n                    <div class='editCredentialsBtns'>\r\n                        <button id=\"cancelBtn\">cancel</button>\r\n                        <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                    </div>\r\n                </form>\r\n\r\n                `\r\n                overlay.style.display = \"flex\"\r\n                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = \"none\")\r\n                updateUserCredentials(\"firstname\")\r\n\r\n\r\n                break;\r\n            case \"editLastname\":\r\n                container.innerHTML = `\r\n                <form action=\"\" id=\"editCredentialsForm\">\r\n                    <div class=\"input\">\r\n                        <label for=\"currentPassword\">Current Password:</label>\r\n                        <input type=\"password\" id=\"checkPassword\" placeholder=\"current password\" required>\r\n                    </div>\r\n                    <div class=\"input\">\r\n                        <label for=\"lastname\">Lastname:</label>\r\n                        <input type=\"text\" id=updateLastname\" placeholder=\"lastname\" required>\r\n                    </div>\r\n                    <div class='editCredentialsBtns'>\r\n                        <button id=\"cancelBtn\">cancel</button>\r\n                        <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                    </div>\r\n                </form>\r\n                `\r\n                overlay.style.display = \"flex\"\r\n                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = \"none\")\r\n                updateUserCredentials(\"lastname\")\r\n\r\n\r\n                break;\r\n            case \"editEmail\":\r\n                container.innerHTML = `\r\n                <form action=\"\" id=\"editCredentialsForm\">\r\n                    <div class=\"input\">\r\n                        <label for=\"currentPassword\">Current Password:</label>\r\n                        <input type=\"password\" id=\"checkPassword\" placeholder=\"current password\" required>\r\n                    </div>\r\n                    <div class=\"input\">\r\n                        <label for=\"email\">New Email:</label>\r\n                        <input type=\"email\" id=updateEmail\" placeholder=\"email\" required>\r\n                    </div>\r\n                    <div class='editCredentialsBtns'>\r\n                        <button id=\"cancelBtn\">cancel</button>\r\n                        <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                    </div>\r\n                </form>\r\n                `\r\n                overlay.style.display = \"flex\"\r\n                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = \"none\")\r\n                updateUserCredentials(\"Email\")\r\n\r\n                break;\r\n            case \"editPassword\":\r\n                container.innerHTML = `\r\n                <form action=\"\" id=\"editCredentialsForm\">\r\n                    <div class=\"input\">\r\n                        <label for=\"currentPassword\">Current Password:</label>\r\n                        <input type=\"password\" id=\"checkPassword\" placeholder=\"current password\" required>\r\n                    </div>\r\n                    <div class=\"input\">\r\n                        <label for=\"newPassword\">New Password:</label>\r\n                        <input type=\"password\" id=\"updatePassword\" placeholder=\"New Password\" required>\r\n                    </div>\r\n                    <div class='editCredentialsBtns'>\r\n                        <button id=\"cancelBtn\">cancel</button>\r\n                        <button id=\"submitBtn\" type=\"submit\">submit</button>\r\n                    </div>\r\n                </form>\r\n\r\n                `\r\n                overlay.style.display = \"flex\"\r\n                document.getElementById('cancelBtn').addEventListener('click', () => overlay.style.display = \"none\")\r\n                updateUserCredentials(\"Password\")\r\n\r\n\r\n                break;\r\n        }\r\n    }\r\n})\r\n\r\nfunction updateUserCredentials(type) {\r\n    let editCredentialsForm = document.getElementById('editCredentialsForm')\r\n    editCredentialsForm.addEventListener('submit', (event) => {\r\n        console.log('click');\r\n        event.preventDefault()\r\n        let newUserCredentials = {\r\n            userId: sessionStorage.getItem('id') || localStorage.getItem('id'),\r\n            password: document.getElementById('checkPassword').value,\r\n            type: type,\r\n            newCredential: null\r\n\r\n        }\r\n        switch (newUserCredentials.type) {\r\n            case \"username\":\r\n                newUserCredentials.newCredential = document.getElementById('updateUsername').value\r\n                break;\r\n            case \"firstname\":\r\n                newUserCredentials.newCredential = document.getElementById('updateFirstname').value\r\n\r\n                break;\r\n            case \"lastname\":\r\n                newUserCredentials.newCredential = document.getElementById('updateLastname').value\r\n\r\n                break;\r\n            case \"email\":\r\n                newUserCredentials.newCredential = document.getElementById('updateEmail').value\r\n\r\n                break;\r\n            case \"password\":\r\n                newUserCredentials.newCredential = document.getElementById('updatePassword')\r\n\r\n                break;\r\n\r\n\r\n        }\r\n\r\n        console.log(newUserCredentials);\r\n\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/profile.js?");

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