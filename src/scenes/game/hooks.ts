import { useDispatch, useSelector } from 'react-redux';

import {
  setActiveStrategems,
  setGameState,
  setRound,
  setScore,
  setStrategems,
  removeActiveStrategem,
  selectActiveStrategems,
  selectGameState,
  selectRound,
  selectScore
} from 'services/game/slice';
import { getAllStrategems, getStrategemsForRound } from 'services/game/utils';

export const useGame = () => {
  const dispatch = useDispatch();
  const gameState = useSelector(selectGameState);
  const round = useSelector(selectRound);
  const score = useSelector(selectScore);
  const activeStrategems = useSelector(selectActiveStrategems);

  const resetGame = () => {
    dispatch(setGameState('playing'));
    dispatch(setRound(1));
    dispatch(setScore(0));
    dispatch(setStrategems(getAllStrategems()));
    dispatch(setActiveStrategems(getStrategemsForRound()));
  };

  const removeStrategem = () => dispatch(removeActiveStrategem());

  return {
    gameState,
    round,
    score,
    activeStrategems,
    resetGame,
    removeStrategem,
    dispatch
  };
};
