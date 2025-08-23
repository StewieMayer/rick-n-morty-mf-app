import { selectCharacter } from "@/app/features/characterSlice";
import { useAppSelector } from "@/app/features/hooks";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useDispatchHandler from "@/hooks/useDispatchHandler";

const useCharacterContainer = () => {
  const { handleDispatch, handleToggle } = useDispatchHandler();
  const [params] = useSearchParams();
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const { characters, currentCharacter, isModalOpen, loading, error } =
    characterState;

  const onClose = () => handleToggle(isModalOpen);

  useEffect(() => {
    const apiParams: Record<string, string | number> = {};
    params.forEach((value, key) => (apiParams[key] = value));

    handleDispatch({ params: apiParams });
  }, [params]);

  return {
    onClose,
    currentCharacter,
    isModalOpen,
    characters,
    loading,
    error,
  };
};

export default useCharacterContainer;
