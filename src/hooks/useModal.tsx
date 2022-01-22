import { useState } from "react";

export const useModal = () => {
  const initialValue = true;
  const [openModal, setOpenModal] = useState(initialValue);
  console.log(openModal);
  return { openModal, setOpenModal };
};
