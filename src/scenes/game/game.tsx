import { useEffect } from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { StrategemInput, StrategemList } from 'scenes/strategem';
import StrategemImage from 'components/strategem-img';
import InfoLabel from 'components/info-label';

import { useGame } from './hooks';

const Game = () => {
  const { round, score, activeStrategems, resetGame, removeStrategem } =
    useGame();

  // for now, initialize the game on when the component mounts
  // eventually we'll want a proper start
  useEffect(() => {
    resetGame();
  }, []);

  const currentStrategem = activeStrategems[0];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="800px"
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        marginBottom={2}
      >
        <InfoLabel label="Round">{round}</InfoLabel>
        <InfoLabel label="Score">{score}</InfoLabel>
      </Box>
      <StrategemList strategems={activeStrategems.slice(1)} />
      <StrategemImage strategem={currentStrategem} withBorder />
      <Heading
        as="h2"
        size="2xl"
        backgroundColor="hdYellow.400"
        color="black"
        width="100%"
        p={2}
        textAlign="center"
        textTransform="uppercase"
        boxShadow="0 0 6px var(--chakra-colors-hdYellow-400), 0 0 6px var(--chakra-colors-hdYellow-400)"
        marginBottom={6}
      >
        {currentStrategem?.name}
      </Heading>
      <StrategemInput
        inputs={currentStrategem?.sequence}
        removeStrategem={removeStrategem}
      />
    </Box>
  );
};

export default Game;
