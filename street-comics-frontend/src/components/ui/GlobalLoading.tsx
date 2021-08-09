import { Box, Spinner } from '@chakra-ui/react';
import ComicsLayout from '../layouts/ComicsLayout';

const GlobalLoading = () => (
  <ComicsLayout>
    <Box textAlign="center">
      <Spinner color="white" aria-label="Loading..." />
    </Box>
  </ComicsLayout>
);

export default GlobalLoading;
