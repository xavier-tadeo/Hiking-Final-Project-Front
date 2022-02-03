import { useModal } from "../../hooks/useModal";
import LinkComponent from "../LinkComponent/LinkComponent";
import "./Modal.scss";

export const Modal = () => {
  const { openModal, setOpenModal } = useModal();

  const handleChange = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="burguer" onClick={handleChange}>
      <>
        <div className="burguer__button disable"></div>
        <div className="burguer__button disable"></div>
        <div className="burguer__button disable"></div>
      </>
      {!openModal && <LinkComponent />}
    </div>
  );
};
