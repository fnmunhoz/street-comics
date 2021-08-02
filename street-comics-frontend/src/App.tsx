import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ComicsPage from './pages/comics/ComicsPage';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ComicsPage />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
