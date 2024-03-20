import { Box, Text } from '@chakra-ui/react';

type Props = {
  label: string;
  children: React.ReactNode;
};

const InfoLabel = ({ label, children }: Props) => {
  return (
    <Box>
      <Text fontSize="3xl">{label}</Text>
      <Text fontSize="3xl" color="hdYellow.400" fontWeight={500}>
        {children}
      </Text>
    </Box>
  );
};

export default InfoLabel;
