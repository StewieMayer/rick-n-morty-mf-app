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
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterPaginator = () => {
  const dispatch = useAppDispatch();
  const [getCharacters] = useGetCharactersMutation();
  const [params, setParams] = useSearchParams();
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const { page, pages, next, prev } = characterState;
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleNavigation = (page: number) => {
    if (!page || page < 1 || page > pages) return;

    const apiParams: Record<string, string | number> = {page};
    params.forEach((value, key) => {
      if(key!=="page") apiParams[key] = value;
    });

    dispatch(setLoading(true));

    getCharacters({ ...apiParams })
      .unwrap()
      .then(({ info: { count, pages, next, prev }, results }) => {
        dispatch(setPage(page));
        dispatch(setCount(count));
        dispatch(setPages(pages));
        dispatch(setNext(next));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
        params.set("page", String(page));
        setParams(params);
        setCurrentPage(page);
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const handlePrevPage = () => prev && handleNavigation(page - 1);
  const handleNextPage = () => next && handleNavigation(page + 1);
  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = parseInt(e.target.value);
    setCurrentPage(newPage);
    handleNavigation(newPage);
  };

  const isPrevDisabled: boolean = useMemo(() => !prev, [prev]);
  const isNextDisabled: boolean = useMemo(() => !next, [next]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return {
    isPrevDisabled,
    currentPage,
    pages,
    isNextDisabled,
    handlePrevPage,
    handleChangePage,
    handleNextPage,
  };
};

export default useCharacterPaginator;
