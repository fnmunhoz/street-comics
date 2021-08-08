import { Alert, AlertIcon } from '@chakra-ui/react';
import ComicsLayout from '../layouts/ComicsLayout';

const GlobalError = () => (
  <ComicsLayout>
    <Alert status="error">
      <AlertIcon />
      Something went wrong
    </Alert>
  </ComicsLayout>
);

export default GlobalError;
