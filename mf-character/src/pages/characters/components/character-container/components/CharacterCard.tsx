import { setCurrentCharacter, setIsModalOpen } from "@/app/features/characterSlice";
import { useAppDispatch } from "@/app/features/hooks";
import { Character } from "@/types/characterTypes";
import { Link } from "react-router-dom";

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Alive":
      return "bg-green-500";
    case "Dead":
      return "bg-red-500";
    case "unknown":
    default:
      return "bg-gray-500";
  }
};

const CharacterCard: React.FC<Character> = ({
  id,
  name,
  status,
  species,
  location,
  image,
  origin,
  created,
  episode,
  gender,
  type,
  url,
}) => {
  const statusColor = getStatusColor(status);

  const dispatch = useAppDispatch();

  const handleClick = () =>{
    dispatch(
      setCurrentCharacter({
        id,
        name,
        status,
        species,
        gender,
        type,
        url,
        location,
        image,
        origin,
        created,
        episode,
      })
    )
    dispatch(setIsModalOpen(true));
  }

  return (
    <div onClick={handleClick} className="sm:w-full lg:w-md hover:scale-105 hover:cursor-pointer rounded-xl bg-white overflow-hidden border-2 border-gray-300 shadow-xl box-border">
      <div className="flex">
        <img src={image} alt={name} className="w-50 h-50" />
        <div className="flex flex-col gap-2 py-3 px-4 pb-0">
          <div>
            <h2 className="font-bold text-gray-800 text-xl">{name}</h2>
            <div className="flex gap-2 items-center">
              <div className={`rounded-full w-3 h-3 ${statusColor}`}></div>
              <span className="text-gray-600 font-semibold text-sm">
                {status} - {species}
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-800">Origen:</h3>
            <Link
              to="/"
              className="hover:text-blue-500 font-semibold text-xs  text-gray-600"
            >
              {origin.name}
            </Link>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-800">
              Ultima ubicación conocida:{" "}
            </h3>
            <Link
              to="/"
              className="hover:text-blue-500 font-semibold text-xs text-gray-600"
            >
              {location.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
