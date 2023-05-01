import 'normalize.css';
import favIcon from './assets/favicon.png';
import { keyboard } from './classes.js';
import * as events from './events.js';
import './assets/styles.scss';

// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';

const cookies = decodeURIComponent(document.cookie).split(';');
let lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];

// Load
export let textarea;
export let primaryKeys;
export let secondaryKeys;

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

  const main = new keyboard();
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
        case 'keyBackspace': keyFullElem.key.addEventListener('click', events.handleBackspaceClick); break;
        case 'keyTab': keyFullElem.key.addEventListener('click', events.handleTabClick); break;
        case 'keyDelete': keyFullElem.key.addEventListener('click', events.handleDeleteClick); break;
        case 'keyCapsLock': keyFullElem.key.addEventListener('click', events.keyboardCapsClick); break;
        case 'keyEnter': keyFullElem.key.addEventListener('click', events.handleEnterClick); break;
        case 'keyShiftLeft': case 'keyShiftRight': keyFullElem.key.addEventListener('mousedown', events.keyboardShiftDown); keyFullElem.key.addEventListener('mouseup', events.keyboardShiftUp); break;
        case 'keyCtrlLeft': keyFullElem.key.addEventListener('mousedown', events.handleCtrlLeftDown); keyFullElem.key.addEventListener('mouseup', events.handleCtrlLeftUp); break;
        case 'keyAltLeft': keyFullElem.key.addEventListener('mousedown', events.handleAltLeftDown); keyFullElem.key.addEventListener('mouseup', events.handleAltLeftUp); break;
        case 'keyUp': keyFullElem.key.addEventListener('click', events.handleKeyArrowClick); break;
        case 'keyLeft': keyFullElem.key.addEventListener('click', events.handleKeyArrowClick); break;
        case 'keyDown': keyFullElem.key.addEventListener('click', events.handleKeyArrowClick); break;
        case 'keyRight': keyFullElem.key.addEventListener('click', events.handleKeyArrowClick); break;
        case 'keyWin': case 'keyAltRight': case 'keyCtrlRight': keyFullElem.key.addEventListener('click', events.handleEmptyClick); break;
        default: keyFullElem.key.addEventListener('click', events.handleKeyClick);
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
      textarea.addEventListener('keydown', events.handleKeyDown);
      textarea.addEventListener('keyup', events.handleKeyUp);
      textarea.addEventListener('blur', events.focusLose);
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

export const updateLangVars = lang => {
  primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  document.cookie = `lang=${lang}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
}