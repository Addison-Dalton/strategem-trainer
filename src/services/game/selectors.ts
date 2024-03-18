import { createSelector } from '@reduxjs/toolkit';
import { Store } from '../../store';

export const getGame = (state: Store) => state.game;

export const selectGame = createSelector(getGame, (game) => game);
export const selectGameState = createSelector(
  getGame,
  (game) => game.gameState
);
export const selectRound = createSelector(getGame, (game) => game.round);
export const selectScore = createSelector(getGame, (game) => game.score);
export const selectStrategems = createSelector(
  getGame,
  (game) => game.strategems
);
export const selectActiveStrategems = createSelector(
  getGame,
  (game) => game.activeStrategems
);
