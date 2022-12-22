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

/***/ "./src/fetch/createAccount.js":
/*!************************************!*\
  !*** ./src/fetch/createAccount.js ***!
  \************************************/
/***/ (() => {

eval("const createAccountForm = document.getElementById('createAccountForm')\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst url = 'https://gamepickr-backend.onrender.com'\r\n\r\n// if user has already logged in, redirect to main page\r\nif (isLoggedIn == \"true\") {\r\n    window.location.replace(\"index.html\")\r\n} else {\r\n    createAccountForm.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault()\r\n        //get all input data from form\r\n        const newUser = {\r\n            username: document.getElementById('username').value,\r\n            email: document.getElementById('email').value,\r\n            password: document.getElementById('password').value,\r\n            firstname: document.getElementById('firstname').value,\r\n            lastname: document.getElementById('lastname').value\r\n        }\r\n        let repeatPassword = document.getElementById('repeatPassword').value\r\n        // if both password input value are the same, perform a fetch call to backend to create a new account\r\n        if (newUser.password == repeatPassword) {\r\n            try {\r\n                let statusCode\r\n                fetch(`http://localhost:3000/createAccount`, {\r\n                        method: \"POST\",\r\n                        headers: {\r\n                            'Content-Type': 'application/json',\r\n                        },\r\n                        body: JSON.stringify({\r\n                            newUser\r\n                        })\r\n                    }).then(response => {\r\n                        statusCode = response.status\r\n                        return response.json()\r\n                    })\r\n                    .then(data => {\r\n                        //if fetch call is succesful and we receive statuscode 200, redirect to login page\r\n                        if (statusCode == 200) {\r\n                            window.location.replace(\"login.html\")\r\n\r\n                        }\r\n                    })\r\n            } catch (error) {\r\n                console.log(error.message);\r\n            }\r\n\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/fetch/createAccount.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/fetch/createAccount.js"]();
/******/ 	
/******/ })()
;