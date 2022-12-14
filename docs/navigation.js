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

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ (() => {

eval("// retrieving isLoggedIn key from session storage\r\nconst isLoggedIn = sessionStorage.getItem('isLoggedIn')\r\n//depending is the user is logged in or not, create a version of navigation\r\ndisplayNav(isLoggedIn)\r\n// if user is logged in, create a eventlistener for logout button \r\nif (isLoggedIn == \"true\") {\r\n    const logoutbtn = document.getElementById('logout')\r\n    // if user presses the logout button, remove all localStorage and sessionStorage keys for loggin in\r\n    logoutbtn.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n        sessionStorage.setItem(\"isLoggedIn\", false);\r\n        sessionStorage.removeItem('id')\r\n        sessionStorage.removeItem('username')\r\n        localStorage.removeItem('id')\r\n        localStorage.removeItem('username')\r\n        window.location.reload()\r\n    })\r\n}\r\n\r\n\r\nfunction displayNav(isLoggedIn) {\r\n    const nav = document.getElementById('header')\r\n    let innerHTML\r\n    //if user is logged in, show; logo, mainpage link, profile link, and logout button\r\n    if (isLoggedIn == \"true\") {\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\"> </a>\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index'> Main </a>\r\n            <a href = \"./profile.html#myProfile\" class = \"navLinks\" id='profile'> Profile </a> \r\n            <a href = \"#\" class = \"navLinks\" id=\"logout\"> Log out </a>\r\n        </div>\r\n        `\r\n    } else {\r\n        // if user is not logged in, show logo, mainpage link and sign-in link\r\n        innerHTML = `\r\n            <a href=\"./index.html\"> <img class=\"navLogo\" src=\"./images/logo.png\" alt=\"logo image Game Select\" > </a>\r\n\r\n        <div>\r\n            <a href = \"./index.html\" class=\"navLinks\" id='index' >  Main </a>\r\n            <a href = \"./login.html\" class=\"navLinks\" id='profile'> Sign In </a> \r\n        </div>\r\n        `\r\n    }\r\n    nav.innerHTML = innerHTML\r\n}\r\n\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/navigation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/navigation.js"]();
/******/ 	
/******/ })()
;