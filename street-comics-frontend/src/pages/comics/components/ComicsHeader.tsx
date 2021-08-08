import { Box, Heading, Stack } from '@chakra-ui/react';
import ComicsInputFilter from './ComicsInputFilter';

type Props = {
  onChangeCharactersFilter: (filter: string) => void;
};

const ComicsHeader = ({ onChangeCharactersFilter }: Props) => {
  return (
    <Heading paddingTop="8" paddingBottom="8">
      <Stack spacing="8" align="center">
        <Box>Marvel</Box>
        <Box>
          <ComicsInputFilter
            onChange={(e) => onChangeCharactersFilter(e.target.value)}
            placeholder="filter by character"
            size="lg"
            width="400px"
          />
        </Box>
      </Stack>
    </Heading>
  );
};

export default ComicsHeader;
