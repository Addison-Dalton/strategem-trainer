import { Box } from '@chakra-ui/react';

import Divider from 'components/horizontal-dividers';
import Game from 'scenes/game';

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100dvh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      <Divider />
      <Game />
      <Divider />
    </Box>
  );
}

export default App;
