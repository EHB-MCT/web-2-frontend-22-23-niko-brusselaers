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

/***/ "./src/customFont.js":
/*!***************************!*\
  !*** ./src/customFont.js ***!
  \***************************/
/***/ (() => {

eval("// loading in text font\r\n\r\n(function (d) {\r\n    var config = {\r\n            kitId: 'fpm7gav',\r\n            scriptTimeout: 3000,\r\n            async: true\r\n        },\r\n        h = d.documentElement,\r\n        t = setTimeout(function () {\r\n            h.className = h.className.replace(/\\bwf-loading\\b/g, \"\") + \" wf-inactive\";\r\n        }, config.scriptTimeout),\r\n        tk = d.createElement(\"script\"),\r\n        f = false,\r\n        s = d.getElementsByTagName(\"script\")[0],\r\n        a;\r\n    h.className += \" wf-loading\";\r\n    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';\r\n    tk.async = true;\r\n    tk.onload = tk.onreadystatechange = function () {\r\n        a = this.readyState;\r\n        if (f || a && a != \"complete\" && a != \"loaded\") return;\r\n        f = true;\r\n        clearTimeout(t);\r\n        try {\r\n            Typekit.load(config)\r\n        } catch (e) {}\r\n    };\r\n    s.parentNode.insertBefore(tk, s)\r\n})(document);\n\n//# sourceURL=webpack://web-2-frontend-22-23-niko-brusselaers/./src/customFont.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/customFont.js"]();
/******/ 	
/******/ })()
;