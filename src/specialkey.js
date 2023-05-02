class SpecialKey {
  constructor(special) {
    const emptyKey = document.createElement('span');
    emptyKey.classList.add('keyboard__key');
    this.key = emptyKey;
    this.specialElement = document.createElement('span');
    this.specialElement.classList.add('keyboard__key_special');
    this.specialElement.textContent = special;
    this.key.append(this.specialElement);
  }
}

export default SpecialKey;
