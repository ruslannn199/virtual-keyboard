import { textarea } from "./index.js";

let SELECTION_START;
let SELECTION_END;
let CTRL_FLAG = 0;
let ALT_FLAG = 0;

// TODO LeftCtrl, LeftAlt

// TODO Нажатие на CAPS и SHIFT на клаве работает аналогично нажатию на клаве

// TODO Key, Tab, Enter добавить функцию по правильному изменению во время выделения (SELECTION_START != SELECTION_END)
export const handleKeyClick = evt => {
  updateSelections();
  textarea.value = updateValue(evt.currentTarget.querySelector('.keyboard__key_primary').textContent);
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1);
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

export const handleTabClick = evt => {
  evt.preventDefault();
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4);
}

export const handleEnterClick = () => {
  updateSelections();
  textarea.value = updateValue('\n');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 1, SELECTION_END + 1);
}
export const handleKeyUpClick = () => {
  updateSelections();
  const rowStart = textarea.value.lastIndexOf('\n', SELECTION_START) + 1;
  const rowLength = SELECTION_START - rowStart;
  let prevRowStart = textarea.value.lastIndexOf('\n', rowStart - 2) + 1;
  const prevRowLength = rowStart - prevRowStart - 1;

  // console.log('Row Start: ' + rowStart, '\nRow Length: ' + rowLength, '\nPrev Row Start: ' + prevRowStart, '\nPrev Row Length: ' + prevRowLength);

  textarea.focus();
  if (rowStart === 0) return;
  rowLength < prevRowLength ? textarea.setSelectionRange(prevRowStart + rowLength, prevRowStart + rowLength) : textarea.setSelectionRange(rowStart - 1, rowStart - 1);
}

export const handleKeyDownClick = () => {
  updateSelections();
  let rowStart;
  const rowEnd = textarea.value.indexOf('\n', SELECTION_END);
  textarea.value.lastIndexOf('\n', SELECTION_END) === rowEnd ? rowStart = textarea.value.lastIndexOf('\n', SELECTION_END - 1) + 1 : rowStart = textarea.value.lastIndexOf('\n', SELECTION_END) + 1;
  if (rowEnd === -1) {
    textarea.focus();
    return;
  }
  const rowLength = SELECTION_END - rowStart;
  let nextRowEnd = textarea.value.indexOf('\n', rowEnd + 1);
  let nextRowLength;
  if (nextRowEnd === -1) {
    nextRowEnd = textarea.value.length;
  } 
  nextRowLength = nextRowEnd - rowEnd - 1;

  textarea.focus();
  rowLength <= nextRowLength ? textarea.setSelectionRange(rowEnd + rowLength + 1, rowEnd + rowLength + 1) : textarea.setSelectionRange(nextRowEnd, nextRowEnd);
}

export const handleKeyLeftClick = () => {
  updateSelections();
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START - 1, SELECTION_START - 1) : textarea.setSelectionRange(SELECTION_START, SELECTION_START);
}

export const handleKeyRightClick = () => {
  updateSelections();
  textarea.focus();
  SELECTION_START === SELECTION_END ? textarea.setSelectionRange(SELECTION_START + 1, SELECTION_START + 1) : textarea.setSelectionRange(SELECTION_END, SELECTION_END);
}

export const handleEmptyClick = evt => {
  evt.preventDefault();
  textarea.focus();
}

export const keyboardToUpperCase = () => {
  textarea.focus();
  const primaryKeys = document.querySelectorAll('.keyboard__key_primary');
  const secondaryKeys = document.querySelectorAll('.keyboard__key_secondary');
  toggleClasses(primaryKeys);
  toggleClasses(secondaryKeys);
}

export const handleCtrlLeftClick = evt => {
  evt.preventDefault();
  CTRL_FLAG === 0 ? CTRL_FLAG = 1 : CTRL_FLAG = 0;
  console.log('CTRL FLAG: ' + CTRL_FLAG);
}

export const handleAltLeftClick = evt => {
  evt.preventDefault();
  ALT_FLAG === 0 ? ALT_FLAG = 1 : ALT_FLAG = 0;
  console.log('ALT FLAG: ' + ALT_FLAG);
}

export const handleKeyDown = evt => {
  textarea.focus();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  console.log(evt.code);
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': if (key.innerText === 'Ctrl') key.parentNode.classList.add('keyboard__key_active'); break;
      case 'Meta': if (key.innerText === 'Win') key.parentNode.classList.add('keyboard__key_active'); break;
      default: if (key.innerText === evt.key) key.parentNode.classList.add('keyboard__key_active');
    }
  });
}

export const handleKeyUp = evt => {
  textarea.focus();
  const keyArr = document.querySelectorAll('.keyboard__key_primary, .keyboard__key_special');
  keyArr.forEach(key => {
    switch (evt.key) {
      case 'Control': if (key.innerText === 'Ctrl') key.parentNode.classList.remove('keyboard__key_active'); break;
      case 'Meta': if (key.innerText === 'Win') key.parentNode.classList.remove('keyboard__key_active'); break;
      default: if (key.innerText === evt.key) key.parentNode.classList.remove('keyboard__key_active');
    }
  });
}

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
}

const updateValue = value => {
  return textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
}

const toggleClasses = keyArr => {
  keyArr.forEach(key => {
    key.classList.toggle('keyboard__key_primary');
    key.classList.toggle('keyboard__key_secondary');
  })
}