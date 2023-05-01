/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


/***/ }),

/***/ "./classes.js":
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "key": () => (/* binding */ key),
/* harmony export */   "keyboard": () => (/* binding */ keyboard),
/* harmony export */   "specialKey": () => (/* binding */ specialKey)
/* harmony export */ });
const REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;

class keyboard {
  constructor() {
    this.row1 = {};
    this.row1.keyBackTick = {};
    this.row1.keyBackTick.en = new key('`', '~');
    this.row1.keyBackTick.ru = new key('ё', 'Ё');
    this.row1.key1 = new key('1', '!');
    this.row1.key2 = {};
    this.row1.key2.en = new key('2', '@');
    this.row1.key2.ru = new key('2', '"');
    this.row1.key3 = {};
    this.row1.key3.en = new key('3', '#');
    this.row1.key3.ru = new key('3', '№');
    this.row1.key4 = {};
    this.row1.key4.en = new key('4', '$');
    this.row1.key4.ru = new key('4', ';');
    this.row1.key5 = new key('5', '%');
    this.row1.key6 = {};
    this.row1.key6.en = new key('6', '^');
    this.row1.key6.ru = new key('6', ':');
    this.row1.key7 = {};
    this.row1.key7.en = new key('7', '&');
    this.row1.key7.ru = new key('7', '?');
    this.row1.key8 = new key('8', '*');
    this.row1.key9 = new key('9', '(');
    this.row1.key0 = new key('0', ')');
    this.row1.keyMinus = new key('-', '_');
    this.row1.keyEquals = new key('=', '+');
    this.row1.keyBackspace = new specialKey('Backspace');

    this.row2 = {};
    this.row2.keyTab = new specialKey('Tab');
    this.row2.keyQ = {};
    this.row2.keyQ.en = new key('q', 'Q');
    this.row2.keyQ.ru = new key('й', 'Й');
    this.row2.keyW = {};
    this.row2.keyW.en = new key('w', 'W');
    this.row2.keyW.ru = new key('ц', 'Ц');
    this.row2.keyE = {};
    this.row2.keyE.en = new key('e', 'E');
    this.row2.keyE.ru = new key('у', 'У');
    this.row2.keyR = {};
    this.row2.keyR.en = new key('r', 'R');
    this.row2.keyR.ru = new key('к', 'К');
    this.row2.keyT = {};
    this.row2.keyT.en = new key('t', 'T');
    this.row2.keyT.ru = new key('е', 'Е');
    this.row2.keyY = {};
    this.row2.keyY.en = new key('y', 'Y');
    this.row2.keyY.ru = new key('н', 'Н');
    this.row2.keyU = {};
    this.row2.keyU.en = new key('u', 'U');
    this.row2.keyU.ru = new key('г', 'Г');
    this.row2.keyI = {};
    this.row2.keyI.en = new key('i', 'I');
    this.row2.keyI.ru = new key('ш', 'Ш');
    this.row2.keyO = {};
    this.row2.keyO.en = new key('o', 'O');
    this.row2.keyO.ru = new key('щ', 'Щ');
    this.row2.keyP = {};
    this.row2.keyP.en = new key('p', 'P');
    this.row2.keyP.ru = new key('з', 'З');
    this.row2.keyLeftBracket = {};
    this.row2.keyLeftBracket.en = new key('[', '{');
    this.row2.keyLeftBracket.ru = new key('х', 'Х');
    this.row2.keyRightBracket = {};
    this.row2.keyRightBracket.en = new key(']', '}');
    this.row2.keyRightBracket.ru = new key('ъ', 'Ъ');
    this.row2.keyBackslash = {};
    this.row2.keyBackslash.en = new key('\\', '|');
    this.row2.keyBackslash.ru = new key('\\', '/');
    this.row2.keyDelete = new specialKey('Del');

    this.row3 = {};
    this.row3.keyCapsLock = new specialKey('Caps Lock');
    this.row3.keyA = {};
    this.row3.keyA.en = new key('a', 'A');
    this.row3.keyA.ru = new key('ф', 'Ф');
    this.row3.keyS = {};
    this.row3.keyS.en = new key('s', 'S');
    this.row3.keyS.ru = new key('ы', 'Ы');
    this.row3.keyD = {};
    this.row3.keyD.en = new key('d', 'D');
    this.row3.keyD.ru = new key('в', 'В');
    this.row3.keyF = {};
    this.row3.keyF.en = new key('f', 'F');
    this.row3.keyF.ru = new key('а', 'А');
    this.row3.keyG = {};
    this.row3.keyG.en = new key('g', 'G');
    this.row3.keyG.ru = new key('п', 'П');
    this.row3.keyH = {};
    this.row3.keyH.en = new key('h', 'H');
    this.row3.keyH.ru = new key('р', 'Р');
    this.row3.keyJ = {};
    this.row3.keyJ.en = new key('j', 'J');
    this.row3.keyJ.ru = new key('о', 'О');
    this.row3.keyK = {};
    this.row3.keyK.en = new key('k', 'K');
    this.row3.keyK.ru = new key('л', 'Л');
    this.row3.keyL = {};
    this.row3.keyL.en = new key('l', 'L');
    this.row3.keyL.ru = new key('д', 'Д');
    this.row3.keySemicolon = {};
    this.row3.keySemicolon.en = new key(';', ':');
    this.row3.keySemicolon.ru = new key('ж', 'Ж');
    this.row3.keyQuote = {};
    this.row3.keyQuote.en = new key('\'', '"');
    this.row3.keyQuote.ru = new key('э', 'Э');
    this.row3.keyEnter = new specialKey('Enter');

    this.row4 = {};
    this.row4.keyShiftLeft = new specialKey('Shift');
    this.row4.keyZ = {};
    this.row4.keyZ.en = new key('z', 'Z');
    this.row4.keyZ.ru = new key('я', 'Я');
    this.row4.keyX = {};
    this.row4.keyX.en = new key('x', 'X');
    this.row4.keyX.ru = new key('ч', 'Ч');
    this.row4.keyC = {};
    this.row4.keyC.en = new key('c', 'C');
    this.row4.keyC.ru = new key('с', 'С');
    this.row4.keyV = {};
    this.row4.keyV.en = new key('v', 'V');
    this.row4.keyV.ru = new key('м', 'М');
    this.row4.keyB = {};
    this.row4.keyB.en = new key('b', 'B');
    this.row4.keyB.ru = new key('и', 'И');
    this.row4.keyN = {};
    this.row4.keyN.en = new key('n', 'N');
    this.row4.keyN.ru = new key('т', 'Т');
    this.row4.keyM = {};
    this.row4.keyM.en = new key('m', 'M');
    this.row4.keyM.ru = new key('ь', 'Ь');
    this.row4.keyComma = {};
    this.row4.keyComma.en = new key(',', '<');
    this.row4.keyComma.ru = new key('б', 'Б');
    this.row4.keyPeriod = {};
    this.row4.keyPeriod.en = new key('.', '>');
    this.row4.keyPeriod.ru = new key('ю', 'Ю');
    this.row4.keySlash = {};
    this.row4.keySlash.en = new key('/', '?');
    this.row4.keySlash.ru = new key('.', ',');
    this.row4.keyUp = new specialKey('↑');
    this.row4.keyShiftRight = new specialKey('Shift');

    this.row5 = {};
    this.row5.keyCtrlLeft = new specialKey('Ctrl');
    this.row5.keyWin = new specialKey('Win');
    this.row5.keyAltLeft = new specialKey('Alt');
    this.row5.keySpace = new key(' ', ' ');
    this.row5.keyAltRight = new specialKey('Alt');
    this.row5.keyLeft = new specialKey('←');
    this.row5.keyDown = new specialKey('↓');
    this.row5.keyRight = new specialKey('→');
    this.row5.keyCtrlRight = new specialKey('Ctrl');
  }
}

