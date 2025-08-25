import { Character } from "@/types/characterTypes";
import { Button } from "@headlessui/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

interface CharacterDetailCardProps {
  character: Character;
  backToCharacters: VoidFunction;
}

const CharacterDetailCard: React.FC<CharacterDetailCardProps> = ({
  character,
  backToCharacters,
}) => {
  const { image, name, gender, species, type, status, origin, location } =
    character;

  return (
    <div className="flex flex-col gap-2 justify-center text-gray-700">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">{name}</h3>
        <Button
          onClick={backToCharacters}
          className="bg-gray-400 border-2 text-white p-2 flex items-center justify-center cursor-pointer rounded-full hover:bg-blue-500"
        >
          <ArrowUturnLeftIcon className="size-4" />
        </Button>
      </div>
      <img src={image} alt={name} className="rounded-xl" />
      <div className="flex flex-col items-start px-2 text-md text-gray-600">
        <div className="flex gap-1">
          <h3 className="font-bold">Genero:</h3>
          <span className="font-semibold">{gender}</span>
        </div>
        <div className="flex gap-1">
          <h3 className="font-bold">Especie:</h3>
          <span className="font-semibold">{species}</span>
        </div>
        <div className="flex gap-1">
          <h3 className="font-bold">Tipo:</h3>
          <span className="font-semibold">{type}</span>
        </div>
        <div className="flex gap-1">
          <h3 className="font-bold">Estado:</h3>
          <span className="font-semibold">{status}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Origen:</h3>
          <Link
            to={`/locations/${origin.url.split("/").pop()}`}
            className="font-semibold hover:text-blue-500 cursor-pointer"
          >
            {origin.name}
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Ultima ubicación conocida:</h3>
          <Link
            to={`/locations/${location.url.split("/").pop()}`}
            className="font-semibold hover:text-blue-500 cursor-pointer"
          >
            {location.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailCard;
