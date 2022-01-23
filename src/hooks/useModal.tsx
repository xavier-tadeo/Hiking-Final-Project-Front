import { useState } from "react";

export const useModal = () => {
  const initialValue = true;
  const [openModal, setOpenModal] = useState(initialValue);

  return { openModal, setOpenModal };
};