class key {
  constructor(primaryChar, secondaryChar) {
    this.key = this.createEmptyKey();

    this.primaryElement = document.createElement('span');
    this.primaryElement.classList.add('keyboard__key_primary');
    this.primaryElement.textContent = primaryChar;

    this.isLetter = primaryChar.match(REGEXP);

    this.secondaryElement = document.createElement('span');
    this.secondaryElement.classList.add('keyboard__key_secondary');
    this.secondaryElement.textContent = secondaryChar;
    
    this.key.append(this.primaryElement);
    this.key.append(this.secondaryElement);
  }

  createEmptyKey() {
    const emptyKey = document.createElement('span')
    emptyKey.classList.add('keyboard__key');
    return emptyKey;
  }
}

class specialKey {
  constructor(special) {
    this.key = this.createEmptyKey();
    this.specialElement = document.createElement('span');
    this.specialElement.classList.add('keyboard__key_special');
    this.specialElement.textContent = special;
    this.key.append(this.specialElement);
  }

  createEmptyKey() {
    const emptyKey = document.createElement('span')
    emptyKey.classList.add('keyboard__key');
    return emptyKey;
  }
}

/***/ }),

/***/ "./events.js":
/*!*******************!*\
  !*** ./events.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusLose": () => (/* binding */ focusLose),
