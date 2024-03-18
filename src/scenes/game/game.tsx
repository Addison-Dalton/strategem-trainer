import { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import StrategemInput from 'scenes/strategem/input';

import { useGame } from './hooks';

const Game = () => {
  const { round, score, activeStrategems, resetGame, removeStrategem } =
    useGame();

  // for now, initialize the game on when the component mounts
  // eventually we'll want a proper start
  useEffect(() => {
    resetGame();
  }, []);

  return (
    // Eventually probably another Box here to encapsulate the game itself and the round / score on the sides
    <Box display="flex">
      <Text>Round: {round}</Text>
      <Box>
        <StrategemInput
          inputs={activeStrategems[0]?.sequence}
          removeStrategem={removeStrategem}
        />
      </Box>
      <Text>Score: {score}</Text>
    </Box>
  );
};

export default Game;
