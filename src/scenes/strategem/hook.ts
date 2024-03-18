import { useState, useEffect } from 'react';
import { Input } from 'types/enums';

export const useInput = (inputs: Input[], removeStrategem: () => void) => {
  const [correctInputCount, setCorrectInputCount] = useState(0);

  const handleCorrectInput = () => {
    setCorrectInputCount((prev) => prev + 1);
    if (correctInputCount + 1 === inputs.length) {
      removeStrategem();
      setCorrectInputCount(0);
    }
  };

  // keyboard input listerns for the arrow keys that correspond to the strategem inputs
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp' && inputs[correctInputCount] === Input.Up) {
      handleCorrectInput();
    } else if (
      e.key === 'ArrowDown' &&
      inputs[correctInputCount] === Input.Down
    ) {
      handleCorrectInput();
    } else if (
      e.key === 'ArrowLeft' &&
      inputs[correctInputCount] === Input.Left
    ) {
      handleCorrectInput();
    } else if (
      e.key === 'ArrowRight' &&
      inputs[correctInputCount] === Input.Right
    ) {
      handleCorrectInput();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return {
    correctInputCount
  }
};
