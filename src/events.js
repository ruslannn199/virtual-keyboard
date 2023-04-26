import { textarea } from "./index.js";

let SELECTION_START;
let SELECTION_END;

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

export const handleTabClick = () => {
  updateSelections();
  textarea.value = updateValue('    ');
  textarea.focus();
  textarea.setSelectionRange(SELECTION_START + 4, SELECTION_END + 4);
}

const updateSelections = () => {
  SELECTION_START = textarea.selectionStart;
  SELECTION_END = textarea.selectionEnd;
}

const updateValue = value => {
  return textarea.value.slice(0, SELECTION_START) + value + textarea.value.slice(SELECTION_END);
}