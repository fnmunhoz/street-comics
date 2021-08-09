import { Box, Heading, Stack, Image } from '@chakra-ui/react';
import ComicsInputFilter from './ComicsInputFilter';

import logo from '../../../images/logo.png';

type Props = {
  onChangeCharactersFilter: (filter: string) => void;
};

const ComicsHeader = ({ onChangeCharactersFilter }: Props) => {
  return (
    <Heading
      paddingTop="8"
      paddingBottom="8"
      marginBottom="8"
      backgroundColor="red"
      width="100%"
    >
      <Stack spacing="8" align="center">
        <Heading as="h1">
          <Image src={logo} alt="Marvel" />
        </Heading>
        <Box>
          <ComicsInputFilter
            onChange={(e) => onChangeCharactersFilter(e.target.value)}
            placeholder="filter by character"
            size="lg"
            width="400px"
            backgroundColor="white"
          />
        </Box>
      </Stack>
    </Heading>
  );
};

export default ComicsHeader;
