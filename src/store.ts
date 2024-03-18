import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gameReducer from 'services/game/slice';

const rootReducer = combineReducers({
  game: gameReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type Store = ReturnType<typeof rootReducer>;

export default store;
