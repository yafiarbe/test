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

/***/ "./src/js/base/inchСhanger/inchСhanger.js":
/*!************************************************!*\
  !*** ./src/js/base/inchСhanger/inchСhanger.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inchСhanger\": () => (/* binding */ inchСhanger)\n/* harmony export */ });\nfunction inchСhanger() {\r\n\t// Получаем все элементы на странице\r\n\tlet elements = document.getElementsByTagName(\"*\");\r\n\r\n\t// Создаем объект с парами для замены\r\n\tlet replacements = {\r\n\t\t\"<<1>>\": \"<span class='icon-triangle'></span>\",\r\n\t\t\"<<2>>\": \"<span class='icon-ellipse'></span>\",\r\n\t\t\"<<3>>\": \"<span class='icon-rectangle'></span>\",\r\n\t\t\"<<6>>\": \"<span class='icon-pentagon'></span>\",\r\n\t};\r\n\r\n\t// Проходим по всем элементам и их потомкам\r\n\tfor (let element of elements) {\r\n\t\tfor (let node of element.childNodes) {\r\n\t\t\t// Если узел является текстовым\r\n\t\t\tif (node.nodeType === 3) {\r\n\t\t\t\t// Получаем текстовое содержимое узла\r\n\t\t\t\tlet text = node.nodeValue;\r\n\t\t\t\t// Проверяем, есть ли в тексте что-то для замены\r\n\t\t\t\tlet hasReplacement = false;\r\n\t\t\t\tfor (let key in replacements) {\r\n\t\t\t\t\tif (text.includes(key)) {\r\n\t\t\t\t\t\thasReplacement = true;\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t// Если есть, то создаем новый элемент span\r\n\t\t\t\tif (hasReplacement) {\r\n\t\t\t\t\tlet span = document.createElement(\"span\");\r\n\t\t\t\t\t// Разбиваем текст по парам для замены\r\n\t\t\t\t\tlet parts = text.split(/(<<\\d>>)/);\r\n\t\t\t\t\t// Добавляем в span каждую часть текста или соответствующий html\r\n\t\t\t\t\tfor (let part of parts) {\r\n\t\t\t\t\t\tif (replacements[part]) {\r\n\t\t\t\t\t\t\tspan.innerHTML += replacements[part];\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tspan.appendChild(document.createTextNode(part));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// Заменяем текстовый узел на span\r\n\t\t\t\t\tnode.parentNode.replaceChild(span, node);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://kt/./src/js/base/inch%D0%A1hanger/inch%D0%A1hanger.js?");

/***/ }),

/***/ "./src/js/base/isMobile/isMobile.js":
/*!******************************************!*\
  !*** ./src/js/base/isMobile/isMobile.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTouchClass: () => (/* binding */ addTouchClass),\n/* harmony export */   isMobile: () => (/* binding */ isMobile)\n/* harmony export */ });\n/* Проверка мобильного браузера */\r\nlet isMobile = {\r\n    Android: function () {\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n        return (\r\n            isMobile.Android() ||\r\n            isMobile.BlackBerry() ||\r\n            isMobile.iOS() ||\r\n            isMobile.Opera() ||\r\n            isMobile.Windows()\r\n        );\r\n    },\r\n};\r\n/* Добавление класса touch для HTML, если браузер мобильный */\r\nfunction addTouchClass() {\r\n    // Добавление класса _touch для HTML, если браузер мобильный\r\n    if (isMobile.any()) {\r\n        document.documentElement.classList.add(\"touch\")\r\n        /////////////////////////////////////\r\n        // Поиск стрелок в navbar и при клике добавляет класс _active\r\n        let navbarArrows = document.querySelectorAll('.navbar__arrow');\r\n\r\n        if (navbarArrows.length > 0) {\r\n            navbarArrows.forEach(navbarArrow => {\r\n                navbarArrow.addEventListener(\"click\", function (e) {\r\n                    navbarArrow.parentElement.classList.toggle('_active')\r\n                });\r\n            });\r\n        }\r\n        /////////////////////////////////////\r\n\r\n    } else {\r\n        document.documentElement.classList.add(\"pc\")\r\n    };\r\n}\r\n\r\n\r\n// Бургер\r\nconst hamburger = document.querySelector('.hamburger');\r\nconst menuNavbarList = document.querySelector('.navbar__list');\r\nlet navbarItemActive;\r\nconsole.log('navbarItemActive', navbarItemActive);\r\n\r\nif (hamburger) {\r\n    hamburger.addEventListener(\"click\", function (e) {\r\n        document.body.classList.toggle('_lock')\r\n        hamburger.classList.toggle('_active');\r\n        menuNavbarList.classList.toggle('_active');\r\n        navbarItemActive = document.querySelector('navbar__item _active')\r\n    });\r\n}\r\n\r\n\r\nconst navbarLinks = document.querySelectorAll('.navbar__link')\r\nconsole.log('menuLinks', navbarLinks);\r\nconst navbarSubLinks = document.querySelectorAll('.navbar__sub-link')\r\nconsole.log('navbarSubLinks', navbarSubLinks);\r\nconst allNavbarLinks = [...navbarLinks, ...navbarSubLinks]\r\nconsole.log('allNavbarLinks', allNavbarLinks);\r\nconst navbarItem = document.querySelectorAll('.navbar__item')\r\nconsole.log('navbarItem', navbarItem);\r\n\r\n\r\nallNavbarLinks.forEach(element => {\r\n    element.addEventListener(\"click\", function (e) {\r\n        document.body.classList.remove('_lock')\r\n        hamburger.classList.remove('_active');\r\n        menuNavbarList.classList.remove('_active');\r\n\r\n        navbarItem.forEach(element => {\r\n            if(element.classList.contains('_active')){\r\n                element.classList.remove('_active')\r\n            }\r\n        });\r\n    });\r\n});\r\n\r\n/* \r\n\r\nfor (let index = 0; index < navbarArrows.length; index++) {\r\n                const navbarArrow = navbarArrows[index];\r\n                navbarArrow.addEventListener(\"click\", function (e) {\r\n                    navbarArrow.parentElement.classList.toggle('active')\r\n                    console.log('navbarArrow');\r\n                });\r\n            }\r\n\r\n\r\n*/\n\n//# sourceURL=webpack://kt/./src/js/base/isMobile/isMobile.js?");

/***/ }),

