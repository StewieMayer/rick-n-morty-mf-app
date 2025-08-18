import Modal from "@/components/modal/Modal";
import { Character } from "@/types/characterTypes";
import customKey from "@/utils/customKey";
import { Link } from "react-router-dom";

interface CharacterModalProps {
  open: boolean;
  onClose: VoidFunction;
  character: Character | null;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  open,
  onClose,
  character,
}) => {
  return (
    <Modal open={open} onClose={onClose} cn="relative z-10">
      <Modal.Backdrop
        transition
        className={`
            fixed 
            inset-0
            bg-black/50 
            transition-opacity 
            data-closed:opacity-0 
            data-enter:duration-300 
            data-enter:ease-out 
            data-leave:duration-200 
            data-leave:ease-in`}
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <Modal.Panel
          transition
          className="w-md lg:w-3xl bg-white rounded-2xl overflow-hidden box-border-shadow-lg flex flex-col lg:flex-row"
        >
          {character && (
            <>
              <div className="relative">
                <img
                  src={character.image}
                  alt={customKey([character.id, character.name])}
                  className="w-full lg:w-sm"
                />
                <Modal.Title className="absolute w-full bottom-0 bg-black/50 text-3xl font-bold text-shadow-blue-500 text-white text-right p-3">
                  {character.name}
                </Modal.Title>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div>
                  <h3 className="font-bold text-sm text-gray-800">Origen:</h3>
                  <Link
                    to="/"
                    className="hover:text-blue-500 font-semibold text-xs  text-gray-600"
                  >
                    {character.origin.name}
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-800">Genero:</h3>
                    <span>{character.gender}</span>
                </div>
              </div>
            </>
          )}
        </Modal.Panel>
      </div>
    </Modal>
  );
};

export default CharacterModal;
