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

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("const signInForm = document.getElementById('signInForm')\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst url = 'https://gamepickr-backend.onrender.com'\r\n\r\n\r\n// if user has already logged in, redirect to main\r\nif (isLoggedIn == \"true\") {\r\n    window.location.replace(\"index.html\")\r\n} else {\r\n    signInForm.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault()\r\n        //get all input data from form\r\n        let loginCredentials = {\r\n            username: document.getElementById('username').value,\r\n            password: document.getElementById('password').value,\r\n        }\r\n        try {\r\n            let statusCode\r\n            // perform a fetch call to check if user credentials are valid\r\n            fetch(`${url}/login`, {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        'Content-Type': 'application/json', \r\n                    },\r\n                    body: JSON.stringify({\r\n                        loginCredentials\r\n                    })\r\n                }).then(response => {\r\n                    statusCode = response.status\r\n                    return response.json()\r\n                })\r\n                .then(data => {\r\n                    if (statusCode == 200) {\r\n                        sessionStorage.setItem(\"isLoggedIn\", true);\r\n                        // if user credentials are valid and we receive statuscode 200,\r\n                        if (document.getElementById('saveLogin').checked) {\r\n                            // save data in localStorage if remember me has been checked\r\n                            localStorage.setItem('id', data.user.userId);\r\n                            localStorage.setItem('username', data.user.username);\r\n                        } else {\r\n                            // if remember me has not been checked, save data in sessionStorage\r\n                            sessionStorage.setItem(\"id\", data.user.userId);\r\n                            sessionStorage.setItem('username', data.user.username);\r\n                        }\r\n                        // redirect to main page\r\n                        window.location.replace(\"index.html\")\r\n\r\n                    }\r\n\r\n\r\n                })\r\n        } catch (error) {\r\n            console.log(error.message);\r\n        }\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;