import { useGetCharactersMutation } from "@/app/features/charactersApi";
import {
  clearState,
  setIsModalOpen,
  setCharacters,
  setCount,
  setError,
  setLoading,
  setNext,
  setPage,
  setPages,
  setPrev,
} from "@/app/features/characterSlice";
import { useAppDispatch } from "@/app/features/hooks";
import { CharactersApiProps } from "@/types/characterTypes";

interface UseDispatcherHandlerProps {
  params: CharactersApiProps;
  callback?: VoidFunction;
}

const useDispatchHandler = () => {
  const dispatch = useAppDispatch();
  const [getCharacters] = useGetCharactersMutation();

  const handleDispatch = ({
    params,
    callback = () => {},
  }: UseDispatcherHandlerProps) => {
  
    // Resetting state
    dispatch(clearState());

    dispatch(setLoading(true));

    getCharacters({ ...params })
      .unwrap()
      .then(({ info: { count, next, pages, prev }, results }) => {
        dispatch(setPage(Number(params.page || 1)));
        dispatch(setCount(count));
        dispatch(setNext(next));
        dispatch(setPages(pages));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
        callback();
      })
      .catch(({ data: { error } }) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  };

  const handleToggle = (value: boolean) => dispatch(setIsModalOpen(!value));

  return {
    handleDispatch,
    handleToggle,
  };
};

export default useDispatchHandler;
