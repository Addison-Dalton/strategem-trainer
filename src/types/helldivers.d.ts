enum Input {
  Up = 1,
  Down,
  Left,
  Right
}

type StrategemCategory =
  | 'Patriotic Administration Center'
  | 'Orbital Cannons'
  | 'Hanger'
  | 'Bridge'
  | 'Engineering Bay'
  | 'Robotics Workshop';

type Strategem = {
  name: string;
  imgPath: string;
  category: StrategemCategory;
  sequence: Input[];
  callIntime: number; // in seconds
  uses: number; // 0 for infinite
  cooldown: number; // in seconds
};
