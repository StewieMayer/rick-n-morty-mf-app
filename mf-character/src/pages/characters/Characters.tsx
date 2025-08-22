import CharacterPaginator from "./components/character-paginator/CharacterPaginator";
import CharacterContainer from "./components/character-container/CharacterContainer";
import CharacterForm from "./components/character-form/CharacterForm";

const Characters: React.FC = () => {
  return (
    <div className="flex flex-col">
      <CharacterForm />
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center gap-4">
          <CharacterContainer />
          <CharacterPaginator />
        </div>
      </div>
    </div>
  );
};

export default Characters;