/* harmony export */   "handleAltLeftDown": () => (/* binding */ handleAltLeftDown),
/* harmony export */   "handleAltLeftUp": () => (/* binding */ handleAltLeftUp),
/* harmony export */   "handleBackspaceClick": () => (/* binding */ handleBackspaceClick),
/* harmony export */   "handleCtrlLeftDown": () => (/* binding */ handleCtrlLeftDown),
/* harmony export */   "handleCtrlLeftUp": () => (/* binding */ handleCtrlLeftUp),
/* harmony export */   "handleDeleteClick": () => (/* binding */ handleDeleteClick),
/* harmony export */   "handleEmptyClick": () => (/* binding */ handleEmptyClick),
/* harmony export */   "handleEnterClick": () => (/* binding */ handleEnterClick),
/* harmony export */   "handleKeyArrowClick": () => (/* binding */ handleKeyArrowClick),
/* harmony export */   "handleKeyClick": () => (/* binding */ handleKeyClick),
/* harmony export */   "handleKeyDown": () => (/* binding */ handleKeyDown),
/* harmony export */   "handleKeyUp": () => (/* binding */ handleKeyUp),
/* harmony export */   "handleTabClick": () => (/* binding */ handleTabClick),
/* harmony export */   "keyboardCapsClick": () => (/* binding */ keyboardCapsClick),
/* harmony export */   "keyboardShiftDown": () => (/* binding */ keyboardShiftDown),
/* harmony export */   "keyboardShiftUp": () => (/* binding */ keyboardShiftUp)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./classes.js");



let SELECTION_START;
let SELECTION_END;
let CTRL_FLAG = 0;
let ALT_FLAG = 0;
let CAPS_FLAG = 0;
let SHIFT_FLAG = 0;

const handleKeyClick = evt => {
  randomColor(evt.currentTarget); 
  timeout(evt.currentTarget);
  updateSelections();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
}

const handleBackspaceClick = () => {
  const currentValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value;
  updateSelections();
  if (SELECTION_END !== currentValue.length) {
    if (SELECTION_END !== 0)
      SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START - 1) + currentValue.slice(SELECTION_END) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
    else
      SELECTION_START = 1, SELECTION_END = 1;
  }
  else {
    if (SELECTION_END === SELECTION_START) _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, -1);
    else _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START);
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START - 1, SELECTION_START - 1) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

const handleDeleteClick = () => {
  const currentValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value;
  updateSelections();
  if (SELECTION_START === SELECTION_END) {
    if (SELECTION_END !== currentValue.length) _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END + 1);
  }
  else {
    SELECTION_END === currentValue.length ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

const handleTabClick = () => {
  updateSelections();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue('    ');
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 4, SELECTION_START + 4);
}

const handleEnterClick = () => {
  updateSelections();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue('\n');
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
}

const handleKeyArrowClick = evt => {
  updateSelections();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_special').textContent);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
}

const handleEmptyClick = evt => {
  evt.preventDefault();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
}

