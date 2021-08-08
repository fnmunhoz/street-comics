import { Alert, AlertIcon, Box, Wrap, WrapItem } from '@chakra-ui/react';
import { ComicItem } from '../../../types';
import ComicsItem from './ComicsItem';

type Props = {
  isEmpty: boolean;
  isFetching: boolean;
  items?: ComicItem[];
};

const ComicsGrid = ({ isEmpty, isFetching, items }: Props) => {
  return (
    <>
      {isEmpty || !items ? (
        <Box width="fit-content">
          <Alert status="warning">
            <AlertIcon />
            No comics found, try to filter by another character!
          </Alert>
        </Box>
      ) : (
        <Wrap justify="center" opacity={isFetching ? '20%' : '100%'}>
          {items.map((comicsItem) => (
            <WrapItem key={comicsItem.id}>
              <ComicsItem comicsItem={comicsItem} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
};

export default ComicsGrid;
