/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
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
/******/ })()
;
//# sourceMappingURL=classes.js.map