import { textarea, primaryKeys, secondaryKeys, updateLangVars } from "./index.js";
import { keyboard } from './classes.js';

let SELECTION_START;
let SELECTION_END;
let CTRL_FLAG = 0;
let ALT_FLAG = 0;
let CAPS_FLAG = 0;
let SHIFT_FLAG = 0;

// TODO Нажатие на CAPS и SHIFT на клаве работает аналогично нажатию на клаве

// TODO Key, Tab, Enter добавить функцию по правильному изменению во время выделения (SELECTION_START != SELECTION_END)

// TODO Изменить стрелку вверх и вниз в начало и конце строки
export const handleKeyClick = evt => {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1);
}

export const handleBackspaceClick = () => {
  const currentValue = textarea.value;
  updateSelections();
  if (SELECTION_END !== currentValue.length) {
    if (SELECTION_END !== 0)
      SELECTION_START === SELECTION_END ? textarea.value = currentValue.slice(0, SELECTION_START - 1) + currentValue.slice(SELECTION_END) : textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
    else
      SELECTION_START = 1, SELECTION_END = 1;
  }
  else {
    if (SELECTION_END === SELECTION_START) textarea.value = currentValue.slice(0, -1);
    else textarea.value = currentValue.slice(0, SELECTION_START);
  }

  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START - 1, SELECTION_START - 1) : textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

export const handleDeleteClick = () => {
  const currentValue = textarea.value;
  updateSelections();
  if (SELECTION_START === SELECTION_END) {
    if (SELECTION_END !== currentValue.length) textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END + 1);
  }
  else {
    SELECTION_END === currentValue.length ? textarea.value = currentValue.slice(0, SELECTION_START) : textarea.value = currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
  }

  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START, SELECTION_START) : textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

// TODO TabClick при полной строке
export const handleTabClick = () => {
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4);
}

export const handleEnterClick = () => {
  updateSelections();
  textarea.value = updateValue('\n');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1);
}
export const handleKeyUpClick = () => {
  updateSelections();
  const rowStart = textarea.value.lastIndexOf('\n', SELECTION_START) + 1;
  const rowLength = SELECTION_START - rowStart;
  let prevRowStart = textarea.value.lastIndexOf('\n', rowStart - 2) + 1;
  const prevRowLength = rowStart - prevRowStart - 1;

  // console.log('Row Start: ' + rowStart, '\nRow Length: ' + rowLength, '\nPrev Row Start: ' + prevRowStart, '\nPrev Row Length: ' + prevRowLength);

  textarea.focus();
  if (rowStart === 0) return;
  rowLength < prevRowLength ? textarea.setSelectionRange(prevRowStart + rowLength, prevRowStart + rowLength) : textarea.setSelectionRange(rowStart - 1, rowStart - 1);
}

export const handleKeyDownClick = () => {
  updateSelections();
  let rowStart;
  const rowEnd = textarea.value.indexOf('\n', SELECTION_END);
  textarea.value.lastIndexOf('\n', SELECTION_END) === rowEnd ? rowStart = textarea.value.lastIndexOf('\n', SELECTION_END - 1) + 1 : rowStart = textarea.value.lastIndexOf('\n', SELECTION_END) + 1;
  if (rowEnd === -1) {
    textarea.focus();
    return;
  }
  const rowLength = SELECTION_END - rowStart;
  let nextRowEnd = textarea.value.indexOf('\n', rowEnd + 1);
  let nextRowLength;
  if (nextRowEnd === -1) {
    nextRowEnd = textarea.value.length;
  } 
  nextRowLength = nextRowEnd - rowEnd - 1;

  textarea.focus();
  rowLength <= nextRowLength ? textarea.setSelectionRange(rowEnd + rowLength + 1, rowEnd + rowLength + 1) : textarea.setSelectionRange(nextRowEnd, nextRowEnd);
}

export const handleKeyLeftClick = () => {
  updateSelections();
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START - 1, SELECTION_START - 1) : textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

export const handleKeyRightClick = () => {
  updateSelections();
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1) : textarea.setSelectionRange(SELECTION_END, SELECTION_END);
}

export const handleEmptyClick = evt => {
  evt.preventDefault();
  textarea.focus();
}

export const handleCtrlLeftDown = () => {
  CTRL_FLAG = 1;
  console.log('CTRL FLAG: ' + CTRL_FLAG);
}

export const handleCtrlLeftUp = () => {
  CTRL_FLAG = 0;
  console.log('CTRL FLAG: ' + CTRL_FLAG);
}

export const handleAltLeftDown = () => {
  ALT_FLAG = 1;
  console.log('ALT FLAG: ' + ALT_FLAG);
}

export const handleAltLeftUp = () => {
  ALT_FLAG = 0;
  console.log('ALT FLAG: ' + ALT_FLAG);
}