/***/ "./src/js/base/isWebp/isWebp.js":
/*!**************************************!*\
  !*** ./src/js/base/isWebp/isWebp.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isWebp: () => (/* binding */ isWebp)\n/* harmony export */ });\n/* \r\n\r\nСкрипт проверяет, поддерживает ли браузер изображения в формате WebP или нет.\r\nВ зависимости от результата на <html></html> класс:\r\n- webp если поддерживается\r\n- no-webp если не поддерживается\r\n\r\n*/\r\n\r\nfunction isWebp() {\r\n    // Проверка поддержки webp \r\n    function testWebP(callback) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    // Додавання класу _webp або _no-webp для HTML\r\n    testWebP(function (support) {\r\n        let className = support === true ? 'webp' : 'no-webp';\r\n        document.documentElement.classList.add(className);\r\n    });\r\n}\n\n//# sourceURL=webpack://kt/./src/js/base/isWebp/isWebp.js?");

/***/ }),

/***/ "./src/js/coreRules.js":
/*!*****************************!*\
  !*** ./src/js/coreRules.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_inch_hanger_inch_hanger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/inchСhanger/inchСhanger.js */ \"./src/js/base/inchСhanger/inchСhanger.js\");\n/* harmony import */ var _base_isMobile_isMobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/isMobile/isMobile.js */ \"./src/js/base/isMobile/isMobile.js\");\n/* harmony import */ var _base_isWebp_isWebp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/isWebp/isWebp.js */ \"./src/js/base/isWebp/isWebp.js\");\nconsole.log('core-rules');\r\n\r\n\r\n\r\n(0,_base_inch_hanger_inch_hanger_js__WEBPACK_IMPORTED_MODULE_0__[\"inchСhanger\"])()\r\n\r\n\r\n\r\nconsole.log('JavaScript запустился и хорошо себя чувствует!');\r\n\r\n// import './base/main-scripts.js'\r\n\r\n////////////////////////////////////////////////////\r\n// Плангин isMobile\r\n// (Проверка мобильный ли браузер)\r\n////////////////////////////////////////////////////\r\n\r\n\r\n_base_isMobile_isMobile_js__WEBPACK_IMPORTED_MODULE_1__.addTouchClass()\r\n\r\n/* ---------------------------------------------- */\r\n\r\n\r\n////////////////////////////////////////////////////\r\n//                Плангин isWebp\r\n//\r\n//  Скрипт проверяет, поддерживает ли браузер изображения в формате WebP или нет.\r\n//  В зависимости от результата на <html></html> класс:\r\n//  - webp если поддерживается\r\n//  - no-webp если не поддерживается\r\n////////////////////////////////////////////////////\r\n;\r\n\r\n(0,_base_isWebp_isWebp_js__WEBPACK_IMPORTED_MODULE_2__.isWebp)()\r\n\r\n/* ---------------------------------------------- */\r\n\n\n//# sourceURL=webpack://kt/./src/js/coreRules.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/coreRules.js");
/******/ 	
/******/ })()
;