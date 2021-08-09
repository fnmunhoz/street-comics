import { Box, Image } from '@chakra-ui/react';
import { ComicItem } from '../../../types';

import fallback from '../../../images/comics/fallback.jpg';

import heartOn from '../../../images/icons/heartOn.png';
import heartOff from '../../../images/icons/heartOff.png';
import heartHover from '../../../images/icons/heartHover.png';
import { useState } from 'react';

type Props = {
  comicsItem: ComicItem;
  isFavorite: (comicsId: number) => boolean;
  toggleFavorite: (comicsId: number) => void;
};

const ComicsItem = ({ comicsItem, isFavorite, toggleFavorite }: Props) => {
  const [isOver, setIsOver] = useState(false);

  const isFavoriteOn = isFavorite(comicsItem.id);

  const onMouseOver = () => {
    setIsOver(true);
  };

  const onMouseOut = () => {
    setIsOver(false);
  };

  return (
    <Box
      onClick={() => toggleFavorite(comicsItem.id)}
      cursor="pointer"
      maxWidth="200px"
      borderWidth="8px"
      borderColor={isFavoriteOn || isOver ? 'red' : 'transparent'}
      position="relative"
      onMouseLeave={onMouseOut}
      onMouseEnter={onMouseOver}
    >
      <FavoriteState isFavoriteOn={isFavoriteOn} isOver={isOver} />

      <Image
        fallbackSrc={fallback}
        src={comicsItem.thumbnail}
        alt={comicsItem.title}
      />
      {isOver ? (
        <Box
          padding="2"
          position="absolute"
          backgroundColor="white"
          bottom="0"
          height="fit-content"
        >
          <Box as="h3" fontWeight="bold" textOverflow="clip">
            {comicsItem.title}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

const FavoriteState = ({
  isFavoriteOn,
  isOver,
}: {
  isFavoriteOn: boolean;
  isOver: boolean;
}) => {
  if (isFavoriteOn && isOver) {
    return <FavoriteIcon src={heartHover} margin="2" />;
  }

  if (isFavoriteOn && !isOver) {
    return <FavoriteIcon src={heartOn} margin="1" />;
  }

  if (isOver) {
    return <FavoriteIcon src={heartOff} margin="2" />;
  }

  return null;
};

const FavoriteIcon = ({ margin, src }: { margin: string; src: string }) => (
  <Box position="absolute" margin={margin} right="0">
    <Image src={src} />
  </Box>
);

export default ComicsItem;
