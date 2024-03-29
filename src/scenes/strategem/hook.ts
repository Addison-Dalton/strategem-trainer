import { useState, useEffect } from 'react';
import { Input } from 'types/enums';

import { getInputFromKey, acceptedKeys } from 'services/strategems/utils';

export const TIMER_DURATION = 200;

export const useInput = (inputs: Input[], removeStrategem: () => void) => {
  const [correctInputCount, setCorrectInputCount] = useState(0);
  const [incorrectInput, setIncorrectInput] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const handleCorrectInput = () => {
    setCorrectInputCount((prev) => prev + 1);
    if (correctInputCount + 1 === inputs.length) {
      completeStrategem();
    }
  };

  const completeStrategem = () => {
    setDisableInput(true);
    setTimeout(() => {
      removeStrategem();
      resetInputCount();
      setDisableInput(false);
    }, TIMER_DURATION);
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
    if (!acceptedKeys.includes(key) || disableInput) return;
    if (getInputFromKey(key) === inputs[correctInputCount]) {
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