const handleKeyDown = evt => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  if (evt.code === 'Space') {
    randomColor(document.querySelector('.keyboard__key_space').parentNode);
    document.querySelector('.keyboard__key_space').classList.add('keyboard__key_active');
    return;
  }
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': {
        if (key.innerText === 'Ctrl') {
          if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
              key.parentNode.classList.add('keyboard__key_active');
              randomColor(key.parentNode);
              if (evt.code === 'ControlLeft') {
                CTRL_FLAG = 1;
              }
          }
        }
      }; break;
      case 'Meta': if (key.innerText === 'Win') key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); break;
      case 'Shift': {
        if (key.innerText === 'Shift') {
          SHIFT_FLAG = 1;
          keyboardCaseSwitch();
          if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
               randomColor(key.parentNode);
              key.parentNode.classList.add('keyboard__key_active');
          };
        };
      }; break;
      case 'CapsLock': if (key.innerText === 'Caps Lock') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      case 'Alt': case 'AltGraph': {
        if (key.innerText === 'Alt') {
          if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
              key.parentNode.classList.add('keyboard__key_active');
              randomColor(key.parentNode);
              if (evt.code === 'AltLeft') {
                ALT_FLAG = 1;
              }
          }
        }
      }; break;
      case 'Delete': if (key.innerText === 'Del') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      case 'Tab': {
        if (key.innerText === 'Tab') {
          handleTabClick();
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
          setTimeout(() => {
            key.parentNode.style.borderColor = '';
            key.parentNode.classList.remove('keyboard__key_active');
          }, 500);
        }
      }; break;
      case 'ArrowUp': if (key.innerText === '↑') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      case 'ArrowLeft': if (key.innerText === '←') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      case 'ArrowDown': if (key.innerText === '↓') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      case 'ArrowRight': if (key.innerText === '→') { key.parentNode.classList.add('keyboard__key_active'); randomColor(key.parentNode); }; break;
      default: if ((key.innerText === evt.key || key.innerText === evt.key.toUpperCase()) ||
      (key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1)) {
        if (SHIFT_FLAG === 1) {
          evt.preventDefault();
          updateSelections();
          _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(key.parentNode.querySelector('.keyboard__key_primary').textContent);
        }
        key.parentNode.classList.add('keyboard__key_active');
        randomColor(key.parentNode);
      }
    }
  });
}

const handleKeyUp = evt => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').parentNode.style.borderColor = '';
    document.querySelector('.keyboard__key_space').classList.remove('keyboard__key_active');
    return;
  }
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': {
        if (key.innerText === 'Ctrl') {
          if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
              key.parentNode.style.borderColor = '';
              key.parentNode.classList.remove('keyboard__key_active');
              if (evt.code === 'ControlLeft') {
                if (ALT_FLAG === 1) {
                  switchLanguage();
                }
                CTRL_FLAG = 0;
              }
          }
        }
      }; break;
      case 'Meta': if (key.innerText === 'Win') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      case 'Shift': {
        if (key.innerText === 'Shift') {
          SHIFT_FLAG = 0;
          keyboardCaseSwitch();
          if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
              key.parentNode.style.borderColor = '';
              key.parentNode.classList.remove('keyboard__key_active');
          }
        }
      }; break;
      case 'CapsLock': {
        if (key.innerText === 'Caps Lock') {
          key.parentNode.style.borderColor = '';
          key.parentNode.classList.remove('keyboard__key_active');
          CAPS_FLAG === 0 ? CAPS_FLAG = 1 : CAPS_FLAG = 0;
          keyboardCaseSwitch();
        }
      }; break;
      case 'Alt': case 'AltGraph': {
        if (key.innerText === 'Alt') {
          if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
              key.parentNode.style.borderColor = '';
              key.parentNode.classList.remove('keyboard__key_active');
              if (evt.code === 'AltLeft') {
                if (CTRL_FLAG === 1) {
                  switchLanguage();
                }
                ALT_FLAG = 0;
              }
          }
        }
      }; break;
      case 'Delete': if (key.innerText === 'Del') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      case 'ArrowUp': if (key.innerText === '↑') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      case 'ArrowLeft': if (key.innerText === '←') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      case 'ArrowDown': if (key.innerText === '↓') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      case 'ArrowRight': if (key.innerText === '→') { key.parentNode.classList.remove('keyboard__key_active'); key.parentNode.style.borderColor = ''; }; break;
      default: if ((key.innerText === evt.key || key.innerText === evt.key.toUpperCase()) ||
      (key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1)) {
        key.parentNode.style.borderColor = '';
        key.parentNode.classList.remove('keyboard__key_active');
      };
    }
  });
}

const handleCtrlLeftDown = () => {
  CTRL_FLAG = 1;
  if (ALT_FLAG === 1) {
    switchLanguage();
  }
}

const handleCtrlLeftUp = () => {
  CTRL_FLAG = 0;
}

const handleAltLeftDown = () => {
  ALT_FLAG = 1;
  if (CTRL_FLAG === 1) {
    switchLanguage();
  }
}

