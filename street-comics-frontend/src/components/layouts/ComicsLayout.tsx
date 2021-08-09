import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const ComicsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box backgroundColor="#202020">
      <Flex
        direction="column"
        align="center"
        maxWidth={{ xl: '1200px' }}
        margin="0 auto"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default ComicsLayout;
