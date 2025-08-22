import { useGetCharactersMutation } from "@/app/features/charactersApi";
import {
  setPage,
  selectCharacter,
  setError,
  setLoading,
  setCount,
  setCharacters,
  setNext,
  setPrev,
  setPages,
} from "@/app/features/characterSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/hooks";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { store } from "@/app/store";

const useCharacterPaginator = () => {
  const [params, setParams] = useSearchParams();

  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );
  const { page, pages, next, prev } = characterState;
  const [currentPage,setCurrentPage] = useState<number>(page)
  const dispatch = useAppDispatch();

  useEffect(()=>{setCurrentPage(page)},[page])

  const [getCharacters] = useGetCharactersMutation();

  const handleNavigation = (page: number | null | undefined) => {
    if (!page || page < 1 || page > pages) return;

    dispatch(setLoading(true));

    getCharacters({ ...params, page })
      .unwrap()
      .then(({ info: { count, pages, next, prev }, results }) => {
        dispatch(setPage(page));
        dispatch(setCount(count));
        dispatch(setPages(pages));
        dispatch(setNext(next));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => {
        dispatch(setLoading(false));
        params.set("page", String(page));
        setParams(params);
        setCurrentPage(page)
      });
  };

  const handlePrevPage = () => prev && handleNavigation(page - 1);
  const handleNextPage = () => next && handleNavigation(page + 1);
  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newPage = parseInt(e.target.value)
    setCurrentPage(newPage)
    handleNavigation(newPage);
  }
    

  return {
    currentPage,
    pages,
    handleChangePage,
    handlePrevPage,
    handleNextPage,
  };
};

export default useCharacterPaginator;
