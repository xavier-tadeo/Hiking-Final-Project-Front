import React from "react";
import { useCardPage } from "../../hooks/useCardPage";

export const Buttons = () => {
  const { deleteActionHike, setUpdateWant } = useCardPage();

  return (
    <div className="container__button-update-delete">
      <button className="button__update" onClick={() => setUpdateWant(true)}>
        Update
      </button>
      <button className="button__delete" onClick={deleteActionHike}>
        Delete
      </button>
    </div>
  );
};
