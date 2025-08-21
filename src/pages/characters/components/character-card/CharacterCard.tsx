import { Link } from "react-router-dom";
import { useCharacterCard, CharacterCardProps } from "./hooks/useCharacterCard";
import CloseModalButton from "@components/modal/CloseModalButton";

import { Button } from "@headlessui/react";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  size = "md",
  full = false,
}) => {
  const { name, image, status, species, origin, location, gender, type } =
    character;
  const {
    cardClass,
    statusClass,
    handleClick,
    handleCloseModal,
    handleNavigate,
  } = useCharacterCard({
    character,
    size,
    full,
  });
  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="relative w-100 md:w-1/2">
        <img src={image} alt={name} className="w-full" />
        {full && (
          <div className="absolute top-0 right-0 flex items-center justify-end p-4 md:hidden">
            <CloseModalButton onClick={handleCloseModal} />
          </div>
        )}
        <div className="absolute bottom-0 bg-gray-800/70 text-2xl text-white flex items-center justify-between w-full md:hidden p-4">
          <div className="flex gap-1 items-center font-semibold  ">
            <div className={`rounded-full w-4 h-4 ${statusClass}`}></div>
            <span>
              {status} - {species}
            </span>
          </div>
          <span className="font-bold ">{name}</span>
        </div>
      </div>
      <div className="relative flex flex-col flex-1 gap-2 p-4">
        {full && (
          <div className="absolute top-0 right-0 flex w-full items-center justify-end p-4">
            <div className="invisible md:visible hover:bg-gray-400/50 rounded-full">
              <CloseModalButton onClick={handleCloseModal} />
            </div>
          </div>
        )}
        <div className="invisible h-0 md:h-auto md:visible flex flex-col">
          <h2 className="font-bold text-3xl md:text-xl text-gray-800">
            {name}
          </h2>
          <div className="flex gap-1 items-center font-semibold text-sm text-gray-500">
            <div className={`rounded-full w-3 h-3 ${statusClass}`}></div>
            <span>
              {status} - {species}{" "}
            </span>
          </div>
        </div>

        {full && (
          <>
            {/* Tipo */}
            {type && (
              <div className="flex flex-col text-xl md:text-sm">
                <h3 className="font-bold text-gray-600">Tipo:</h3>
                <span className="flex items-center font-semibold text-gray-500 hover:text-blue-500">
                  {type}
                </span>
              </div>
            )}
            {/* Genero */}
            <div className="flex flex-col text-xl md:text-sm">
              <h3 className="font-bold text-gray-600">Genero:</h3>
              <span className="flex items-center font-semibold text-gray-500 hover:text-blue-500">
                {gender}
              </span>
            </div>
          </>
        )}
        {/* Origen */}
        <div className="flex flex-col text-xl md:text-sm">
          <h3 className="font-bold text-gray-600">Origen: </h3>
          <Link
            to="/"
            className="flex items-center font-semibold text-gray-500 hover:text-blue-500"
          >
            {origin.name}
          </Link>
        </div>
        {/* Ultimo lugar visto */}
        <div className="flex flex-col text-xl md:text-sm">
          <h3 className="font-bold text-gray-600">Visto por ultima vez en: </h3>
          <Link
            to="/"
            className="flex items-center font-semibold text-gray-500 hover:text-blue-500"
          >
            {location.name}
          </Link>
        </div>
        {/* Enlace a la pagina del personaje */}
        {full && (
          <div className="flex flex-1 justify-center mt-4 md:mt-0 md:justify-end items-end">
            <Button
              onClick={handleNavigate}
              className="bg-blue-600 border-2 border-blue-600 text-white font-bold hover:bg-blue-500 hover:cursor-pointer rounded-xl p-2"
            >
              Capitulos donde aparece
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
