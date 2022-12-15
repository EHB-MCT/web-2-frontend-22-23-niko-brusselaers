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

eval("const isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\nconst url = 'https://gamepickr-backend.onrender.com'\r\ndocument.getElementById('profile').classList.add(\"activeLink\")\r\n\r\nif (isLoggedIn == \"true\") {\r\n    // if user is logged in, retrieve user credentials and replace input placeholder with them\r\n    const usernameInput = document.getElementById('username')\r\n    const firstnameInput = document.getElementById('firstname')\r\n    const lastnameInput = document.getElementById('lastname')\r\n    const emailInput = document.getElementById(\"email\")\r\n    const userId = sessionStorage.getItem('id') || localStorage.getItem('id')\r\n    const username = sessionStorage.getItem('username') || localStorage.getItem('username')\r\n    let loginWithId = {\r\n        \"userId\": userId,\r\n        \"username\": username\r\n    }\r\n    fetch(`${url}/getUserData`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                loginWithId: {\r\n                    userId: userId,\r\n                    username: username\r\n                }\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            usernameInput.placeholder = data.userData.username\r\n            firstnameInput.placeholder = data.userData.firstname\r\n            lastnameInput.placeholder = data.userData.lastname\r\n            emailInput.placeholder = data.userData.email\r\n        })\r\n\r\n    // get all user game preferences from rest api\r\n    fetch(`${url}/getUserPreferences`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                userId\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        .then(data => {\r\n            if (statusCode == 500) {\r\n                document.getElementById('favoriteGamesContainer').innerHTML = `<p>no favourites games found</p>`\r\n                document.getElementById('dislikedGamesContainer').innerHTML = `<p>no disliked games found</p>`\r\n\r\n            } else {\r\n                displayUserGamePreferences(data.games)\r\n\r\n            }\r\n        })\r\n\r\n\r\n\r\n\r\n} else {\r\n    window.location.replace(\"index.html\")\r\n\r\n}\r\n\r\nfunction displayUserGamePreferences(games) {\r\n    let likedGamesInnerHTML = ``\r\n    let dislikedGamesInnerHTML = ``\r\n    console.log(games);\r\n    for (let i = 0; i < games.length; i++) {\r\n        //filtezr the game depending if the game is liked or not\r\n        if (games[i].isLiked == true) {\r\n            likedGamesInnerHTML += `\r\n                        <div class=\"gameCard \" id=\"gameCard\">\r\n                            <button id=\"deleteGameBtn\"> X</button>\r\n\r\n                            <img src=\"${games[i].image}\"\r\n                                alt=\"\">\r\n                            <div>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId} </h4>\r\n                            </div>\r\n                        </div>`\r\n        } else {\r\n            dislikedGamesInnerHTML += `\r\n                        <div class=\"gameCard \" id=\"gameCard\">\r\n                            <button id=\"deleteGameBtn\"> X</button>\r\n\r\n                            <img src=\"${games[i].image}\"\r\n                                alt=\"\">\r\n                            <div>\r\n                                <h3>${games[i].name} </h3>\r\n                                <h4 class=\"gameId\" id=\"gameId\">${games[i].gameId} </h4>\r\n                            </div>\r\n                        </div>`\r\n        }\r\n        //insert gameCards inside liked and disliked containers\r\n        document.getElementById('favoriteGamesContainer').innerHTML = likedGamesInnerHTML\r\n        document.getElementById('dislikedGamesContainer').innerHTML = dislikedGamesInnerHTML\r\n    }\r\n}\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/profile.js?");

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