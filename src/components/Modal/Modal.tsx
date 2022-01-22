import { useState } from "react";
import LinkComponent from "../LinkComponent/LinkComponent";
import "./Modal.scss";

export const Modal = () => {
  const [openModal, setOpenModal] = useState(true);

  const handleChange = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="burguer">
      {openModal ? (
        <>
          <div className="burguer__button" onClick={handleChange}></div>
          <div className="burguer__button" onClick={handleChange}></div>
          <div className="burguer__button" onClick={handleChange}></div>
        </>
      ) : (
        <LinkComponent />
      )}
    </div>
  );
};
