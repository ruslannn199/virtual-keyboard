import 'normalize.css';
import * as keyboardEng from './eng.js';
import buildRu from './ru.js';

// Cookies
if (!document.cookie) document.cookie = 'lang=ru; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';

const cookies = decodeURIComponent(document.cookie).split(';');
const lang = cookies.find((cookie) => cookie.includes('lang=')).split('=')[1];
window.addEventListener('load', () => {
  console.log(lang);
})

// Class

console.log(keyboardEng);