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

/***/ "./src/loginId.js":
/*!************************!*\
  !*** ./src/loginId.js ***!
  \************************/
/***/ (() => {

eval("const url = 'https://gamepickr-backend.onrender.com'\r\n\r\n\r\nloginWithId = async () => {\r\n    //retrieve user credential either from sessionStorage or localStorage, if both ar empty return null\r\n    let userId = sessionStorage.getItem('id') || localStorage.getItem('id') || null\r\n    let username = sessionStorage.getItem('username') || localStorage.getItem('username') || null\r\n    // if userId and username are not null, do a fetch request to check if userId and username are valid\r\n    if (userId != null && !username != null) {\r\n        await fetch(`${url}/loginId`, {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        'Content-Type': 'application/json',\r\n                    },\r\n                    body: JSON.stringify({\r\n                        loginWithId: {\r\n                            userId: userId,\r\n                            username: username\r\n                        }\r\n                    })\r\n                }\r\n\r\n            )\r\n            .then(response => response.json())\r\n            .then(async data => {\r\n                console.log(data);\r\n                // if credentials are valid, create a new variable in sessionStorage and set it to true\r\n                if (data.isValid) {\r\n                    sessionStorage.setItem(\"isLoggedIn\", true);\r\n                    // if credentials are not valid, create a new variable in sessionStorage and set it to false and remove credentials out of both sessionStorage and localStorage\r\n                } else {\r\n                    sessionStorage.setItem(\"isLoggedIn\", false);\r\n                    sessionStorage.removeItem('id')\r\n                    sessionStorage.removeItem('username')\r\n                    localStorage.removeItem('id')\r\n                    localStorage.removeItem('username')\r\n                }\r\n            })\r\n        //if no credentials are saved in localStorage or sessionsStorage, create a new variable in sessionStorage and set it to false\r\n    } else {\r\n        sessionStorage.setItem(\"isLoggedIn\", false);\r\n    }\r\n}\r\n\r\nloginWithId()\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/loginId.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/loginId.js"]();
/******/ 	
/******/ })()
;