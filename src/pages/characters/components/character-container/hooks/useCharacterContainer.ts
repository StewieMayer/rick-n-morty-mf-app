import { useGetCharactersMutation } from "@/app/features/charactersApi";
import {
  selectCharacter,
  setCharacters,
  setCount,
  setPages,
  setNext,
  setPrev,
  setLoading,
  setError,
  clearState,
  setPage,
} from "@/app/features/characterSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/hooks";
import { setIsModalOpen } from "@/app/features/characterSlice";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterContainer = () => {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const [getCharacters] = useGetCharactersMutation();
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const { characters, currentCharacter, isModalOpen, loading } = characterState;

  const onClose = () => dispatch(setIsModalOpen(!isModalOpen));

  useEffect(() => {
    dispatch(setLoading(true));
    const apiParams: Record<string, string | number> = {};
    params.forEach((value, key) => (apiParams[key] = value));
    getCharacters({ ...apiParams })
      .unwrap()
      .then(({ info: { count, pages, next, prev }, results }) => {
        dispatch(setCount(count));
        dispatch(setPages(pages));
        dispatch(setNext(next));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
      })
      .catch((error) => {
        dispatch(clearState());
        dispatch(setCharacters([]));
        dispatch(setError(error));
      })
      .finally(() => {
        dispatch(setLoading(false));
        if (apiParams.page) dispatch(setPage(Number(apiParams.page)));
      });
  }, []);

  return {
    onClose,
    currentCharacter,
    isModalOpen,
    characters,
    loading,
  };
};

export default useCharacterContainer;
