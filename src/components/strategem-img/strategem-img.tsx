import { Box, Image } from '@chakra-ui/react';

type Props = {
  strategem: Strategem;
  boxSize?: string;
  withBorder?: boolean;
};

const StrategemImage = ({
  strategem,
  withBorder,
  boxSize = '200px'
}: Props) => {
  if (!strategem) return null;
  return (
    <Box
      padding={3}
      width="fit-content"
      backgroundColor={`strategemType.${strategem.type}Alpha`}
      border={withBorder ? '3px solid transparent' : 'none'}
      borderColor="yellow.400"
      boxShadow={
        withBorder
          ? '0 0 3px var(--chakra-colors-hdYellow-400), 0 0 3px var(--chakra-colors-hdYellow-400)'
          : 'none'
      }
    >
      <Image
        src={`/strategem-trainer/strategems/${strategem.category}/${strategem.name}.svg`}
        alt={strategem.name}
        boxSize={boxSize}
      />
    </Box>
  );
};

export default StrategemImage;
