import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
const Modals = styled.div`
  dialog:modal {
    border: 4px solid #90b7fd;
    width: 315px;
    height: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default function Modal({ isOpen, children, onClose }) {
  const ref = useRef();
  const [backdrop, useBackdrop] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen, onClose]);
  const modalBackdropHandler = (event) => {
    if (event.target === ref.current) {
      onClose();
    }
  };
  return (
    <Modals onClick={modalBackdropHandler}>
      <dialog ref={ref}>{children}</dialog>
    </Modals>
  );
}