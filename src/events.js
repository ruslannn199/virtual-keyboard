import { textarea, primaryKeys, secondaryKeys, updateLangVars } from "./index";
import { Keyboard } from "./classes";

let SELECTION_START;
let SELECTION_END;
let CTRL_FLAG = 0;
let ALT_FLAG = 0;
let CAPS_FLAG = 0;
let SHIFT_FLAG = 0;

// let primaryKeys;
// let secondaryKeys;

export const handleKeyClick = evt => {
  randomColor(evt.currentTarget); 
  timeout(evt.currentTarget);
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
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

export const handleTabClick = () => {
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4) : textarea.setSelectionRange(SELECTION_START + 4, SELECTION_START + 4);
}

export const handleEnterClick = () => {
  updateSelections();
  textarea.value = updateValue('\n');
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
}

export const handleKeyArrowClick = evt => {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_special').textContent);
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1) : textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1);
}

export const handleEmptyClick = evt => {
  evt.preventDefault();
  textarea.focus();
}

export const handleKeyDown = evt => {
  textarea.focus();
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
          textarea.value = updateValue(key.parentNode.querySelector('.keyboard__key_primary').textContent);
        }
        key.parentNode.classList.add('keyboard__key_active');
        randomColor(key.parentNode);
      }
    }
  });
}

export const handleKeyUp = evt => {
  textarea.focus();
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

export const handleCtrlLeftDown = () => {
  CTRL_FLAG = 1;
  if (ALT_FLAG === 1) {
    switchLanguage();
  }
}

export const handleCtrlLeftUp = () => {
  CTRL_FLAG = 0;
}

export const handleAltLeftDown = () => {
  ALT_FLAG = 1;
  if (CTRL_FLAG === 1) {
    switchLanguage();
  }
}

export const handleAltLeftUp = () => {
  ALT_FLAG = 0;
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
  const newKeyboard = new Keyboard();
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

const keyboardCaseSwitch = () => {
  textarea.focus();
  if (SHIFT_FLAG === 0) {
    if (CAPS_FLAG === 0) {
      addClasses(primaryKeys);
      removeClasses(secondaryKeys);
    }
    else {
      addClassesToLetters(secondaryKeys);
      removeClassesToLetters(primaryKeys);
      addClassesToOthers(primaryKeys);
      removeClassesToOthers(secondaryKeys);
    }
  }
  else {
    if (CAPS_FLAG === 0) {
      addClasses(secondaryKeys);
      removeClasses(primaryKeys);
    }
    else {
      addClassesToLetters(primaryKeys);
      removeClassesToLetters(secondaryKeys);
      addClassesToOthers(secondaryKeys);
      removeClassesToOthers(primaryKeys);
    }
  }
}

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
}

const updateValue = value => {
  return textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
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