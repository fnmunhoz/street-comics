import { Input, InputProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import { debounce } from 'lodash';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputProps;

const ComicsInputFilter = ({ onChange, ...props }: Props) => {
  const debouncedChangeHandler = useMemo(
    () => debounce(onChange, 400),
    [onChange]
  );

  return <Input onChange={debouncedChangeHandler} {...props} />;
};

export default ComicsInputFilter;
