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
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "key": () => (/* binding */ key),
/* harmony export */   "specialKey": () => (/* binding */ specialKey)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;
var Keyboard = /*#__PURE__*/_createClass(function Keyboard() {
  _classCallCheck(this, Keyboard);
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
});
var key = /*#__PURE__*/function () {
  function key(primaryChar, secondaryChar) {
    _classCallCheck(this, key);
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
  _createClass(key, [{
    key: "createEmptyKey",
    value: function createEmptyKey() {
      var emptyKey = document.createElement('span');
      emptyKey.classList.add('keyboard__key');
      return emptyKey;
    }
  }]);
  return key;
}();
var specialKey = /*#__PURE__*/function () {
  function specialKey(special) {
    _classCallCheck(this, specialKey);
    this.key = this.createEmptyKey();
    this.specialElement = document.createElement('span');
    this.specialElement.classList.add('keyboard__key_special');
    this.specialElement.textContent = special;
    this.key.append(this.specialElement);
  }
  _createClass(specialKey, [{
    key: "createEmptyKey",
    value: function createEmptyKey() {
      var emptyKey = document.createElement('span');
      emptyKey.classList.add('keyboard__key');
      return emptyKey;
    }
  }]);
  return specialKey;
}();

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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./classes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var SELECTION_START;
var SELECTION_END;
var CTRL_FLAG = 0;
var ALT_FLAG = 0;
var CAPS_FLAG = 0;
var SHIFT_FLAG = 0;

// let primaryKeys;
// let secondaryKeys;

var handleKeyClick = function handleKeyClick(evt) {
  randomColor(evt.currentTarget);
  timeout(evt.currentTarget);
  updateSelections();
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
};
var handleBackspaceClick = function handleBackspaceClick() {
  var currentValue = _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value;
  updateSelections();
  if (SELECTION_END !== currentValue.length) {
    if (SELECTION_END !== 0) SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START - 1) + currentValue.slice(SELECTION_END) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);else SELECTION_START = 1, SELECTION_END = 1;
  } else {
    if (SELECTION_END === SELECTION_START) _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, -1);else _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START);
  }
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START - 1, SELECTION_START - 1) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START);
};
var handleDeleteClick = function handleDeleteClick() {
  var currentValue = _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value;
  updateSelections();
  if (SELECTION_START === SELECTION_END) {
    if (SELECTION_END !== currentValue.length) _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END + 1);
  } else {
    SELECTION_END === currentValue.length ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
  }
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START, SELECTION_START);
};
var handleTabClick = function handleTabClick() {
  updateSelections();
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue('    ');
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 4, SELECTION_START + 4);
};
var handleEnterClick = function handleEnterClick() {
  updateSelections();
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue('\n');
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
};
var handleKeyArrowClick = function handleKeyArrowClick(evt) {
  updateSelections();
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_special').textContent);
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  SELECTION_START === SELECTION_END ? _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : _index__WEBPACK_IMPORTED_MODULE_0__.textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
};
var handleEmptyClick = function handleEmptyClick(evt) {
  evt.preventDefault();
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
};
var handleKeyDown = function handleKeyDown(evt) {
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  if (evt.code === 'Space') {
    randomColor(document.querySelector('.keyboard__key_space').parentNode);
    document.querySelector('.keyboard__key_space').classList.add('keyboard__key_active');
    return;
  }
  keyArr.forEach(function (key) {
    switch (evt.key) {
      case 'Control':
        {
          if (key.innerText === 'Ctrl') {
            if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' || !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
              key.parentNode.classList.add('keyboard__key_active');
              randomColor(key.parentNode);
              if (evt.code === 'ControlLeft') {
                CTRL_FLAG = 1;
              }
            }
          }
        }
        ;
        break;
      case 'Meta':
        if (key.innerText === 'Win') key.parentNode.classList.add('keyboard__key_active');
        randomColor(key.parentNode);
        break;
      case 'Shift':
        {
          if (key.innerText === 'Shift') {
            SHIFT_FLAG = 1;
            keyboardCaseSwitch();
            if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' || !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
              randomColor(key.parentNode);
              key.parentNode.classList.add('keyboard__key_active');
            }
            ;
          }
          ;
        }
        ;
        break;
      case 'CapsLock':
        if (key.innerText === 'Caps Lock') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      case 'Alt':
      case 'AltGraph':
        {
          if (key.innerText === 'Alt') {
            if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' || !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
              key.parentNode.classList.add('keyboard__key_active');
              randomColor(key.parentNode);
              if (evt.code === 'AltLeft') {
                ALT_FLAG = 1;
              }
            }
          }
        }
        ;
        break;
      case 'Delete':
        if (key.innerText === 'Del') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      case 'Tab':
        {
          if (key.innerText === 'Tab') {
            handleTabClick();
            key.parentNode.classList.add('keyboard__key_active');
            randomColor(key.parentNode);
            setTimeout(function () {
              key.parentNode.style.borderColor = '';
              key.parentNode.classList.remove('keyboard__key_active');
            }, 500);
          }
        }
        ;
        break;
      case 'ArrowUp':
        if (key.innerText === '↑') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      case 'ArrowLeft':
        if (key.innerText === '←') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      case 'ArrowDown':
        if (key.innerText === '↓') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      case 'ArrowRight':
        if (key.innerText === '→') {
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
        ;
        break;
      default:
        if (key.innerText === evt.key || key.innerText === evt.key.toUpperCase() || key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1) {
          if (SHIFT_FLAG === 1) {
            evt.preventDefault();
            updateSelections();
            _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value = updateValue(key.parentNode.querySelector('.keyboard__key_primary').textContent);
          }
          key.parentNode.classList.add('keyboard__key_active');
          randomColor(key.parentNode);
        }
    }
  });
};
var handleKeyUp = function handleKeyUp(evt) {
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').parentNode.style.borderColor = '';
    document.querySelector('.keyboard__key_space').classList.remove('keyboard__key_active');
    return;
  }
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(function (key) {
    switch (evt.key) {
      case 'Control':
        {
          if (key.innerText === 'Ctrl') {
            if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' || !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
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
        }
        ;
        break;
      case 'Meta':
        if (key.innerText === 'Win') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      case 'Shift':
        {
          if (key.innerText === 'Shift') {
            SHIFT_FLAG = 0;
            keyboardCaseSwitch();
            if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' || !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
              key.parentNode.style.borderColor = '';
              key.parentNode.classList.remove('keyboard__key_active');
            }
          }
        }
        ;
        break;
      case 'CapsLock':
        {
          if (key.innerText === 'Caps Lock') {
            key.parentNode.style.borderColor = '';
            key.parentNode.classList.remove('keyboard__key_active');
            CAPS_FLAG === 0 ? CAPS_FLAG = 1 : CAPS_FLAG = 0;
            keyboardCaseSwitch();
          }
        }
        ;
        break;
      case 'Alt':
      case 'AltGraph':
        {
          if (key.innerText === 'Alt') {
            if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' || !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
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
        }
        ;
        break;
      case 'Delete':
        if (key.innerText === 'Del') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      case 'ArrowUp':
        if (key.innerText === '↑') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      case 'ArrowLeft':
        if (key.innerText === '←') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      case 'ArrowDown':
        if (key.innerText === '↓') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      case 'ArrowRight':
        if (key.innerText === '→') {
          key.parentNode.classList.remove('keyboard__key_active');
          key.parentNode.style.borderColor = '';
        }
        ;
        break;
      default:
        if (key.innerText === evt.key || key.innerText === evt.key.toUpperCase() || key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1) {
          key.parentNode.style.borderColor = '';
          key.parentNode.classList.remove('keyboard__key_active');
        }
        ;
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
  CAPS_FLAG === 1 ? CAPS_FLAG = 0 : CAPS_FLAG = 1;
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
  CTRL_FLAG, ALT_FLAG = 0;
  keyboardCaseSwitch();
  var keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(function (key) {
    if (key.parentNode.classList.contains('keyboard__key_active') && key.innerText !== 'Tab') {
      key.parentNode.style.borderColor = '';
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
};
var switchLanguage = function switchLanguage() {
  var newKeyboard = new _classes__WEBPACK_IMPORTED_MODULE_1__.Keyboard();
  var cookies = decodeURIComponent(document.cookie).split(';');
  var curLang = cookies.find(function (cookie) {
    return cookie.includes('lang=');
  }).split('=')[1];
  var lang;
  curLang === 'en' ? lang = 'ru' : lang = 'en';
  for (var row in newKeyboard) {
    var _loop = function _loop() {
      if (newKeyboard[row][key].hasOwnProperty(lang)) {
        var keyFullElem = newKeyboard[row][key];
        var prevText = keyFullElem[curLang].primaryElement.innerText;
        keyFullElem = keyFullElem[lang];
        if (keyFullElem.isLetter) {
          keyFullElem.key.classList.add('keyboard__key_shiftable');
        }
        _index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys.forEach(function (prim) {
          if (prim.innerText === prevText) {
            keyFullElem.key.addEventListener('click', handleKeyClick);
            prim.parentNode.replaceWith(keyFullElem.key);
          }
        });
      }
    };
    for (var key in newKeyboard[row]) {
      _loop();
    }
  }
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateLangVars)(lang);
  if (CAPS_FLAG === 1) {
    removeClasses(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    addClasses(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
  }
};
var keyboardCaseSwitch = function keyboardCaseSwitch() {
  _index__WEBPACK_IMPORTED_MODULE_0__.textarea.focus();
  if (SHIFT_FLAG === 0) {
    if (CAPS_FLAG === 0) {
      addClasses(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClasses(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
    } else {
      addClassesToLetters(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClassesToLetters(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      addClassesToOthers(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClassesToOthers(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
    }
  } else {
    if (CAPS_FLAG === 0) {
      addClasses(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClasses(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    } else {
      addClassesToLetters(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
      removeClassesToLetters(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      addClassesToOthers(_index__WEBPACK_IMPORTED_MODULE_0__.secondaryKeys);
      removeClassesToOthers(_index__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
    }
  }
};
var updateSelections = function updateSelections() {
  SELECTION_START = _index__WEBPACK_IMPORTED_MODULE_0__.textarea.selectionStart;
  SELECTION_END = _index__WEBPACK_IMPORTED_MODULE_0__.textarea.selectionEnd;
};
var updateValue = function updateValue(value) {
  return _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value.slice(0, SELECTION_START) + value + _index__WEBPACK_IMPORTED_MODULE_0__.textarea.value.slice(SELECTION_END);
};
var addClasses = function addClasses(keyArr) {
  keyArr.forEach(function (key) {
    key.classList.add('keyboard__key_primary');
    key.classList.remove('keyboard__key_secondary');
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {}
  });
};
var removeClasses = function removeClasses(keyArr) {
  keyArr.forEach(function (key) {
    key.classList.add('keyboard__key_secondary');
    key.classList.remove('keyboard__key_primary');
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {}
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
var randomColor = function randomColor(target) {
  var colors = ["#9CCFB0", "white", "#BC8F89", "#675E91", "blue", "indigo", "violet"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  target.style.borderColor = colors[randomIndex];
};
var timeout = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(target) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              target.style.borderColor = '';
              resolve();
            }, 500);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function timeout(_x) {
    return _ref.apply(this, arguments);
  };
}();

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
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./assets/styles.scss");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./classes.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./events.js");





// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';
var cookies = decodeURIComponent(document.cookie).split(';');
var lang = cookies.find(function (cookie) {
  return cookie.includes('lang=');
}).split('=')[1];

// Load
var textarea = document.createElement('textarea');
textarea.classList.add('main__textarea');
textarea.autofocus = true;
textarea.cols = 38;
textarea.rows = 13;
textarea.placeholder = 'Введите текст';
var primaryKeys;
var secondaryKeys;
window.addEventListener('load', function () {
  document.body.insertAdjacentHTML('afterbegin', "\n    <main class=\"main\">\n      <h1 class=\"main__heading\">\n        RSS \u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430\n      </h1>\n    </main>\n  ");
  document.querySelector('.main').insertAdjacentElement('beforeend', textarea);
  document.querySelector('.main').insertAdjacentHTML('beforeend', "\n      <div class=\"keyboard\">\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n        <div class=\"keyboard__row\"></div>\n      </div>\n  ");
  var main = new _classes__WEBPACK_IMPORTED_MODULE_2__.Keyboard();
  for (var row in main) {
    for (var key in main[row]) {
      var indexes = Object.keys(main[row]);
      var keyFullElem = '';
      main[row][key].hasOwnProperty('en') ? keyFullElem = main[row][key][lang] : keyFullElem = main[row][key];
      if (keyFullElem.isLetter) {
        keyFullElem.key.classList.add('keyboard__key_shiftable');
      }
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3), 10) - 1].insertAdjacentElement('beforeend', keyFullElem.key);

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
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleBackspaceClick);
          break;
        case 'keyTab':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleTabClick);
          break;
        case 'keyDelete':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleDeleteClick);
          break;
        case 'keyCapsLock':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.keyboardCapsClick);
          break;
        case 'keyEnter':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleEnterClick);
          break;
        case 'keyShiftLeft':
        case 'keyShiftRight':
          keyFullElem.key.addEventListener('mousedown', _events__WEBPACK_IMPORTED_MODULE_3__.keyboardShiftDown);
          keyFullElem.key.addEventListener('mouseup', _events__WEBPACK_IMPORTED_MODULE_3__.keyboardShiftUp);
          break;
        case 'keyCtrlLeft':
          keyFullElem.key.addEventListener('mousedown', _events__WEBPACK_IMPORTED_MODULE_3__.handleCtrlLeftDown);
          keyFullElem.key.addEventListener('mouseup', _events__WEBPACK_IMPORTED_MODULE_3__.handleCtrlLeftUp);
          break;
        case 'keyAltLeft':
          keyFullElem.key.addEventListener('mousedown', _events__WEBPACK_IMPORTED_MODULE_3__.handleAltLeftDown);
          keyFullElem.key.addEventListener('mouseup', _events__WEBPACK_IMPORTED_MODULE_3__.handleAltLeftUp);
          break;
        case 'keyUp':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick);
          break;
        case 'keyLeft':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick);
          break;
        case 'keyDown':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick);
          break;
        case 'keyRight':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyArrowClick);
          break;
        case 'keyWin':
        case 'keyAltRight':
        case 'keyCtrlRight':
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleEmptyClick);
          break;
        default:
          keyFullElem.key.addEventListener('click', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyClick);
      }

      // Special keys styles
      switch (key) {
        case 'keyCapsLock':
          keyFullElem.key.classList.add('keyboard__key_caps');
          break;
        case 'keyShiftLeft':
          keyFullElem.key.classList.add('keyboard__key_left-shift');
          break;
        case 'keyCtrlLeft':
          keyFullElem.key.classList.add('keyboard__key_left-ctrl');
          break;
        case 'keyAltLeft':
          keyFullElem.key.classList.add('keyboard__key_left-alt');
          break;
        case 'keySpace':
          keyFullElem.key.classList.add('keyboard__key_space');
          break;
        case indexes[indexes.length - 1]:
          keyFullElem.key.classList.add('keyboard__key_last');
          break;
        default:
          document.body.classList.add('body');
      }

      // KeyBoard Highlight Listeners
      textarea.addEventListener('keydown', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyDown);
      textarea.addEventListener('keyup', _events__WEBPACK_IMPORTED_MODULE_3__.handleKeyUp);
      textarea.addEventListener('blur', _events__WEBPACK_IMPORTED_MODULE_3__.focusLose);
    }
  }
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.body.insertAdjacentHTML('beforeend', "\n    <aside class=\"legend\">\n      <p class=\"legend__desc\">\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 Windows OS</p>\n      <p class=\"legend__desc\">\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u0435\u0432\u044B\u0435 <span class=\"legend__key\">Ctrl</span> + <span class=\"legend__key\">Alt</span></p>\n      <p class=\"legend__desc\">\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043E\u043A \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B. \u0412 \u0438\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0447\u0438\u0442\u0430\u044E \u044D\u0442\u043E \u0438\u0437\u043B\u0438\u0448\u043D\u0438\u043C</p>\n    </aside>\n  ");
});
var updateLangVars = function updateLangVars(language) {
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.cookie = "lang=".concat(language, "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/");
};

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map