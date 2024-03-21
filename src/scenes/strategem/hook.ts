import { useState, useEffect } from 'react';
import { Input } from 'types/enums';

export const TIMER_DURATION = 200;

export const useInput = (inputs: Input[], removeStrategem: () => void) => {
  const [correctInputCount, setCorrectInputCount] = useState(0);
  const [incorrectInput, setIncorrectInput] = useState(false);

  const handleCorrectInput = () => {
    setCorrectInputCount((prev) => prev + 1);
    if (correctInputCount + 1 === inputs.length) {
      removeStrategem();
      resetInputCount();
    }
  };

  const resetInputCount = () => {
    setCorrectInputCount(0);
  };

  const handleIncorrectInput = () => {
    resetInputCount();
    setIncorrectInput(true);
  };

  // keyboard input listerns for the arrow keys that correspond to the strategem inputs
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    // only listen for arrow keys
    if (!key.includes('Arrow')) return;
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
    } else {
      handleIncorrectInput();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (incorrectInput) {
      const timer = setTimeout(() => {
        setIncorrectInput(false);
      }, TIMER_DURATION);

      return () => clearTimeout(timer);
    }
  }, [incorrectInput]);

  return {
    incorrectInput,
    correctInputCount
  };
};

export const getClassName = (
  correctInputCount: number,
  index: number,
  incorrectInput: boolean
) => {
  if (incorrectInput) {
    return 'incorrect-input';
  }
  return correctInputCount > index ? 'correct-input' : '';
};
