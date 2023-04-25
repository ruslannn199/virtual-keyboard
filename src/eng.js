export class engKeyboard {
  constructor() {
    this.row1 = {
      key1: ''
    }
  }
}

export const buildEng = () => {
  console.log('lol');
}

export function createKey(primaryChar, secondaryChar) {
  const key = createEmptyKey();
  const primaryElement = document.createElement('div');
  primaryElement.classList.add('keyboard__key_primary');
  primaryElement.textContent = primaryChar;

  const secondaryElement = document.createElement('div');
  secondaryElement.classList.add('keyboard__key_secondary');
  secondaryElement.textContent = secondaryChar;

  key.appendChild(primaryElement);
  key.appendChild(secondaryElement);

  return key;
}

export function createSpecialKey(special) {
  const key = createEmptyKey();
  const specialElement = document.createElement('div');
  specialElement.classList.add('keyboard__key_special');
  specialElement.textContent = special;

  key.appendChild(specialElement);

  return key;
}

export function createEmptyKey() {
  return document.createElement('div').classList.add('keyboard__key');
}