import Loader from "@/components/Loader";
import useCharacterDetail from "./hooks/useCharacterDetail";
import CharacterDetailCard from "./components/character-detail-card/CharacterDetailCard";
import EpisodeDetail from "./components/episode-detail/EpisodeDetail";

const CharacterDetail: React.FC = () => {
  const { character, isLoading,backToCharacters } = useCharacterDetail();

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="container flex justify-center">
        {isLoading && <Loader message="Cargando personaje" />}
        {character && (
          <div className="flex w-full flex-col md:flex-row md:items-baseline gap-4 bg-white p-4 rounded-lg">
            <CharacterDetailCard character={character} backToCharacters={backToCharacters} />
            <EpisodeDetail episodes={character.episode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
