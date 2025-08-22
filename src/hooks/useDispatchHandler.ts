import { useGetCharactersMutation } from "@/app/features/charactersApi";
import {
  setCurrentCharacter,
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
    dispatch(setLoading(true));

    // Resetting state
    dispatch(setError(""));
    dispatch(setCurrentCharacter(null));
    dispatch(setIsModalOpen(false));
    dispatch(setCharacters([]));

    getCharacters({ ...params })
      .unwrap()
      .then(({ info: { count, next, pages, prev }, results }) => {
        if (params.page) dispatch(setPage(Number(params.page)));
        dispatch(setCount(count));
        dispatch(setNext(next));
        dispatch(setPages(pages));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
        callback();
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };

  const handleToggle = (value: boolean) => dispatch(setIsModalOpen(!value));

  return {
    handleDispatch,
    handleToggle,
  };
};

export default useDispatchHandler;
