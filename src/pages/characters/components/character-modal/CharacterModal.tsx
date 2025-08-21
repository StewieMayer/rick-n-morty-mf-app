import Modal from "@/components/modal/Modal";
import { Character } from "@/types/characterTypes";
import CharacterCard from "../character-card/CharacterCard";

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
        >
          {character && (
              <CharacterCard character={character} size="4xl" full /> 
          )}
        </Modal.Panel>
      </div>
    </Modal>
  );
};

export default CharacterModal;
