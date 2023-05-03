/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes.js":
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./key.js");
/* harmony import */ var _specialkey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialkey */ "./specialkey.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Keyboard = /*#__PURE__*/_createClass(function Keyboard() {
  _classCallCheck(this, Keyboard);
  this.row1 = {};
  this.row1.keyBackTick = {};
  this.row1.keyBackTick.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('`', '~');
  this.row1.keyBackTick.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ё', 'Ё');
  this.row1.key1 = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('1', '!');
  this.row1.key2 = {};
  this.row1.key2.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('2', '@');
  this.row1.key2.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('2', '"');
  this.row1.key3 = {};
  this.row1.key3.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('3', '#');
  this.row1.key3.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('3', '№');
  this.row1.key4 = {};
  this.row1.key4.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('4', '$');
  this.row1.key4.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('4', ';');
  this.row1.key5 = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('5', '%');
  this.row1.key6 = {};
  this.row1.key6.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('6', '^');
  this.row1.key6.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('6', ':');
  this.row1.key7 = {};
  this.row1.key7.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('7', '&');
  this.row1.key7.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('7', '?');
  this.row1.key8 = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('8', '*');
  this.row1.key9 = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('9', '(');
  this.row1.key0 = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('0', ')');
  this.row1.keyMinus = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('-', '_');
  this.row1.keyEquals = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('=', '+');
  this.row1.keyBackspace = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Backspace');
  this.row2 = {};
  this.row2.keyTab = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Tab');
  this.row2.keyQ = {};
  this.row2.keyQ.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('q', 'Q');
  this.row2.keyQ.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('й', 'Й');
  this.row2.keyW = {};
  this.row2.keyW.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('w', 'W');
  this.row2.keyW.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ц', 'Ц');
  this.row2.keyE = {};
  this.row2.keyE.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('e', 'E');
  this.row2.keyE.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('у', 'У');
  this.row2.keyR = {};
  this.row2.keyR.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('r', 'R');
  this.row2.keyR.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('к', 'К');
  this.row2.keyT = {};
  this.row2.keyT.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('t', 'T');
  this.row2.keyT.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('е', 'Е');
  this.row2.keyY = {};
  this.row2.keyY.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('y', 'Y');
  this.row2.keyY.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('н', 'Н');
  this.row2.keyU = {};
  this.row2.keyU.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('u', 'U');
  this.row2.keyU.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('г', 'Г');
  this.row2.keyI = {};
  this.row2.keyI.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('i', 'I');
  this.row2.keyI.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ш', 'Ш');
  this.row2.keyO = {};
  this.row2.keyO.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('o', 'O');
  this.row2.keyO.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('щ', 'Щ');
  this.row2.keyP = {};
  this.row2.keyP.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'P');
  this.row2.keyP.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('з', 'З');
  this.row2.keyLeftBracket = {};
  this.row2.keyLeftBracket.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('[', '{');
  this.row2.keyLeftBracket.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('х', 'Х');
  this.row2.keyRightBracket = {};
  this.row2.keyRightBracket.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](']', '}');
  this.row2.keyRightBracket.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ъ', 'Ъ');
  this.row2.keyBackslash = {};
  this.row2.keyBackslash.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('\\', '|');
  this.row2.keyBackslash.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('\\', '/');
  this.row2.keyDelete = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Del');
  this.row3 = {};
  this.row3.keyCapsLock = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Caps Lock');
  this.row3.keyA = {};
  this.row3.keyA.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('a', 'A');
  this.row3.keyA.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ф', 'Ф');
  this.row3.keyS = {};
  this.row3.keyS.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('s', 'S');
  this.row3.keyS.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ы', 'Ы');
  this.row3.keyD = {};
  this.row3.keyD.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('d', 'D');
  this.row3.keyD.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('в', 'В');
  this.row3.keyF = {};
  this.row3.keyF.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('f', 'F');
  this.row3.keyF.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('а', 'А');
  this.row3.keyG = {};
  this.row3.keyG.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('g', 'G');
  this.row3.keyG.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('п', 'П');
  this.row3.keyH = {};
  this.row3.keyH.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('h', 'H');
  this.row3.keyH.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('р', 'Р');
  this.row3.keyJ = {};
  this.row3.keyJ.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('j', 'J');
  this.row3.keyJ.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('о', 'О');
  this.row3.keyK = {};
  this.row3.keyK.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('k', 'K');
  this.row3.keyK.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('л', 'Л');
  this.row3.keyL = {};
  this.row3.keyL.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('l', 'L');
  this.row3.keyL.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('д', 'Д');
  this.row3.keySemicolon = {};
  this.row3.keySemicolon.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](';', ':');
  this.row3.keySemicolon.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ж', 'Ж');
  this.row3.keyQuote = {};
  this.row3.keyQuote.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('\'', '"');
  this.row3.keyQuote.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('э', 'Э');
  this.row3.keyEnter = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Enter');
  this.row4 = {};
  this.row4.keyShiftLeft = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Shift');
  this.row4.keyZ = {};
  this.row4.keyZ.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('z', 'Z');
  this.row4.keyZ.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('я', 'Я');
  this.row4.keyX = {};
  this.row4.keyX.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('x', 'X');
  this.row4.keyX.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ч', 'Ч');
  this.row4.keyC = {};
  this.row4.keyC.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('c', 'C');
  this.row4.keyC.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('с', 'С');
  this.row4.keyV = {};
  this.row4.keyV.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('v', 'V');
  this.row4.keyV.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('м', 'М');
  this.row4.keyB = {};
  this.row4.keyB.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('b', 'B');
  this.row4.keyB.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('и', 'И');
  this.row4.keyN = {};
  this.row4.keyN.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('n', 'N');
  this.row4.keyN.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('т', 'Т');
  this.row4.keyM = {};
  this.row4.keyM.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('m', 'M');
  this.row4.keyM.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ь', 'Ь');
  this.row4.keyComma = {};
  this.row4.keyComma.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](',', '<');
  this.row4.keyComma.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('б', 'Б');
  this.row4.keyPeriod = {};
  this.row4.keyPeriod.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('.', '>');
  this.row4.keyPeriod.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ю', 'Ю');
  this.row4.keySlash = {};
  this.row4.keySlash.en = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('/', '?');
  this.row4.keySlash.ru = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('.', ',');
  this.row4.keyUp = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('↑');
  this.row4.keyShiftRight = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Shift');
  this.row5 = {};
  this.row5.keyCtrlLeft = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Ctrl');
  this.row5.keyWin = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Win');
  this.row5.keyAltLeft = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Alt');
  this.row5.keySpace = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](' ', ' ');
  this.row5.keyAltRight = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Alt');
  this.row5.keyLeft = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('←');
  this.row5.keyDown = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('↓');
  this.row5.keyRight = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('→');
  this.row5.keyCtrlRight = new _specialkey__WEBPACK_IMPORTED_MODULE_1__["default"]('Ctrl');
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);

