import { Alert, AlertIcon, Box, Wrap, WrapItem } from '@chakra-ui/react';
import { ComicItem } from '../../../types';
import ComicsItem from './ComicsItem';

type Props = {
  isEmpty: boolean;
  isFetching: boolean;
  items?: ComicItem[];
  isFavorite: (comicsId: number) => boolean;
  toggleFavorite: (comicsId: number) => void;
};

const ComicsGrid = ({
  isEmpty,
  isFetching,
  items,
  isFavorite,
  toggleFavorite,
}: Props) => {
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
              <ComicsItem
                comicsItem={comicsItem}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
};

export default ComicsGrid;
