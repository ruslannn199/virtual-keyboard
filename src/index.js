import 'normalize.css';
import favIcon from './assets/favicon.png';
import { keyboard } from './classes.js';
import './assets/styles.scss';

// Cookies
if (!document.cookie) document.cookie = 'lang=en; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';

const cookies = decodeURIComponent(document.cookie).split(';');
const lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];

// Load

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

  const main = new keyboard();
  for (let row in main) {
    for (let key in main[row]) {
      const indexes = Object.keys(main[row])
      let k = '';
      main[row][key].hasOwnProperty('en') ? k = main[row][key][lang] : k = main[row][key];
      document.querySelectorAll('.keyboard__row')[Number.parseInt(row.charAt(3)) - 1].insertAdjacentElement('beforeend', k.key);
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