const handleAltLeftUp = () => {
  ALT_FLAG = 0;
}

const keyboardCapsClick = () => {
  CAPS_FLAG === 1 ? CAPS_FLAG = 0 : CAPS_FLAG = 1;
  keyboardCaseSwitch();
}

const keyboardShiftDown = () => {
  SHIFT_FLAG = 1;
  keyboardCaseSwitch();
}

const keyboardShiftUp = () => {
  SHIFT_FLAG = 0;
  keyboardCaseSwitch();
}

const focusLose = () => {
  CTRL_FLAG, ALT_FLAG = 0;
  keyboardCaseSwitch();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(key => {
    if (key.parentNode.classList.contains('keyboard__key_active') && key.innerText !== 'Tab') {
      key.parentNode.style.borderColor = '';
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
}

const switchLanguage = () => {
  const newKeyboard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.keyboard();
  const cookies = decodeURIComponent(document.cookie).split(';');
  const curLang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];
  let lang;
  curLang === 'en' ? lang = 'ru' : lang = 'en';
  for (let row in newKeyboard) {
    for (let key in newKeyboard[row]) {
      if (newKeyboard[row][key].hasOwnProperty(lang)) {
        let keyFullElem = newKeyboard[row][key];
        const prevText = keyFullElem[curLang].primaryElement.innerText;
        keyFullElem = keyFullElem[lang];
        if (keyFullElem.isLetter){
          keyFullElem.key.classList.add('keyboard__key_shiftable');
        }
        _index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys.forEach(prim => {
          if (prim.innerText === prevText) {
            keyFullElem.key.addEventListener('click', handleKeyClick);
            prim.parentNode.replaceWith(keyFullElem.key);
          }
        })
      }
    }
  }
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateLangVars)(lang);
  if (CAPS_FLAG === 1) {
    removeClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    addClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
  }
}

const keyboardCaseSwitch = () => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  if (SHIFT_FLAG === 0) {
    if (CAPS_FLAG === 0) {
      addClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
    }
    else {
      addClassesToLetters(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClassesToLetters(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      addClassesToOthers(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClassesToOthers(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
    }
  }
  else {
    if (CAPS_FLAG === 0) {
      addClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClasses(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    }
    else {
      addClassesToLetters(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClassesToLetters(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      addClassesToOthers(_index_js__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClassesToOthers(_index_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    }
  }
}

const updateSelections = () => {
  SELECTION_START = _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.selectionStart;
  SELECTION_END = _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.selectionEnd;
}

const updateValue = value => {
  return _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value.slice(0, SELECTION_START) + value + _index_js__WEBPACK_IMPORTED_MODULE_0__.textarea.value.slice(SELECTION_END);
}

const addClasses = keyArr => {
  keyArr.forEach(key => {
    key.classList.add('keyboard__key_primary');
    key.classList.remove('keyboard__key_secondary');
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
    }
  })
}

const removeClasses = keyArr => {
  keyArr.forEach(key => {
    key.classList.add('keyboard__key_secondary');
    key.classList.remove('keyboard__key_primary');
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
    }
  })
}

const addClassesToLetters = keyArr => {
  keyArr.forEach(key => {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  })
}

const removeClassesToLetters = keyArr => {
  keyArr.forEach(key => {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  })
}

const addClassesToOthers = keyArr => {
  keyArr.forEach(key => {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  })
}

const removeClassesToOthers = keyArr => {
  keyArr.forEach(key => {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  })
}

const randomColor = target => {
  const colors = ["#9CCFB0", "white", "#BC8F89", "#675E91", "blue", "indigo", "violet"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  target.style.borderColor = colors[randomIndex];
}

const timeout = async (target) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      target.style.borderColor = '';
      resolve();
    }, 500);
  });
}; 

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "primaryKeys": () => (/* binding */ primaryKeys),
/* harmony export */   "secondaryKeys": () => (/* binding */ secondaryKeys),
/* harmony export */   "textarea": () => (/* binding */ textarea),
/* harmony export */   "updateLangVars": () => (/* binding */ updateLangVars)
/* harmony export */ });
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/favicon.png */ "./assets/favicon.png");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./classes.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./events.js");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles.scss */ "./assets/styles.scss");






// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';

const cookies = decodeURIComponent(document.cookie).split(';');
let lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];

// Load
let textarea;
let primaryKeys;
let secondaryKeys;

