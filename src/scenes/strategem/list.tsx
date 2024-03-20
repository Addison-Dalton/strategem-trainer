import { List, ListItem } from '@chakra-ui/react';

import StrategemImage from 'components/strategem-img';

type Props = {
  strategems: Strategem[];
};

const StrategemList = ({ strategems }: Props) => {
  return (
    <List display="flex" gap={2} marginBottom={2}>
      {strategems.map((strategem) => (
        <ListItem key={strategem.name}>
          <StrategemImage strategem={strategem} boxSize="50px" />
        </ListItem>
      ))}
    </List>
  );
};

export default StrategemList;
