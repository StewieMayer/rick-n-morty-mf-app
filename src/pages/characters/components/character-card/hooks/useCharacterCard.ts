import {
  setCurrentCharacter,
  setIsModalOpen,
} from "@/app/features/characterSlice";
import { useAppDispatch } from "@/app/features/hooks";
import { Character } from "@/types/characterTypes";
import { useNavigate } from "react-router-dom";

export interface CharacterCardProps {
  character: Character;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  full?: boolean;
}

export const useCharacterCard = ({
  character,
  size,
  full,
}: CharacterCardProps) => {
  // Usefull Hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Card Class Constructor
  const statusClasses: Record<string, string> = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-300",
  };

  const baseClass =
    "rounded-xl overflow-hidden bg-white border-2 border-gray-300 shadow-xl box-border";
  const flexClass = "flex flex-col md:flex-row";
  const sizeClass = `sm:w-100 md:w-full ${full ? "lg:w-3xl" : "lg:w-md"}`;
  const hover = "hover:scale-105 hover:cursor-pointer";

  const cardClass = `${baseClass} ${flexClass} ${sizeClass} ${!full && hover}`;

  //Handlers
  const handleClick = () => {
    if (full) return;
    dispatch(setCurrentCharacter(character));
    dispatch(setIsModalOpen(true));
  };

  const handleCloseModal = () => {
    if (!full) return;
    dispatch(setIsModalOpen(false));
  };

  const handleNavigate = () => navigate(`/${character.id}`);

  return {
    handleClick,
    handleCloseModal,
    handleNavigate,
    statusClass: statusClasses[character.status],
    cardClass,
  };
};
