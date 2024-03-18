import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import {
  ImArrowUp,
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight
} from 'react-icons/im';
import { Input } from 'types/enums';

import { useInput } from './hook';

type Props = {
  inputs: Input[];
  showHint?: boolean; // show inputs prior to being pressed
  removeStrategem: () => void;
};

const inputIcons = {
  [Input.Up]: ImArrowUp,
  [Input.Down]: ImArrowDown,
  [Input.Left]: ImArrowLeft,
  [Input.Right]: ImArrowRight
};

const StrategemInput = ({
  inputs,
  removeStrategem,
  showHint = true
}: Props) => {
  const { correctInputCount } = useInput(inputs, removeStrategem);
  if (!inputs || inputs.length === 0) return null;

  return (
    <Box>
      {inputs.map((input, index) => (
        <Box
          key={`strategem-input-${index}`}
          display="inline-block"
          mx={1}
          color={correctInputCount > index ? 'hdYellow.500' : 'white'}
        >
          <Icon boxSize="80px" as={inputIcons[input]} />
        </Box>
      ))}
    </Box>
  );
};

export default StrategemInput;
