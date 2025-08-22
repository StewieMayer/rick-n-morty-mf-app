import { Button, Input } from "@headlessui/react";
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
      className="container p-4 pb-0 flex justify-center"
    >
      <fieldset className="flex shadow-2xl box-border border-2 border-gray-300 rounded-xl p-4 pt-2 bg-white">
        <legend className="text-xl text-gray-600 text-shadow-2xs font-bold bg-white border-2 p-1 border-gray-300 rounded-lg">
          Filtrar
        </legend>
        <div className="flex flex-row sm:flex-col gap-2">
          <div className="flex flex-col w-1/2 sm:flex-row sm:w-full gap-2">
            <div className="flex flex-col w-full md:w-1/3">
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
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label
                htmlFor="gender"
                className="block text-sm/6 font-medium text-gray-600 px-1"
              >
                Genero:
              </label>
              <select
                id="gender"
                value={gender}
                onChange={handleChangeGender}
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
              >
                <option value=""></option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
                <option value="genderless">Sin genero</option>
                <option value="unknown">Desconocido</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
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
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-2">
            <div className="flex flex-col w-full md:w-1/3">
              <label
                htmlFor="type"
                className="block text-sm/6 font-medium text-gray-600 px-1"
              >
                Tipo:
              </label>
              <Input
                id="type"
                type="text"
                value={type}
                onChange={handleChangeType}
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
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
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-xl py-1 px-2 font-bold text-gray-500"
              >
                <option value=""></option>
                <option value="alive">Vivo</option>
                <option value="dead">Muerto</option>
                <option value="unknown">Desconocida</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-1/3 flex-1 sm:flex-auto justify-end">
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full size-9 rounded-xl cursor-pointer bg-blue-500 text-white font-bold disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
              >
                Filtrar
              </Button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default CharacterForm;
