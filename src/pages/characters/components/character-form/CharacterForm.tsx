import { Button, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useCharacterForm from "./hooks/useCharacterForm";

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

  return (
    <form
      onSubmit={submit}
      className="flex w-full bg-gray-700 text-gray-400 px-4 pb-0 items-center justify-end lg:justify-center"
    >
      <fieldset className="flex w-1/2 p-4 space-x-2 items-end">
        <div className="flex flex-col">
          <label htmlFor="name" className="block text-sm/6 font-medium  px-1">
            Nombre:
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={handleChangeName}
            className="border-2 bg-white border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="block text-sm/6 font-medium  px-1">
            Genero:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={handleChangeGender}
            className="border-2 bg-white border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
          >
            <option value=""></option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            <option value="genderless">Sin genero</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="species"
            className="block text-sm/6 font-medium  px-1"
          >
            Especie:
          </label>
          <Input
            id="species"
            type="text"
            value={species}
            onChange={handleChangeSpecies}
            className="border-2 bg-white border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="type" className="block text-sm/6 font-medium  px-1">
            Tipo:
          </label>
          <Input
            id="type"
            type="text"
            value={type}
            onChange={handleChangeType}
            className="border-2 bg-white border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status" className="block text-sm/6 font-medium  px-1">
            Estado
          </label>
          <select
            id="status"
            value={status}
            onChange={handleChangeStatus}
            className="border-2 bg-white border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
          >
            <option value=""></option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocida</option>
          </select>
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          className="w-8 h-8 flex items-center justify-center rounded-xl cursor-pointer bg-blue-500 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <MagnifyingGlassIcon className="size-6" />
        </Button>
      </fieldset>
    </form>
  );
};

export default CharacterForm;