window.addEventListener('load', () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <main class="main">
      <h1 class="main__heading">
        RSS Виртуальная клавиатура
      </h1>
      <textarea class="main__textarea" autofocus cols=38 rows=13 placeholder="Введите текст"></textarea>
      <div class="keyboard">
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
      </div>
    </main>
  `);
  document.body.classList.add('body');
  textarea = document.querySelector('.main__textarea');

  const main = new _classes_js__WEBPACK_IMPORTED_MODULE_2__.keyboard();
  for (let row in main) {
    for (let key in main[row]) {
      const indexes = Object.keys(main[row]);
      let keyFullElem = '';
      main[row][key].hasOwnProperty('en') ? keyFullElem = main[row][key][lang] : keyFullElem = main[row][key];
      if (keyFullElem.isLetter){
        keyFullElem.key.classList.add('keyboard__key_shiftable');
      }
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3)) - 1].insertAdjacentElement('beforeend', keyFullElem.key);

      // Std key listeners
      textarea.addEventListener('keydown', (evt) => {
        if (evt.metaKey || evt.altKey) {
          evt.preventDefault();
          textarea.focus();
        }
      });

      // Main event listeners
      switch (key) {
        case 'keyBackspace': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleBackspaceClick); break;
        case 'keyTab': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleTabClick); break;
        case 'keyDelete': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleDeleteClick); break;
        case 'keyCapsLock': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.keyboardCapsClick); break;
        case 'keyEnter': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleEnterClick); break;
        case 'keyShiftLeft': case 'keyShiftRight': keyFullElem.key.addEventListener('mousedown', _events_js__WEBPACK_IMPORTED_MODULE_3__.keyboardShiftDown); keyFullElem.key.addEventListener('mouseup', _events_js__WEBPACK_IMPORTED_MODULE_3__.keyboardShiftUp); break;
        case 'keyCtrlLeft': keyFullElem.key.addEventListener('mousedown', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleCtrlLeftDown); keyFullElem.key.addEventListener('mouseup', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleCtrlLeftUp); break;
        case 'keyAltLeft': keyFullElem.key.addEventListener('mousedown', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleAltLeftDown); keyFullElem.key.addEventListener('mouseup', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleAltLeftUp); break;
        case 'keyUp': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick); break;
        case 'keyLeft': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick); break;
        case 'keyDown': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick); break;
        case 'keyRight': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick); break;
        case 'keyWin': case 'keyAltRight': case 'keyCtrlRight': keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleEmptyClick); break;
        default: keyFullElem.key.addEventListener('click', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyClick);
      }

      // Special keys styles
      switch (key) {
        case 'keyCapsLock': keyFullElem.key.classList.add('keyboard__key_caps'); break;
        case 'keyShiftLeft': keyFullElem.key.classList.add('keyboard__key_left-shift'); break;
        case 'keyCtrlLeft': keyFullElem.key.classList.add('keyboard__key_left-ctrl'); break;
        case 'keyAltLeft': keyFullElem.key.classList.add('keyboard__key_left-alt'); break;
        case 'keySpace': keyFullElem.key.classList.add('keyboard__key_space'); break;
        case indexes[indexes.length - 1]: keyFullElem.key.classList.add('keyboard__key_last');
      }

      // KeyBoard Highlight Listeners
      textarea.addEventListener('keydown', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyDown);
      textarea.addEventListener('keyup', _events_js__WEBPACK_IMPORTED_MODULE_3__.handleKeyUp);
      textarea.addEventListener('blur', _events_js__WEBPACK_IMPORTED_MODULE_3__.focusLose);
    }
  }
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');

  document.querySelector('.body').insertAdjacentHTML('beforeend', `
    <aside class="legend">
      <p class="legend__desc">Клавиатура создана в Windows OS</p>
      <p class="legend__desc">Для переключения языка нажмите левые <span class="legend__key">Ctrl</span> + <span class="legend__key">Alt</span></p>
      <p class="legend__desc">Клавиатура подсвечивается, если символы раскладок одинаковы. В ином случае считаю это излишним</p>
    </aside>
  `)
});

const updateLangVars = lang => {
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.cookie = `lang=${lang}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
}

/***/ }),

/***/ "./assets/favicon.png":
/*!****************************!*\
  !*** ./assets/favicon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map