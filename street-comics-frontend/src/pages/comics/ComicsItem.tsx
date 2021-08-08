import { Box } from '@chakra-ui/react';
import { ComicItem } from '../../types';

const ComicsItem = ({ comicsItem }: { comicsItem: ComicItem }) => {
  return (
    <Box maxWidth="200px" borderWidth="1px" borderRadius="lg">
      <Box padding="6">
        <Box as="h3" fontWeight="bold" minHeight="120px">
          {comicsItem.title}
        </Box>
      </Box>
    </Box>
  );
};

export default ComicsItem;
