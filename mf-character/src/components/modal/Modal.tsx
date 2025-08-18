import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  cn?: string;
  onClose: VoidFunction;
}

const Modal = ({ open, cn, onClose, children }: ModalProps) => {
  return (
    <Dialog onClose={onClose} open={open} className={cn}>
      {children}
    </Dialog>
  );
};

Modal.Backdrop = DialogBackdrop;
Modal.Panel = DialogPanel;
Modal.Title = DialogTitle;
Modal.Description = Description;

export default Modal;