const REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;

class Key {
  constructor(primaryChar, secondaryChar) {
    const emptyKey = document.createElement('span');
    emptyKey.classList.add('keyboard__key');
    this.key = emptyKey;

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
}

export default Key;
