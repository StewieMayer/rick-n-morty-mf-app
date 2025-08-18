import { useGetCharactersQuery } from "@/app/features/charactersApi";
import { selectCharacter } from "@/app/features/characterSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/hooks";
import { setIsModalOpen } from "@/app/features/characterSlice";
import { RootState } from "@/app/store";

const useCharacterContainer = () => {
  const characterState = useAppSelector((state: RootState) =>
    selectCharacter(state)
  );

  const dispatch = useAppDispatch();

  const { currentCharacter, isModalOpen, name, page, species, status } =
    characterState;
  const onClose = () => dispatch(setIsModalOpen(!isModalOpen));

  const { data, isLoading, isError } = useGetCharactersQuery({
    name,
    page,
    species,
    status,
  });

  return {
    onClose,
    currentCharacter,
    isModalOpen,
    characters: data?.results || [],
    isLoading,
    isError,
  };
};

export default useCharacterContainer;
