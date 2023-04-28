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
      let k = '';
      main[row][key].hasOwnProperty('en') ? k = main[row][key][lang] : k = main[row][key];
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3)) - 1].insertAdjacentElement('beforeend', k.key);
      switch (key) {
        case 'keyBackspace': k.key.addEventListener('click', events.handleBackspaceClick); break;
        case 'keyTab': k.key.addEventListener('click', events.handleTabClick); break;
        case 'keyDelete': k.key.addEventListener('click', events.handleDeleteClick); break;
        case 'keyEnter': k.key.addEventListener('click', events.handleEnterClick); break;
        case 'keyUp': k.key.addEventListener('click', events.handleKeyUpClick); break;
        case 'keyLeft': k.key.addEventListener('click', events.handleKeyLeftClick); break;
        case 'keyDown': k.key.addEventListener('click', events.handleKeyDownClick); break;
        case 'keyRight': k.key.addEventListener('click', events.handleKeyRightClick); break;
        default: k.key.addEventListener('click', events.handleKeyClick);
      }

      // Special keys styles
      if (key === 'keyCapsLock') k.key.classList.add('keyboard__key_caps');
      if (key === 'keyLeftShift') k.key.classList.add('keyboard__key_left-shift');
      if (key === 'keySpace') k.key.classList.add('keyboard__key_space');
      if (key === indexes[indexes.length - 1]) k.key.classList.add('keyboard__key_last');
    }
  }

  document.querySelector('.main').insertAdjacentHTML('beforeend', `
    <p class="main__desc">Клавиатура создана в Windows OS</p>
    <p class="main__desc">Для переключения языка нажмите <span class="desc__key">Ctrl</span> + <span class="desc__key">Alt</span></p>
  `)
})