/***/ }),

/***/ "./key.js":
/*!****************!*\
  !*** ./key.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;
var Key = /*#__PURE__*/_createClass(function Key(primaryChar, secondaryChar) {
  _classCallCheck(this, Key);
  var emptyKey = document.createElement('span');
  emptyKey.classList.add('keyboard__key');
  this.key = emptyKey;
  this.primaryElement = document.createElement('span');
  this.primaryElement.classList.add('keyboard__key_primary');
  this.primaryElement.textContent = primaryChar;
  this.isLetter = primaryChar.match(REGEXP);
  this.secondaryElement = document.createElement('span');
  this.secondaryElement.classList.add('keyboard__key_secondary');
  this.secondaryElement.textContent = secondaryChar;
  this.key.append(this.primaryElement);
  this.key.append(this.secondaryElement);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);

/***/ }),

/***/ "./specialkey.js":
/*!***********************!*\
  !*** ./specialkey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var SpecialKey = /*#__PURE__*/_createClass(function SpecialKey(special) {
  _classCallCheck(this, SpecialKey);
  var emptyKey = document.createElement('span');
  emptyKey.classList.add('keyboard__key');
  this.key = emptyKey;
  this.specialElement = document.createElement('span');
  this.specialElement.classList.add('keyboard__key_special');
  this.specialElement.textContent = special;
  this.key.append(this.specialElement);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecialKey);

/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles.scss":
/*!****************************!*\
  !*** ./assets/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleBackspaceClick": () => (/* binding */ handleBackspaceClick),
