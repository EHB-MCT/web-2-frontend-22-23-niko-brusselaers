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

/***/ "./src/signIn.js":
/*!***********************!*\
  !*** ./src/signIn.js ***!
  \***********************/
/***/ (() => {

eval("/**\r\n * signInForm\r\n * username\r\n * password\r\n * saveLogin\r\n */\r\n\r\nconst signInForm = document.getElementById('signInForm')\r\nconst url = 'http://localhost:3000'\r\n\r\nsignInForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n\r\n    let loginCredentials = {\r\n        username: document.getElementById('username').value,\r\n        password: document.getElementById('password').value,\r\n    }\r\n    console.log(loginCredentials);\r\n    try {\r\n        let statusCode\r\n        fetch(`http://localhost:3000/login`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify({\r\n                    loginCredentials\r\n                })\r\n            }).then(response => {\r\n                statusCode = response.status\r\n                return response.json()\r\n            })\r\n            .then(data => {\r\n                if (statusCode == 200) {\r\n                    sessionStorage.setItem(\"id\", data.user.userId);\r\n                    sessionStorage.setItem('username', data.user.username);\r\n                    if (document.getElementById('saveLogin').checked) {\r\n                        localStorage.setItem('id', data.user.userId);\r\n                        localStorage.setItem('username', data.user.username);\r\n                    }\r\n                    window.location.replace(\"index.html\")\r\n\r\n                }\r\n\r\n\r\n            })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n\r\n})\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/signIn.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/signIn.js"]();
/******/ 	
/******/ })()
;