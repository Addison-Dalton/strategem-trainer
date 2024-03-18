import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Game = {
  // todo - start with menu, once implemented
  gameState: 'playing',
  round: 1,
  score: 0,
  strategems: [],
  activeStrategems: []
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setStrategems: (state, action: PayloadAction<Strategem[]>) => {
      state.strategems = action.payload;
    },
    setActiveStrategems: (state, action: PayloadAction<Strategem[]>) => {
      state.activeStrategems = action.payload;
    },
    removeActiveStrategem: (state) => {
      state.activeStrategems.shift();
    }
  }
});

export const {
  setGameState,
  setRound,
  setScore,
  setStrategems,
  setActiveStrategems,
  removeActiveStrategem
} = gameSlice.actions;
export * from './selectors';

export default gameSlice.reducer;
