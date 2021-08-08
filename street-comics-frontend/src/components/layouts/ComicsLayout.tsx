import React from 'react';
import { Flex } from '@chakra-ui/react';

const ComicsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxWidth={{ xl: '1200px' }}
      margin="0 auto"
    >
      {children}
    </Flex>
  );
};

export default ComicsLayout;
