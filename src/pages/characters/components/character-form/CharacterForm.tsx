import { Button, Input } from "@headlessui/react";
import useCharacterForm from "./hooks/useCharacterForm";

const CharacterForm: React.FC = () => {
  const {
    name,
    species,
    status,
    isLoading,
    handleChangeName,
    handleChangeSpecies,
    handleChangeStatus,
    submit,
  } = useCharacterForm();

  return (
    <form onSubmit={submit} className="container p-4 pb-0 flex justify-center">
      <fieldset className="container mx-auto lg:w-10/12 xl:w-3xl flex border-2 border-gray-300 rounded-xl p-4 pt-2 bg-white">
        <legend className="text-xl text-gray-600 font-bold">Filtrar</legend>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-600 px-1"
            >
              Nombre:
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={handleChangeName}
              className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl p-2 font-bold text-gray-500"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="species"
              className="block text-sm/6 font-medium text-gray-600 px-1"
            >
              Especie:
            </label>
            <Input
              id="species"
              type="text"
              value={species}
              onChange={handleChangeSpecies}
              className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl p-2 font-bold text-gray-500"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="status"
              className="block text-sm/6 font-medium text-gray-600 px-1"
            >
              Estado
            </label>
            <select
              id="status"
              value={status}
              onChange={handleChangeStatus}
              className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl p-2 font-bold text-gray-500"
            >
                <option value=""></option>
                <option value="Alive">Vivo</option>
                <option value="Dead">Muerto</option>
                <option value="unknown">Desconocida</option>
            </select>
          </div>

          <div className="flex flex-col w-full md:w-1/4 md:justify-end ">
            <Button
              disabled={isLoading}
              type="submit"
              className="rounded-xl bg-blue-500 py-3 w-full text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors hover:cursor-pointer"
            >
              Filtrar
            </Button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default CharacterForm;
