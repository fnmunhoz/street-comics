import {
  Box,
  VStack,
  Grid,
  UnorderedList,
  ListItem,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useComicsApi } from '../../api/comicsApi';

const ComicsPage = () => {
  const result = useComicsApi();

  if (result.isLoading || result.isIdle)
    return (
      <Box textAlign="center">
        <Spinner aria-label="Loading..." />
      </Box>
    );

  if (result.isError)
    return (
      <Alert status="error">
        <AlertIcon />
        Something went wrong
      </Alert>
    );

  return (
    <Box textAlign="center">
      <Grid minH="100vh" p={3}>
        <VStack spacing={16}>
          <Heading>Marvel</Heading>

          <UnorderedList textAlign="left">
            {result.data.results.map((comic) => (
              <ListItem key={comic.id}>{comic.title}</ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ComicsPage;
