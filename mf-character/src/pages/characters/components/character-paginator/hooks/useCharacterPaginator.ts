import { selectCharacter } from "@/app/features/characterSlice";
import { useAppSelector } from "@/app/features/hooks";
import { RootState } from "@/app/store";
import useDispatchHandler from "@/hooks/useDispatchHandler";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterPaginator = () => {
  //Usefull hooks
  const { handleDispatch } = useDispatchHandler();

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

    const callback = () => {
    params.set("page", String(page));
    setParams(params);
    setCurrentPage(page);
  };

  
    const apiParams: Record<string, string | number> = { page };
    params.forEach((value, key) => {
      if (key !== "page") apiParams[key] = value;
    });

    handleDispatch({ params: apiParams, callback });
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
