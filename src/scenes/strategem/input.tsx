import { Box } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import {
  ImArrowUp,
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight
} from 'react-icons/im';
import styled from '@emotion/styled';
import { keyframes } from '@chakra-ui/react';
import { Input } from 'types/enums';

import { useInput, getClassName, TIMER_DURATION } from './hook';

type Props = {
  inputs: Input[];
  showHint?: boolean; // show inputs prior to being pressed
  removeStrategem: () => void;
};

const scaleUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const SHAKE_LENGTH = 5;
const shake = keyframes`
  0% { transform: translate(0, 0); }
  20% { transform: translate(-${SHAKE_LENGTH}px, 0); }
  40% { transform: translate(${SHAKE_LENGTH}px, 0); }
  60% { transform: translate(-${SHAKE_LENGTH}px, 0); }
  80% { transform: translate(${SHAKE_LENGTH}px, 0); }
  100% { transform: translate(0, 0); }
`;

const StyledIconBox = styled(Box)`
  display: inline-block;
  margin: 0 0.5rem;
  color: white;
  transition: all ${TIMER_DURATION}ms ease-in;

  &.incorrect-input {
    color: var(--chakra-colors-strategemType-offensive); // red-like color
    animation: ${shake} ${TIMER_DURATION}ms ease-in-out;
  }

  &.correct-input {
    color: var(--chakra-colors-hdYellow-500);
    animation: ${scaleUp} ${TIMER_DURATION}ms ease-in-out;
  }
`;

const inputIcons = {
  [Input.Up]: ImArrowUp,
  [Input.Down]: ImArrowDown,
  [Input.Left]: ImArrowLeft,
  [Input.Right]: ImArrowRight
};

const StrategemInput = ({ inputs, removeStrategem }: Props) => {
  const { correctInputCount, incorrectInput } = useInput(
    inputs,
    removeStrategem
  );
  if (!inputs || inputs.length === 0) return null;
  return (
    <Box>
      {inputs.map((input, index) => (
        <StyledIconBox
          key={`strategem-input-${index}`}
          className={getClassName(correctInputCount, index, incorrectInput)}
          color={correctInputCount > index ? 'hdYellow.500' : 'white'}
        >
          <Icon boxSize="60px" as={inputIcons[input]} />
        </StyledIconBox>
      ))}
    </Box>
  );
};

export default StrategemInput;
