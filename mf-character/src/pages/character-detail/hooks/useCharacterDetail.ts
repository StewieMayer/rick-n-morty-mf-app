import { useGetCharacterDetailQuery } from "@/app/features/characterDetailApi";
import { useNavigate, useParams } from "react-router-dom";

const useCharacterDetail = () => {
  const { id } = useParams();
  const { data: character, isLoading, isError, error } = useGetCharacterDetailQuery(id!);

  const navigate = useNavigate();
  const backToCharacters = () => navigate('../');

  return {
    isLoading,
    isError,
    error,
    character,
    backToCharacters,
  };
};

export default useCharacterDetail;
