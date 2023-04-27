import { textarea } from "./index.js";

let SELECTION_START;
let SELECTION_END;

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

export const handleTabClick = () => {
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
  const rowStart = textarea.value.lastIndexOf('\n', SELECTION_START);
  const rowEnd = textarea.value.indexOf('\n', SELECTION_START);
  console.log(SELECTION_START, rowStart, rowEnd);
  textarea.focus();
  if (rowStart === -1) {
    // textarea.setSelectionRange(0, rowEnd);
  }
  else if (rowEnd === -1) {
    // textarea.setSelectionRange(rowStart + 1, textarea.value.length);
  }
  else if (rowStart === rowEnd) {
    // TODO Проблемы: в конце первой строки
  }
  else {
    const rowLength = rowEnd - rowStart - 1;
    // const currentRow = (SELECTION_START - rowStart) % rowLength;
    // const newPosition = currentRow + rowStart + 1;
    // textarea.setSelectionRange(newPosition, newPosition);
  }
}

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
}

const updateValue = value => {
  return textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
}