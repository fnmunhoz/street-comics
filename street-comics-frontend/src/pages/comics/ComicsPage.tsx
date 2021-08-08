import { Heading, WrapItem, Wrap } from '@chakra-ui/react';
import { useComicsApi } from '../../api/comicsApi';
import ComicsLayout from '../../components/layouts/ComicsLayout';
import GlobalError from '../../components/ui/GlobalError';
import GlobalLoading from '../../components/ui/GlobalLoading';
import ComicsItem from './ComicsItem';

const ComicsPage = () => {
  const result = useComicsApi();

  if (result.isLoading || result.isIdle) return <GlobalLoading />;
  if (result.isError) return <GlobalError />;

  return (
    <ComicsLayout>
      <Heading paddingTop="5" paddingBottom="5">
        Marvel
      </Heading>
      <Wrap justify="center">
        {result.data.items.map((comicsItem) => (
          <WrapItem key={comicsItem.id}>
            <ComicsItem comicsItem={comicsItem} />
          </WrapItem>
        ))}
      </Wrap>
    </ComicsLayout>
  );
};

export default ComicsPage;
