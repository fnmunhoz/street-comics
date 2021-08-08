import ComicsLayout from '../../components/layouts/ComicsLayout';
import GlobalError from '../../components/ui/GlobalError';
import GlobalLoading from '../../components/ui/GlobalLoading';
import ComicsGrid from './components/ComicsGrid';
import ComicsHeader from './components/ComicsHeader';
import useFilteredComics from './hooks/useFilteredComics';

const ComicsPage = () => {
  const {
    data,
    isLoading,
    isError,
    isEmpty,
    isFetching,
    onChangeCharactersFilter,
  } = useFilteredComics();

  if (isLoading) return <GlobalLoading />;
  if (isError) return <GlobalError />;

  return (
    <ComicsLayout>
      <ComicsHeader onChangeCharactersFilter={onChangeCharactersFilter} />

      <ComicsGrid
        isEmpty={isEmpty}
        isFetching={isFetching}
        items={data?.items}
      />
    </ComicsLayout>
  );
};

export default ComicsPage;
