import { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import LinkComponent from "../LinkComponent/LinkComponent";
import "./Modal.scss";

export const Modal = () => {
  const { openModal, setOpenModal } = useModal();

  const handleChange = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  useEffect(() => {
    setOpenModal(openModal);
  });

  return (
    <div className="burguer">
      <>
        <div className="burguer__button" onClick={handleChange}></div>
        <div className="burguer__button" onClick={handleChange}></div>
        <div className="burguer__button" onClick={handleChange}></div>
      </>
      {!openModal && <LinkComponent />}
    </div>
  );
};
