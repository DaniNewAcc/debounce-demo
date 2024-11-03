import { ChangeEvent, useState } from 'react';

export function useInput(defaultValue: string) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setIsEdited(false);
  }

  function handleInputBlur() {
    setIsEdited(true);
  }

  return {
    value: inputValue,
    isEdited,
    handleInputChange,
    handleInputBlur
  };
}