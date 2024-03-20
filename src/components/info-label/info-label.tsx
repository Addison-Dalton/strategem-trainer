import { Box, Text, TextProps } from '@chakra-ui/react';

type Props = {
  label: string;
  children: React.ReactNode;
  infoTextProps?: TextProps;
};

const InfoLabel = ({ label, children, infoTextProps }: Props) => {
  return (
    <Box>
      <Text fontSize="3xl">{label}</Text>
      <Text
        fontSize="3xl"
        color="hdYellow.400"
        fontWeight={500}
        {...infoTextProps}
      >
        {children}
      </Text>
    </Box>
  );
};

export default InfoLabel;
