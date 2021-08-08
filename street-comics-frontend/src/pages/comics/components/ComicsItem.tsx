import { Box, Image } from '@chakra-ui/react';
import { ComicItem } from '../../../types';

import fallback from '../../../images/comics/fallback.jpg';

const ComicsItem = ({ comicsItem }: { comicsItem: ComicItem }) => {
  return (
    <Box maxWidth="200px" borderWidth="1px" borderRadius="lg">
      <Image
        fallbackSrc={fallback}
        src={comicsItem.thumbnail}
        alt={comicsItem.title}
        borderTopRadius="lg"
      />
      <Box padding="6">
        <Box as="h3" fontWeight="bold" minHeight="120px">
          {comicsItem.title}
        </Box>
      </Box>
    </Box>
  );
};

export default ComicsItem;