/* harmony export */   "handleKeyClick": () => (/* binding */ handleKeyClick)
/* harmony export */ });
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./assets/styles.scss");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./classes.js");



var SELECTION_START;
var SELECTION_END;
var CTRL_FLAG = 0;
var ALT_FLAG = 0;
var CAPS_FLAG = 0;
var SHIFT_FLAG = 0;

// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';
var cookies = decodeURIComponent(document.cookie).split(';');
var lang = cookies.find(function (cookie) {
  return cookie.includes('lang=');
}).split('=')[1];
var main = new _classes__WEBPACK_IMPORTED_MODULE_2__["default"]();

// Load
var textarea = document.createElement('textarea');
textarea.classList.add('main__textarea');
textarea.autofocus = true;
textarea.cols = 38;
textarea.rows = 13;
textarea.placeholder = 'Введите текст';
var primaryKeys;
var secondaryKeys;
var updateLangVars = function updateLangVars(language) {
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.cookie = "lang=".concat(language, "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/");
};
var updateSelections = function updateSelections() {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
};
var updateValue = function updateValue(value) {
  var text = textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
  return text;
};
var addClasses = function addClasses(keyArr) {
  keyArr.forEach(function (key) {
    key.classList.add('keyboard__key_primary');
    key.classList.remove('keyboard__key_secondary');
  });
};
var removeClasses = function removeClasses(keyArr) {
  keyArr.forEach(function (key) {
    key.classList.add('keyboard__key_secondary');
    key.classList.remove('keyboard__key_primary');
  });
};
var addClassesToLetters = function addClassesToLetters(keyArr) {
  keyArr.forEach(function (key) {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  });
};
var removeClassesToLetters = function removeClassesToLetters(keyArr) {
  keyArr.forEach(function (key) {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  });
};
var addClassesToOthers = function addClassesToOthers(keyArr) {
  keyArr.forEach(function (key) {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  });
};
var removeClassesToOthers = function removeClassesToOthers(keyArr) {
  keyArr.forEach(function (key) {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  });
};
var keyboardCaseSwitch = function keyboardCaseSwitch() {
  textarea.focus();
  if (SHIFT_FLAG === 0) {
    if (CAPS_FLAG === 0) {
      addClasses(primaryKeys);
      removeClasses(secondaryKeys);
    } else {
      addClassesToLetters(secondaryKeys);
      removeClassesToLetters(primaryKeys);
      addClassesToOthers(primaryKeys);
      removeClassesToOthers(secondaryKeys);
    }
  } else if (CAPS_FLAG === 0) {
    addClasses(secondaryKeys);
    removeClasses(primaryKeys);
  } else {
    addClassesToLetters(primaryKeys);
    removeClassesToLetters(secondaryKeys);
    addClassesToOthers(secondaryKeys);
    removeClassesToOthers(primaryKeys);
  }
};
var handleKeyClick = function handleKeyClick(evt) {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START === SELECTION_END ? SELECTION_END + 1 : SELECTION_START + 1);
};
var switchLanguage = function switchLanguage() {
  cookies = decodeURIComponent(document.cookie).split(';');
  var curLang = cookies.find(function (cookie) {
    return cookie.includes('lang=');
  }).split('=')[1];
  lang = curLang === 'en' ? 'ru' : 'en';
  var rows = Object.keys(main);
  rows.forEach(function (row) {
    var elem = Object.keys(main[row]);
    elem.forEach(function (key) {
      if (main[row][key][lang]) {
        var prevText = main[row][key][curLang].primaryElement.innerText;
        var fullElem = main[row][key][lang];
        if (fullElem.isLetter) {
          fullElem.key.classList.add('keyboard__key_shiftable');
        }
        primaryKeys.forEach(function (prim) {
          if (prim.innerText === prevText) {
            fullElem.key.addEventListener('click', handleKeyClick);
            prim.parentNode.replaceWith(fullElem.key);
          }
        });
      }
    });
  });
  updateLangVars(lang);
  keyboardCaseSwitch();
};
var handleBackspaceClick = function handleBackspaceClick() {
  var currentValue = textarea.value;
  updateSelections();
  if (SELECTION_END !== currentValue.length) {
    if (SELECTION_END !== 0) {
      if (SELECTION_START === SELECTION_END) {
        textarea.value = currentValue.slice(0, SELECTION_START - 1) + currentValue.slice(SELECTION_END);
      } else {
        textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
      }
    } else {
      SELECTION_START = 1;
      SELECTION_END = 1;
    }
  } else if (SELECTION_END === SELECTION_START) {
    textarea.value = currentValue.slice(0, -1);
  } else {
    textarea.value = currentValue.slice(0, SELECTION_START);
  }
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START === SELECTION_END ? SELECTION_START - 1 : SELECTION_START, SELECTION_START === SELECTION_END ? SELECTION_START - 1 : SELECTION_START);
};
var handleDeleteClick = function handleDeleteClick() {
  var currentValue = textarea.value;
  updateSelections();
  if (SELECTION_START === SELECTION_END) {
    if (SELECTION_END !== currentValue.length) {
      textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END + 1);
    }
  } else {
    textarea.value = SELECTION_END === currentValue.length ? currentValue.slice(0, SELECTION_START) : currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
  }
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START, SELECTION_START);
};
var handleTabClick = function handleTabClick() {
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 4, SELECTION_START === SELECTION_END ? SELECTION_END + 4 : SELECTION_START + 4);
};
var handleEnterClick = function handleEnterClick() {
  updateSelections();
  textarea.value = updateValue('\n');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START === SELECTION_END ? SELECTION_END + 1 : SELECTION_START + 1);
};
var handleKeyArrowClick = function handleKeyArrowClick(evt) {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_special').textContent);
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START === SELECTION_END ? SELECTION_END + 1 : SELECTION_START + 1);
};
var handleEmptyClick = function handleEmptyClick(evt) {
  evt.preventDefault();
  textarea.focus();
};
var handleKeyDown = function handleKeyDown(evt) {
  textarea.focus();
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.add('keyboard__key_active');
    return;
  }
  keyArr.forEach(function (key) {
    if (evt.key === 'Control' && key.innerText === 'Ctrl') {
      if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' || !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
        key.parentNode.classList.add('keyboard__key_active');
        if (evt.code === 'ControlLeft') {
          CTRL_FLAG = 1;
        }
      }
    } else if (evt.key === 'Meta' && key.innerText === 'Win') {
      key.parentNode.classList.add('keyboard__key_active');
    } else if (evt.key === 'Shift' && key.innerText === 'Shift') {
      SHIFT_FLAG = 1;
      keyboardCaseSwitch();
      if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' || !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
        key.parentNode.classList.add('keyboard__key_active');
      }
    } else if (evt.key === 'CapsLock' && key.innerText === 'Caps Lock') {
      key.parentNode.classList.add('keyboard__key_active');
    } else if ((evt.key === 'Alt' || evt.key === 'AltGraph') && key.innerText === 'Alt') {
      if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' || !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
        key.parentNode.classList.add('keyboard__key_active');
        if (evt.code === 'AltLeft') {
          ALT_FLAG = 1;
        }
      }
    } else if (evt.key === 'Delete' && key.innerText === 'Del') {
      key.parentNode.classList.add('keyboard__key_active');
    } else if (evt.key === 'Tab' && key.innerText === 'Tab') {
      handleTabClick();
      key.parentNode.classList.add('keyboard__key_active');
      setTimeout(function () {
        key.parentNode.classList.remove('keyboard__key_active');
      }, 500);
    } else if (evt.key === 'ArrowUp' && key.innerText === '↑' || evt.key === 'ArrowLeft' && key.innerText === '←' || evt.key === 'ArrowDown' && key.innerText === '↓' || evt.key === 'ArrowRight' && key.innerText === '→') {
      key.parentNode.classList.add('keyboard__key_active');
    } else if (key.innerText === evt.key || key.innerText === evt.key.toUpperCase() || key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1) {
      if (SHIFT_FLAG === 1) {
        evt.preventDefault();
        updateSelections();
        textarea.value = updateValue(key.parentNode.querySelector('.keyboard__key_primary').textContent);
      }
      key.parentNode.classList.add('keyboard__key_active');
    }
  });
};
var handleKeyUp = function handleKeyUp(evt) {
  textarea.focus();
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.remove('keyboard__key_active');
    return;
  }
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(function (key) {
    if (evt.key === 'Control' && key.innerText === 'Ctrl') {
      if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' || !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
        key.parentNode.classList.remove('keyboard__key_active');
        if (evt.code === 'ControlLeft') {
          if (ALT_FLAG === 1) {
            switchLanguage();
          }
          CTRL_FLAG = 0;
        }
      }
    } else if (evt.key === 'Meta' && key.innerText === 'Win') {
      key.parentNode.classList.remove('keyboard__key_active');
    } else if (evt.key === 'Shift' && key.innerText === 'Shift') {
      SHIFT_FLAG = 0;
      keyboardCaseSwitch();
      if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' || !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
        key.parentNode.classList.remove('keyboard__key_active');
      }
    } else if (evt.key === 'CapsLock' && key.innerText === 'Caps Lock') {
      key.parentNode.classList.remove('keyboard__key_active');
      CAPS_FLAG = CAPS_FLAG === 1 ? 0 : 1;
      keyboardCaseSwitch();
    } else if ((evt.key === 'Alt' || evt.key === 'AltGraph') && key.innerText === 'Alt') {
      if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' || !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
        key.parentNode.classList.remove('keyboard__key_active');
        if (evt.code === 'AltLeft') {
          if (CTRL_FLAG === 1) {
            switchLanguage();
          }
          ALT_FLAG = 0;
        }
      }
    } else if (evt.key === 'Delete' && key.innerText === 'Del' || evt.key === 'ArrowUp' && key.innerText === '↑' || evt.key === 'ArrowLeft' && key.innerText === '←' || evt.key === 'ArrowDown' && key.innerText === '↓' || evt.key === 'ArrowRight' && key.innerText === '→') {
      key.parentNode.classList.remove('keyboard__key_active');
    } else if (key.innerText === evt.key || key.innerText === evt.key.toUpperCase() || key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1) {
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
};
var handleCtrlLeftDown = function handleCtrlLeftDown() {
  CTRL_FLAG = 1;
  if (ALT_FLAG === 1) {
    switchLanguage();
  }
};
var handleCtrlLeftUp = function handleCtrlLeftUp() {
  CTRL_FLAG = 0;
};
var handleAltLeftDown = function handleAltLeftDown() {
  ALT_FLAG = 1;
  if (CTRL_FLAG === 1) {
    switchLanguage();
  }
};
var handleAltLeftUp = function handleAltLeftUp() {
  ALT_FLAG = 0;
};
var keyboardCapsClick = function keyboardCapsClick() {
  CAPS_FLAG = CAPS_FLAG === 1 ? 0 : 1;
  keyboardCaseSwitch();
};
var keyboardShiftDown = function keyboardShiftDown() {
  SHIFT_FLAG = 1;
  keyboardCaseSwitch();
};
var keyboardShiftUp = function keyboardShiftUp() {
  SHIFT_FLAG = 0;
  keyboardCaseSwitch();
};
var focusLose = function focusLose() {
  CTRL_FLAG = 0;
  ALT_FLAG = 0;
  keyboardCaseSwitch();
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(function (key) {
    if (key.parentNode.classList.contains('keyboard__key_active') && key.innerText !== 'Tab') {
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
};
window.addEventListener('load', function () {
  document.body.insertAdjacentHTML('afterbegin', "\n    <main class=\"main\">\n      <h1 class=\"main__heading\">\n        RSS \u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430\n      </h1>\n    </main>\n  ");
  document.querySelector('.main').insertAdjacentElement('beforeend', textarea);
  document.querySelector('.main').insertAdjacentHTML('beforeend', "\n      <div class=\"keyboard\">\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n      </div>\n  ");
  var rows = Object.keys(main);
  rows.forEach(function (row) {
    var elem = Object.keys(main[row]);
    elem.forEach(function (key) {
      var fullElem = main[row][key][lang] ? main[row][key][lang] : main[row][key];
      if (fullElem.isLetter) {
        fullElem.key.classList.add('keyboard__key_shiftable');
      }
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3), 10) - 1].insertAdjacentElement('beforeend', fullElem.key);

      // Std key listeners
      textarea.addEventListener('keydown', function (evt) {
        if (evt.metaKey || evt.altKey) {
          evt.preventDefault();
          textarea.focus();
        }
      });

      // Main event listeners
      switch (key) {
        case 'keyBackspace':
          fullElem.key.addEventListener('click', handleBackspaceClick);
          break;
        case 'keyTab':
          fullElem.key.addEventListener('click', handleTabClick);
          break;
        case 'keyDelete':
          fullElem.key.addEventListener('click', handleDeleteClick);
          break;
        case 'keyCapsLock':
          fullElem.key.addEventListener('click', keyboardCapsClick);
          break;
        case 'keyEnter':
          fullElem.key.addEventListener('click', handleEnterClick);
          break;
        case 'keyShiftLeft':
        case 'keyShiftRight':
          fullElem.key.addEventListener('mousedown', keyboardShiftDown);
          fullElem.key.addEventListener('mouseup', keyboardShiftUp);
          break;
        case 'keyCtrlLeft':
          fullElem.key.addEventListener('mousedown', handleCtrlLeftDown);
          fullElem.key.addEventListener('mouseup', handleCtrlLeftUp);
          break;
        case 'keyAltLeft':
          fullElem.key.addEventListener('mousedown', handleAltLeftDown);
          fullElem.key.addEventListener('mouseup', handleAltLeftUp);
          break;
        case 'keyUp':
          fullElem.key.addEventListener('click', handleKeyArrowClick);
          break;
        case 'keyLeft':
          fullElem.key.addEventListener('click', handleKeyArrowClick);
          break;
        case 'keyDown':
          fullElem.key.addEventListener('click', handleKeyArrowClick);
          break;
        case 'keyRight':
          fullElem.key.addEventListener('click', handleKeyArrowClick);
          break;
        case 'keyWin':
        case 'keyAltRight':
        case 'keyCtrlRight':
          fullElem.key.addEventListener('click', handleEmptyClick);
          break;
        default:
          fullElem.key.addEventListener('click', handleKeyClick);
      }

      // Special keys styles
      switch (key) {
        case 'keyCapsLock':
          fullElem.key.classList.add('keyboard__key_caps');
          break;
        case 'keyShiftLeft':
          fullElem.key.classList.add('keyboard__key_left-shift');
          break;
        case 'keyCtrlLeft':
          fullElem.key.classList.add('keyboard__key_left-ctrl');
          break;
        case 'keyAltLeft':
          fullElem.key.classList.add('keyboard__key_left-alt');
          break;
        case 'keySpace':
          fullElem.key.classList.add('keyboard__key_space');
          break;
        case elem[elem.length - 1]:
          fullElem.key.classList.add('keyboard__key_last');
          break;
        default:
          document.body.classList.add('body');
      }

      // KeyBoard Highlight Listeners
      textarea.addEventListener('keydown', handleKeyDown);
      textarea.addEventListener('keyup', handleKeyUp);
      textarea.addEventListener('blur', focusLose);
    });
  });
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.body.insertAdjacentHTML('beforeend', "\n    <aside class=\"legend\">\n      <p class=\"legend__desc\">\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 Windows OS</p>\n      <p class=\"legend__desc\">\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u0435\u0432\u044B\u0435 <span class=\"legend__key\">Ctrl</span> + <span class=\"legend__key\">Alt</span></p>\n      <p class=\"legend__desc\">\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043E\u043A \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B. \u0412 \u0438\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0447\u0438\u0442\u0430\u044E \u044D\u0442\u043E \u0438\u0437\u043B\u0438\u0448\u043D\u0438\u043C</p>\n      <p class=\"legend__desc\">\u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 eslint \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B \u0432 \u0432\u0435\u0442\u043A\u0435 development, \u0430 \u043D\u0435 \u0437\u0434\u0435\u0441\u044C</p>\n    </aside>\n  ");
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map