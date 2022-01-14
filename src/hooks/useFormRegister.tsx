import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormElement, IFormRegister } from "../interfaces/interfaces";
import pathsHike from "../paths/pathsHike";
import useUser from "./useUser";

export const useFormRegister = () => {
  const initialData: IFormRegister = {
    name: "",
    password: "",
    email: "",
  };
  const { registerUser } = useUser();

  const [userData, setUserData] = useState(initialData);
  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.password !== ""
    ) {
      setIsDisable(false);
    }
  };

  const onChange = (evt: any) => {
    setUserData({
      ...userData,
      [evt.target.id]: evt.target.value,
    });
    checkForm();
  };

  let navigate = useNavigate();

  const onSignUp = (evt: FormElement) => {
    evt.preventDefault();
    registerUser(userData);
    setUserData(initialData);
    navigate(pathsHike.loginFormPage);
  };
  return {
    onSignUp,
    onChange,
    isDisable,
    userData,
  };
};
