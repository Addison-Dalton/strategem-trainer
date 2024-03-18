type GameState = 'menu' | 'playing' | 'gameOver';

type Game = {
  gameState: GameState;
  round: number;
  score: number;
  strategems: Strategem[]; // all strategems for the game
  activeStrategems: Strategem[]; // current round's strategems
};

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
};
