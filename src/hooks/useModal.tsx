import { useState } from "react";

export const useModal = () => {
  const initialValue = false;
  const [openModal, setOpenModal] = useState(initialValue);

  return { openModal, setOpenModal };
};
