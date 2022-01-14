import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormElement } from "../components/LoginForm/LoginForm";
import { IForm } from "../interfaces/interfaces";
import pathsHike from "../paths/pathsHike";
import useUser from "./useUser";

export const useFormLogin = () => {
  const initialData: IForm = {
    name: "",
    password: "",
  };

  const { loginUser } = useUser();

  const [userData, setUserData] = useState(initialData);
  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (userData.name !== "" && userData.password !== "") {
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

  const onLoginUp = (evt: FormElement) => {
    evt.preventDefault();
    loginUser(userData);
    setUserData(initialData);
    navigate(pathsHike.homePage);
  };

  return {
    onLoginUp,
    onChange,
    userData,
    isDisable,
  };
};
