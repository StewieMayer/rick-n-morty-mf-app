import { Character } from "@/types/characterTypes";
import useCharacterContainer from "./hooks/useCharacterContainer";
import CharacterCard from "../character-card/CharacterCard";
import CharacterModal from "../character-modal/CharacterModal";
import customKey from "@/utils/customKey";

const CharacterContainer: React.FC = () => {
  const { characters, isModalOpen, currentCharacter, onClose } =
    useCharacterContainer();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {characters.map((character: Character) => (
        <CharacterCard
          character={character}
          key={customKey([character.id, character.name])}
        />
      ))}
      <CharacterModal
        open={isModalOpen}
        onClose={onClose}
        character={currentCharacter}
      />
    </div>
  );
};

export default CharacterContainer;
