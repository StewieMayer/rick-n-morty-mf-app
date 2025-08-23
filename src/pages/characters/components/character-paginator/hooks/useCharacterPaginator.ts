import { selectCharacter } from "@/app/features/characterSlice";
import { useAppSelector } from "@/app/features/hooks";
import { RootState } from "@/app/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterPaginator = () => {

  //Paginator state
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const { page, pages, next, prev } = characterState;
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [params, setParams] = useSearchParams();

  const isPrevDisabled: boolean = useMemo(() => !prev, [prev]);
  const isNextDisabled: boolean = useMemo(() => !next, [next]);

  //Helpers
  const isOutOfRange = useCallback(
    (value: number): boolean => value < 1 || value > pages,
    [pages]
  );

  //Handlers
  const handleNavigation = (page: number) => {
    if (!page || isOutOfRange(page)) return;

    params.set("page", String(page));
    setParams(params);
    setCurrentPage(page);
  };

  const handlePrevPage = () => prev && handleNavigation(page - 1);
  const handleNextPage = () => next && handleNavigation(page + 1);
  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = parseInt(e.target.value);
    if (isOutOfRange(newPage)) return;
    setCurrentPage(newPage);
    handleNavigation(newPage);
  };

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
