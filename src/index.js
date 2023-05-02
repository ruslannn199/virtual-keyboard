import 'normalize.css';
import './assets/styles.scss';
import Keyboard from './classes';

let SELECTION_START;
let SELECTION_END;
let CTRL_FLAG = 0;
let ALT_FLAG = 0;
let CAPS_FLAG = 0;
let SHIFT_FLAG = 0;

// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';

let cookies = decodeURIComponent(document.cookie).split(';');
let lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];
const main = new Keyboard();

// Load
const textarea = document.createElement('textarea');
textarea.classList.add('main__textarea');
textarea.autofocus = true;
textarea.cols = 38;
textarea.rows = 13;
textarea.placeholder = 'Введите текст';

let primaryKeys;
let secondaryKeys;

const updateLangVars = (language) => {
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.cookie = `lang=${language}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
};

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
};

const updateValue = (value) => {
  const text = textarea.value.slice(0, SELECTION_START) + value
    + textarea.value.slice(SELECTION_END);
  return text;
};

const addClasses = (keyArr) => {
  keyArr.forEach((key) => {
    key.classList.add('keyboard__key_primary');
    key.classList.remove('keyboard__key_secondary');
  });
};

const removeClasses = (keyArr) => {
  keyArr.forEach((key) => {
    key.classList.add('keyboard__key_secondary');
    key.classList.remove('keyboard__key_primary');
  });
};

const addClassesToLetters = (keyArr) => {
  keyArr.forEach((key) => {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  });
};

const removeClassesToLetters = (keyArr) => {
  keyArr.forEach((key) => {
    if (key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  });
};

const addClassesToOthers = (keyArr) => {
  keyArr.forEach((key) => {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_primary');
      key.classList.remove('keyboard__key_secondary');
    }
  });
};

const removeClassesToOthers = (keyArr) => {
  keyArr.forEach((key) => {
    if (!key.parentNode.classList.contains('keyboard__key_shiftable')) {
      key.classList.add('keyboard__key_secondary');
      key.classList.remove('keyboard__key_primary');
    }
  });
};

const keyboardCaseSwitch = () => {
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

export const handleKeyClick = (evt) => {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  textarea.focus();
  textarea.setSelectionRange(
    SELECTION_START + 1,
    SELECTION_START === SELECTION_END ? SELECTION_END + 1
      : SELECTION_START + 1,
  );
};

const switchLanguage = () => {
  cookies = decodeURIComponent(document.cookie).split(';');
  const curLang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];
  lang = curLang === 'en' ? 'ru' : 'en';
  const rows = Object.keys(main);
  rows.forEach((row) => {
    const elem = Object.keys(main[row]);
    elem.forEach((key) => {
      if (main[row][key][lang]) {
        const prevText = main[row][key][curLang].primaryElement.innerText;
        const fullElem = main[row][key][lang];
        if (fullElem.isLetter) {
          fullElem.key.classList.add('keyboard__key_shiftable');
        }
        primaryKeys.forEach((prim) => {
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

export const handleBackspaceClick = () => {
  const currentValue = textarea.value;
  updateSelections();
  if (SELECTION_END !== currentValue.length) {
    if (SELECTION_END !== 0) {
      if (SELECTION_START === SELECTION_END) {
        textarea.value = currentValue.slice(0, SELECTION_START - 1)
                       + currentValue.slice(SELECTION_END);
      } else {
        textarea.value = currentValue.slice(0, SELECTION_START)
                       + currentValue.slice(SELECTION_END);
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
  textarea.setSelectionRange(
    SELECTION_START === SELECTION_END ? SELECTION_START - 1
      : SELECTION_START,
    SELECTION_START === SELECTION_END ? SELECTION_START - 1
      : SELECTION_START,
  );
};

const handleDeleteClick = () => {
  const currentValue = textarea.value;
  updateSelections();
  if (SELECTION_START === SELECTION_END) {
    if (SELECTION_END !== currentValue.length) {
      textarea.value = currentValue.slice(0, SELECTION_START)
                     + currentValue.slice(SELECTION_END + 1);
    }
  } else {
    textarea.value = SELECTION_END === currentValue.length ? currentValue.slice(0, SELECTION_START)
      : currentValue.slice(0, SELECTION_START) + currentValue.slice(SELECTION_END);
  }

  textarea.focus();
  textarea.setSelectionRange(SELECTION_START, SELECTION_START);
};

const handleTabClick = () => {
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  textarea.setSelectionRange(
    SELECTION_START + 4,
    SELECTION_START === SELECTION_END ? SELECTION_END + 4
      : SELECTION_START + 4,
  );
};

const handleEnterClick = () => {
  updateSelections();
  textarea.value = updateValue('\n');
  textarea.focus();
  textarea.setSelectionRange(
    SELECTION_START + 1,
    SELECTION_START === SELECTION_END ? SELECTION_END + 1
      : SELECTION_START + 1,
  );
};

const handleKeyArrowClick = (evt) => {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_special').textContent);
  textarea.focus();
  textarea.setSelectionRange(
    SELECTION_START + 1,
    SELECTION_START === SELECTION_END ? SELECTION_END + 1
      : SELECTION_START + 1,
  );
};

const handleEmptyClick = (evt) => {
  evt.preventDefault();
  textarea.focus();
};

const handleKeyDown = (evt) => {
  textarea.focus();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.add('keyboard__key_active');
    return;
  }
  keyArr.forEach((key) => {
    if (evt.key === 'Control' && key.innerText === 'Ctrl') {
      if ((key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft')
        || (!key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight')) {
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
      if ((key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft')
         || (!key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight')) {
        key.parentNode.classList.add('keyboard__key_active');
      }
    } else if (evt.key === 'CapsLock' && key.innerText === 'Caps Lock') {
      key.parentNode.classList.add('keyboard__key_active');
    } else if ((evt.key === 'Alt' || evt.key === 'AltGraph') && key.innerText === 'Alt') {
      if ((key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft')
         || (!key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight')) {
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
      setTimeout(() => {
        key.parentNode.classList.remove('keyboard__key_active');
      }, 500);
    } else if ((evt.key === 'ArrowUp' && key.innerText === '↑')
      || (evt.key === 'ArrowLeft' && key.innerText === '←')
      || (evt.key === 'ArrowDown' && key.innerText === '↓')
      || (evt.key === 'ArrowRight' && key.innerText === '→')) {
      key.parentNode.classList.add('keyboard__key_active');
    } else if ((key.innerText === evt.key || key.innerText === evt.key.toUpperCase())
    || (key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1)) {
      if (SHIFT_FLAG === 1) {
        evt.preventDefault();
        updateSelections();
        textarea.value = updateValue(key.parentNode.querySelector('.keyboard__key_primary').textContent);
      }
      key.parentNode.classList.add('keyboard__key_active');
    }
  });
};

const handleKeyUp = (evt) => {
  textarea.focus();
  if (evt.code === 'Space') {
    document.querySelector('.keyboard__key_space').classList.remove('keyboard__key_active');
    return;
  }
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach((key) => {
    if (evt.key === 'Control' && key.innerText === 'Ctrl') {
      if ((key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlLeft')
         || (!key.parentNode.classList.contains('keyboard__key_left-ctrl') && evt.code === 'ControlRight')) {
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
      if ((key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftLeft')
         || (!key.parentNode.classList.contains('keyboard__key_left-shift') && evt.code === 'ShiftRight')) {
        key.parentNode.classList.remove('keyboard__key_active');
      }
    } else if (evt.key === 'CapsLock' && key.innerText === 'Caps Lock') {
      key.parentNode.classList.remove('keyboard__key_active');
      CAPS_FLAG = CAPS_FLAG === 1 ? 0 : 1;
      keyboardCaseSwitch();
    } else if ((evt.key === 'Alt' || evt.key === 'AltGraph') && key.innerText === 'Alt') {
      if ((key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltLeft')
         || (!key.parentNode.classList.contains('keyboard__key_left-alt') && evt.code === 'AltRight')) {
        key.parentNode.classList.remove('keyboard__key_active');
        if (evt.code === 'AltLeft') {
          if (CTRL_FLAG === 1) {
            switchLanguage();
          }
          ALT_FLAG = 0;
        }
      }
    } else if ((evt.key === 'Delete' && key.innerText === 'Del')
    || (evt.key === 'ArrowUp' && key.innerText === '↑')
    || (evt.key === 'ArrowLeft' && key.innerText === '←')
    || (evt.key === 'ArrowDown' && key.innerText === '↓')
    || (evt.key === 'ArrowRight' && key.innerText === '→')) {
      key.parentNode.classList.remove('keyboard__key_active');
    } else if ((key.innerText === evt.key || key.innerText === evt.key.toUpperCase())
    || (key.parentNode.querySelector('.keyboard__key_secondary') && key.parentNode.querySelector('.keyboard__key_secondary').textContent === evt.key && SHIFT_FLAG === 1)) {
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
};

const handleCtrlLeftDown = () => {
  CTRL_FLAG = 1;
  if (ALT_FLAG === 1) {
    switchLanguage();
  }
};

const handleCtrlLeftUp = () => {
  CTRL_FLAG = 0;
};

const handleAltLeftDown = () => {
  ALT_FLAG = 1;
  if (CTRL_FLAG === 1) {
    switchLanguage();
  }
};

const handleAltLeftUp = () => {
  ALT_FLAG = 0;
};

const keyboardCapsClick = () => {
  CAPS_FLAG = CAPS_FLAG === 1 ? 0 : 1;
  keyboardCaseSwitch();
};

const keyboardShiftDown = () => {
  SHIFT_FLAG = 1;
  keyboardCaseSwitch();
};

const keyboardShiftUp = () => {
  SHIFT_FLAG = 0;
  keyboardCaseSwitch();
};

const focusLose = () => {
  CTRL_FLAG = 0;
  ALT_FLAG = 0;
  keyboardCaseSwitch();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach((key) => {
    if (key.parentNode.classList.contains('keyboard__key_active') && key.innerText !== 'Tab') {
      key.parentNode.classList.remove('keyboard__key_active');
    }
  });
};

window.addEventListener('load', () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <main class="main">
      <h1 class="main__heading">
        RSS Виртуальная клавиатура
      </h1>
    </main>
  `);
  document.querySelector('.main').insertAdjacentElement('beforeend', textarea);
  document.querySelector('.main').insertAdjacentHTML('beforeend', `
      <div class="keyboard">
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
        <div class="keyboard__row"></div>
      </div>
  `);
  const rows = Object.keys(main);
  rows.forEach((row) => {
    const elem = Object.keys(main[row]);
    elem.forEach((key) => {
      const fullElem = main[row][key][lang] ? main[row][key][lang]
        : main[row][key];
      if (fullElem.isLetter) {
        fullElem.key.classList.add('keyboard__key_shiftable');
      }
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3), 10) - 1].insertAdjacentElement('beforeend', fullElem.key);

      // Std key listeners
      textarea.addEventListener('keydown', (evt) => {
        if (evt.metaKey || evt.altKey) {
          evt.preventDefault();
          textarea.focus();
        }
      });

      // Main event listeners
      switch (key) {
        case 'keyBackspace': fullElem.key.addEventListener('click', handleBackspaceClick); break;
        case 'keyTab': fullElem.key.addEventListener('click', handleTabClick); break;
        case 'keyDelete': fullElem.key.addEventListener('click', handleDeleteClick); break;
        case 'keyCapsLock': fullElem.key.addEventListener('click', keyboardCapsClick); break;
        case 'keyEnter': fullElem.key.addEventListener('click', handleEnterClick); break;
        case 'keyShiftLeft': case 'keyShiftRight': fullElem.key.addEventListener('mousedown', keyboardShiftDown); fullElem.key.addEventListener('mouseup', keyboardShiftUp); break;
        case 'keyCtrlLeft': fullElem.key.addEventListener('mousedown', handleCtrlLeftDown); fullElem.key.addEventListener('mouseup', handleCtrlLeftUp); break;
        case 'keyAltLeft': fullElem.key.addEventListener('mousedown', handleAltLeftDown); fullElem.key.addEventListener('mouseup', handleAltLeftUp); break;
        case 'keyUp': fullElem.key.addEventListener('click', handleKeyArrowClick); break;
        case 'keyLeft': fullElem.key.addEventListener('click', handleKeyArrowClick); break;
        case 'keyDown': fullElem.key.addEventListener('click', handleKeyArrowClick); break;
        case 'keyRight': fullElem.key.addEventListener('click', handleKeyArrowClick); break;
        case 'keyWin': case 'keyAltRight': case 'keyCtrlRight': fullElem.key.addEventListener('click', handleEmptyClick); break;
        default: fullElem.key.addEventListener('click', handleKeyClick);
      }

      // Special keys styles
      switch (key) {
        case 'keyCapsLock': fullElem.key.classList.add('keyboard__key_caps'); break;
        case 'keyShiftLeft': fullElem.key.classList.add('keyboard__key_left-shift'); break;
        case 'keyCtrlLeft': fullElem.key.classList.add('keyboard__key_left-ctrl'); break;
        case 'keyAltLeft': fullElem.key.classList.add('keyboard__key_left-alt'); break;
        case 'keySpace': fullElem.key.classList.add('keyboard__key_space'); break;
        case elem[elem.length - 1]: fullElem.key.classList.add('keyboard__key_last'); break;
        default: document.body.classList.add('body');
      }

      // KeyBoard Highlight Listeners
      textarea.addEventListener('keydown', handleKeyDown);
      textarea.addEventListener('keyup', handleKeyUp);
      textarea.addEventListener('blur', focusLose);
    });
  });

  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');

  document.body.insertAdjacentHTML('beforeend', `
    <aside class="legend">
      <p class="legend__desc">Клавиатура создана в Windows OS</p>
      <p class="legend__desc">Для переключения языка нажмите левые <span class="legend__key">Ctrl</span> + <span class="legend__key">Alt</span></p>
      <p class="legend__desc">Клавиатура подсвечивается, если символы раскладок одинаковы. В ином случае считаю это излишним</p>
      <p class="legend__desc">Для проверки через eslint проверять следует файлы в ветке development, а не здесь</p>
    </aside>
  `);
});
