import 'normalize.css';
import favIcon from './assets/favicon.png';
import { keyboard } from './classes.js';
import * as events from './events.js';
import './assets/styles.scss';

// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';

const cookies = decodeURIComponent(document.cookie).split(';');
let lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];

// Load
export let textarea;

window.addEventListener('load', () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <main class="main">
      <h1 class="main__heading">
        RSS Виртуальная клавиатура
      </h1>
      <textarea class="main__textarea" autofocus cols=80 rows=15 placeholder="Введите текст"></textarea>
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
      const indexes = Object.keys(main[row])
      let keyFullElem = '';
      main[row][key].hasOwnProperty('en') ? keyFullElem = main[row][key][lang] : keyFullElem = main[row][key];
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3)) - 1].insertAdjacentElement('beforeend', keyFullElem.key);
      // Main event listeners
      switch (key) {
        case 'keyBackspace': keyFullElem.key.addEventListener('click', events.handleBackspaceClick); break;
        case 'keyTab': keyFullElem.key.addEventListener('click', events.handleTabClick); break;
        case 'keyDelete': keyFullElem.key.addEventListener('click', events.handleDeleteClick); break;
        case 'keyCapsLock': keyFullElem.key.addEventListener('click', events.keyboardToUpperCase); break;
        case 'keyEnter': keyFullElem.key.addEventListener('click', events.handleEnterClick); break;
        case 'keyLeftShift': case 'keyRightShift': keyFullElem.key.addEventListener('mousedown', events.keyboardToUpperCase); keyFullElem.key.addEventListener('mouseup', events.keyboardToUpperCase); keyFullElem.key.addEventListener('keydown', events.keyboardToUpperCase); keyFullElem.key.addEventListener('keyup', events.keyboardToUpperCase); break;
        case 'keyCtrlLeft': keyFullElem.key.addEventListener('mousedown', events.handleCtrlLeftClick); keyFullElem.key.addEventListener('mouseup', events.handleCtrlLeftClick); break;
        case 'keyAltLeft': keyFullElem.key.addEventListener('mousedown', events.handleAltLeftClick); keyFullElem.key.addEventListener('mouseup', events.handleAltLeftClick); break;
        case 'keyUp': keyFullElem.key.addEventListener('click', events.handleKeyUpClick); break;
        case 'keyLeft': keyFullElem.key.addEventListener('click', events.handleKeyLeftClick); break;
        case 'keyDown': keyFullElem.key.addEventListener('click', events.handleKeyDownClick); break;
        case 'keyRight': keyFullElem.key.addEventListener('click', events.handleKeyRightClick); break;
        case 'keyWin': case 'keyAltRight': case 'keyCtrlRight': keyFullElem.key.addEventListener('click', events.handleEmptyClick); break;
        default: keyFullElem.key.addEventListener('click', events.handleKeyClick);
      }

      // Special keys styles
      switch (key) {
        case 'keyCapsLock': keyFullElem.key.classList.add('keyboard__key_caps'); break;
        case 'keyLeftShift': keyFullElem.key.classList.add('keyboard__key_left-shift'); break;
        case 'keySpace': keyFullElem.key.classList.add('keyboard__key_space'); break;
        case indexes[indexes.length - 1]: keyFullElem.key.classList.add('keyboard__key_last');
      }

      // KeyBoard Highlight Listeners
      textarea.addEventListener('keydown', events.handleKeyDown);
      textarea.addEventListener('keyup', events.handleKeyUp);
    }
  }

  document.querySelector('.main').insertAdjacentHTML('beforeend', `
    <p class="main__desc">Клавиатура создана в Windows OS</p>
    <p class="main__desc">Для переключения языка нажмите левые <span class="desc__key">Ctrl</span> + <span class="desc__key">Alt</span></p>
  `)
})