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

/***/ "./src/js/base/readMore/readMoreInit.js":
/*!**********************************************!*\
  !*** ./src/js/base/readMore/readMoreInit.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readMoreInit: () => (/* binding */ readMoreInit)\n/* harmony export */ });\nfunction readMoreInit(selectorMainBlock, selectorButton, options) {\r\n\r\n    const mainBlock = document.querySelector(selectorMainBlock)\r\n    const content = mainBlock.firstElementChild;\r\n    const button = document.querySelector(selectorButton);\r\n    let shadow;\r\n\r\n    // Опции ( options )\r\n    const minHeight = options.minimumHeight || 50;\r\n    const speed = options.speed || 1000;\r\n    const shadowToggle = options.shadowToggle || false;\r\n\r\n    // Получение начальной высоты тлока с текстом ( selectorText )\r\n    let startHeight = content.scrollHeight;\r\n\r\n    //Поправка максимальных размеров после применения css\r\n    window.onload = () => {\r\n        startHeight = content.scrollHeight\r\n        console.log(startHeight);\r\n    }\r\n\r\n    // Начальные установки\r\n    content.style.overflow = 'hidden';\r\n    content.style.height = minHeight + 'px';\r\n    content.style.transition = 'height ' + speed + 'ms ease-in-out';\r\n\r\n    // Настройка тени\r\n    if (shadowToggle === 1) {\r\n        content.style.position = 'relative';\r\n        let createShadow = document.createElement('div');\r\n        let newClassShadow = `${selectorMainBlock.replace(/^\\./, \"\")}__shadow`;\r\n        createShadow.className = newClassShadow;\r\n        Object.assign(createShadow.style, {\r\n            position: 'absolute',\r\n            content: '',\r\n            width: '100%',\r\n            height: '100%',\r\n            bottom: '0',\r\n            pointerEvents: 'none',\r\n            opacity: 1,\r\n            transition: 'opacity ' + speed + 'ms ease-in-out',\r\n            background: 'linear-gradient(' + 0 + 'deg, rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 1 + ') ' + 0 + '%, rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0 + ')' + 100 + '%)',\r\n        });\r\n        shadow = createShadow;\r\n        content.appendChild(shadow);\r\n    }\r\n\r\n    // Действия при нажатии на кнопку\r\n    button.addEventListener('click', function () {\r\n\r\n        if (content.style.height === minHeight + \"px\") {\r\n            content.style.height = startHeight + 'px';\r\n            mainBlock.classList.add('_active');\r\n            shadow.style.opacity = 0.1;\r\n            button.textContent = 'Скрыть';\r\n        } else {\r\n            content.style.height = minHeight + 'px';\r\n            mainBlock.classList.remove('_active');\r\n            shadow.style.opacity = 1;\r\n            button.textContent = 'Читать далее...';\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://kt/./src/js/base/readMore/readMoreInit.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_isMobile_isMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/isMobile/isMobile.js */ \"./src/js/base/isMobile/isMobile.js\");\n/* harmony import */ var _base_isWebp_isWebp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/isWebp/isWebp.js */ \"./src/js/base/isWebp/isWebp.js\");\n/* harmony import */ var _base_readMore_readMoreInit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/readMore/readMoreInit.js */ \"./src/js/base/readMore/readMoreInit.js\");\nconsole.log('JavaScript запустился и хорошо себя чувствует!');\r\n\r\n// import './base/main-scripts.js'\r\n\r\n////////////////////////////////////////////////////\r\n// Плангин isMobile\r\n// (Проверка мобильный ли браузер)\r\n////////////////////////////////////////////////////\r\n\r\n\r\n_base_isMobile_isMobile_js__WEBPACK_IMPORTED_MODULE_0__.addTouchClass()\r\n\r\n/* ---------------------------------------------- */\r\n\r\n\r\n////////////////////////////////////////////////////\r\n//                Плангин isWebp\r\n//\r\n//  Скрипт проверяет, поддерживает ли браузер изображения в формате WebP или нет.\r\n//  В зависимости от результата на <html></html> класс:\r\n//  - webp если поддерживается\r\n//  - no-webp если не поддерживается\r\n////////////////////////////////////////////////////\r\n;\r\n\r\n(0,_base_isWebp_isWebp_js__WEBPACK_IMPORTED_MODULE_1__.isWebp)()\r\n\r\n/* ---------------------------------------------- */\r\n\r\n\r\n////////////////////////////////////////////////////\r\n// Плангин читать далее\r\n////////////////////////////////////////////////////\r\n;\r\n\r\nnew _base_readMore_readMoreInit_js__WEBPACK_IMPORTED_MODULE_2__.readMoreInit('.info-readmore', '.info-readmore__btn', {\r\n    minimumHeight: 80,\r\n    speed: 500,\r\n    shadowToggle: 1,\r\n});\r\n\r\n/* ---------------------------------------------- */\r\n\r\n\r\n\r\n\r\nconst goToLinks = document.querySelectorAll('[data-goto]');\r\nconsole.log('goToLinks', goToLinks);\r\nif (goToLinks.length > 0) {\r\n    goToLinks.forEach(goToLink => {\r\n        goToLink.addEventListener(\"click\", function (e) {\r\n            const navbarElement = e.target;\r\n\r\n            console.log('data', navbarElement.dataset.goto);\r\n\r\n            console.log('object', document.querySelector(`[data-anchor='${navbarElement.dataset.goto}']`));\r\n\r\n            if(navbarElement.dataset.goto && document.querySelector(`[data-anchor='${navbarElement.dataset.goto}']`)){\r\n                console.log(document.querySelector(`[data-anchor='${navbarElement.dataset.goto}']`));\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://kt/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;