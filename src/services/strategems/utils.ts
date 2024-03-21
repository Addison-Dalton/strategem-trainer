import { Input } from 'types/enums';

const acceptedKeys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'w',
  's',
  'a',
  'd'
];
const keyMap: KeyMap[] = [
  { input: Input.Up, keys: ['ArrowUp', 'w'] },
  { input: Input.Down, keys: ['ArrowDown', 's'] },
  { input: Input.Left, keys: ['ArrowLeft', 'a'] },
  { input: Input.Right, keys: ['ArrowRight', 'd'] }
];

const getInputFromKey = (key: string): Input | undefined => {
  const keyMapItem = keyMap.find((item) => item.keys.includes(key));
  return keyMapItem?.input;
};

export { keyMap, acceptedKeys, getInputFromKey };
