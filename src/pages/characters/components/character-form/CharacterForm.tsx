import { Button, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useCharacterForm from "./hooks/useCharacterForm";
import CharacterField from "./components/CharacterField";

const CharacterForm: React.FC = () => {
  const {
    name,
    gender,
    species,
    type,
    status,
    isLoading,
    handleChangeName,
    handleChangeGender,
    handleChangeSpecies,
    handleChangeType,
    handleChangeStatus,
    submit,
  } = useCharacterForm();

  const fieldClassNames =
    "bg-white w-full rounded-xl border-2 border-gray-300 py-1 px-2 font-bold text-gray-500 focus:outline-none focus:border-blue-300";

  return (
    <form
      onSubmit={submit}
      className="flex w-full bg-gray-700 text-gray-300 p-4 pt-3 items-center justify-center"
    >
      <fieldset className="flex flex-wrap md:flex-nowrap gap-2 items-center justify-center">
        <div className="flex w-full md:w-1/2 gap-2">
          <CharacterField label="Nombre:" htmlFor="name">
            <Input
              id="name"
              type="text"
              value={name}
              onChange={handleChangeName}
              className={fieldClassNames}
            />
          </CharacterField>

          <CharacterField label="Genero:" htmlFor="gender">
            <select
              id="gender"
              value={gender}
              onChange={handleChangeGender}
              className={fieldClassNames}
            >
              <option value=""></option>
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
              <option value="genderless">Sin genero</option>
              <option value="unknown">Desconocido</option>
            </select>
          </CharacterField>

          <CharacterField label="Especie:" htmlFor="species">
            <Input
              id="species"
              type="text"
              value={species}
              onChange={handleChangeSpecies}
              className={fieldClassNames}
            />
          </CharacterField>
        </div>

        <div className="flex w-full md:w-fit gap-2 items-end">
          <CharacterField label="Tipo:" htmlFor="type">
            <Input
              id="type"
              type="text"
              value={type}
              onChange={handleChangeType}
              className={fieldClassNames}
            />
          </CharacterField>

          <CharacterField label="Estado:" htmlFor="status">
            <select
              id="status"
              value={status}
              onChange={handleChangeStatus}
              className={fieldClassNames}
            >
              <option value=""></option>
              <option value="alive">Vivo</option>
              <option value="dead">Muerto</option>
              <option value="unknown">Desconocida</option>
            </select>
          </CharacterField>

          <Button
            disabled={isLoading}
            type="submit"
            className="w-1/3 md:w-9 h-9 flex items-center justify-center rounded-xl cursor-pointer bg-blue-500 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            <MagnifyingGlassIcon className="size-6" />
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default CharacterForm;
