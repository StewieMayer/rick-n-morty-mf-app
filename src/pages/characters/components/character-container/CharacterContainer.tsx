import { Character } from "@/types/characterTypes";
import useCharacterContainer from "./hooks/useCharacterContainer";
import CharacterCard from "../character-card/CharacterCard";
import CharacterModal from "../character-modal/CharacterModal";
import customKey from "@/utils/customKey";
import Loader from "@/components/Loader";

const CharacterContainer: React.FC = () => {
  const { characters, isModalOpen, currentCharacter, loading, onClose } =
    useCharacterContainer();

  return (
    <div className="flex flex-1 flex-wrap overflow-hidden items-center justify-center gap-4 p-4">
      {loading ? (
        <Loader />
      ) : (
        characters &&
        characters.map((character: Character) => (
          <CharacterCard
            character={character}
            key={customKey([character.id, character.name])}
          />
        ))
      )}
      <CharacterModal
        open={isModalOpen}
        onClose={onClose}
        character={currentCharacter}
      />
    </div>
  );
};

export default CharacterContainer;
