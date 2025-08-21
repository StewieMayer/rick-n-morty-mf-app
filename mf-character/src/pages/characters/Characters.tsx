import CharacterContainer from "./components/character-container/CharacterContainer";
import CharacterForm from "./components/character-form/CharacterForm";

const Characters: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col items-center gap-4">
        <CharacterForm />
        <CharacterContainer />
      </div>
    </div>
  );
};

export default Characters;