export const handleKeyDown = evt => {
  textarea.focus();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  console.log(evt.key, evt.code);
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.add('keyboard__key_active'); return;
  }
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': {
        if (key.innerText === 'Ctrl') {
          if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
              key.parentNode.classList.add('keyboard__key_active');
              if (evt.code === 'ControlLeft') {
                CTRL_FLAG = 1;
                console.log('CTRL FLAG: ' + CTRL_FLAG);
              }
          }
        }
      }; break;
      case 'Meta': if (key.innerText === 'Win') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'Shift': {
        if (key.innerText === 'Shift') {
          SHIFT_FLAG = 1;
          keyboardCaseSwitch();
          if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
              key.parentNode.classList.add('keyboard__key_active');
          };
        };
      }; break;
      case 'CapsLock': if (key.innerText === 'Caps Lock') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'Alt': case 'AltGraph': {
        if (key.innerText === 'Alt') {
          if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
              key.parentNode.classList.add('keyboard__key_active');
              if (evt.code === 'AltLeft') {
                ALT_FLAG = 1;
                console.log('ALT FLAG: ' + ALT_FLAG);
              }
          }
        }
      }; break;
      case 'Delete': if (key.innerText === 'Del') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'Tab': {
        if (key.innerText === 'Tab') {
          handleTabClick();
          key.parentNode.classList.add('keyboard__key_active');
          setTimeout(() => {
            key.parentNode.classList.remove('keyboard__key_active');
          }, 500);
        }
      }; break;
      case 'ArrowUp': if (key.innerText === '↑') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'ArrowLeft': if (key.innerText === '←') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'ArrowDown': if (key.innerText === '↓') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'ArrowRight': if (key.innerText === '→') key.parentNode.classList.add('keyboard__key_active'); break;
      default: if (key.innerText === evt.key) key.parentNode.classList.add('keyboard__key_active');
    }
  });
}

export const handleKeyUp = evt => {
  textarea.focus();
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.remove('keyboard__key_active'); return;
  }
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': {
        if (key.innerText === 'Ctrl') {
          if (key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight') {
              key.parentNode.classList.remove('keyboard__key_active');
              if (evt.code === 'ControlLeft') {
                if (ALT_FLAG === 1) {
                  switchLanguage();
                }
                CTRL_FLAG = 0;
                console.log('CTRL FLAG: ' + CTRL_FLAG);
              }
          }
        }
      }; break;
      case 'Meta': if (key.innerText === 'Win') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'Shift': {
        if (key.innerText === 'Shift') {
          SHIFT_FLAG = 0;
          keyboardCaseSwitch();
          if (key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight') {
              key.parentNode.classList.remove('keyboard__key_active');
          }
        }
      }; break;
      case 'CapsLock': {
        if (key.innerText === 'Caps Lock') {
          key.parentNode.classList.remove('keyboard__key_active');
          CAPS_FLAG === 0 ? CAPS_FLAG = 1 : CAPS_FLAG = 0;
          keyboardCaseSwitch();
        }
      }; break;
      case 'Alt': case 'AltGraph': {
        if (key.innerText === 'Alt') {
          if (key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft' ||
             !key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight') {
              key.parentNode.classList.remove('keyboard__key_active');
              if (evt.code === 'AltLeft') {
                if (CTRL_FLAG === 1) {
                  switchLanguage();
                }
                ALT_FLAG = 0;
                console.log('ALT FLAG: ' + ALT_FLAG);
              }
          }
        }
      }; break;
      case 'Delete': if (key.innerText === 'Del') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'ArrowUp': if (key.innerText === '↑') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'ArrowLeft': if (key.innerText === '←') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'ArrowDown': if (key.innerText === '↓') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'ArrowRight': if (key.innerText === '→') key.parentNode.classList.remove('keyboard__key_active'); break;
      default: if (key.innerText === evt.key) key.parentNode.classList.remove('keyboard__key_active');
    }
  });
}

export const keyboardCapsClick = () => {
  CAPS_FLAG === 1 ? CAPS_FLAG = 0 : CAPS_FLAG = 1;
  keyboardCaseSwitch();
}

export const keyboardShiftDown = () => {
  SHIFT_FLAG = 1;
  keyboardCaseSwitch();
}

export const keyboardShiftUp = () => {
  SHIFT_FLAG = 0;
  keyboardCaseSwitch();
}

export const focusLose = () => {
  CTRL_FLAG, ALT_FLAG, SHIFT_FLAG = 0;
  keyboardCaseSwitch();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(key => {
    if (key.parentNode.classList.contains('keyboard__key_active') && key.innerText !== 'Tab') {
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
}

const switchLanguage = () => {
  const newKeyboard = new keyboard();
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
        primaryKeys.forEach(prim => {
          if (prim.innerText === prevText) {
            keyFullElem.key.addEventListener('click', handleKeyClick);
            prim.parentNode.replaceWith(keyFullElem.key);
          }
        })
      }
    }
  }
  updateLangVars(lang);
  if (CAPS_FLAG === 1) {
    removeClasses(primaryKeys);
    addClasses(secondaryKeys);
  }
}

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
}

const updateValue = value => {
  return textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
}

const keyboardCaseSwitch = () => {
  textarea.focus();
  if (SHIFT_FLAG !== CAPS_FLAG) {
    removeClasses(primaryKeys);
    addClasses(secondaryKeys);
  }
  else {
    addClasses(primaryKeys);
    removeClasses(secondaryKeys);
  }
}

const addClasses = keyArr => {
  keyArr.forEach(key => {
    key.classList.add('keyboard__key_primary');
    key.classList.remove('keyboard__key_secondary');
  })
}

const removeClasses = keyArr => {
  keyArr.forEach(key => {
    key.classList.remove('keyboard__key_primary');
    key.classList.add('keyboard__key_secondary');
  })
}