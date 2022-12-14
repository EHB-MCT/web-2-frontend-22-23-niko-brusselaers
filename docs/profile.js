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

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ (() => {

eval("const isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst url = 'http://localhost:3000'\r\ndocument.getElementById('profile').classList.add(\"activeLink\")\r\n\r\n\r\nif (isLoggedIn == \"true\") {\r\n    const usernameInput = document.getElementById('username')\r\n    const firstnameInput = document.getElementById('firstname')\r\n    const lastnameInput = document.getElementById('lastname')\r\n    const emailInput = document.getElementById(\"email\")\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    const username = sessionStorage.getItem('username') || localStorage.getItem('username')\r\n    let loginWithId = {\r\n        \"userId\": userId,\r\n        \"username\": username\r\n    }\r\n    fetch(`${url}/getUserData`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                loginWithId: {\r\n                    userId: userId,\r\n                    username: username\r\n                }\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            usernameInput.placeholder = data.userData.username\r\n            firstnameInput.placeholder = data.userData.firstname\r\n            lastnameInput.placeholder = data.userData.lastname\r\n            emailInput.placeholder = data.userData.email\r\n        })\r\n\r\n} else {\r\n    window.location.replace(\"index.html\")\r\n\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/profile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/profile.js"]();
/******/ 	
/******/ })()
;