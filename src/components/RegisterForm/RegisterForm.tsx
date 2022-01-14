import { useState } from "react";
import useUser from "../../hooks/useUser";
import "./RegisterForm.scss";
import "@fontsource/roboto";
import pathsHike from "../../paths/pathsHike";
import { useNavigate } from "react-router";
import { FormElement, IFormRegister } from "../../interfaces/interfaces";

const RegisterForm = (): JSX.Element => {
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

  return (
    <>
      <form
        className="registerForm"
        noValidate
        autoComplete="off"
        onSubmit={onSignUp}
      >
        <div className="register__container">
          <label className="register__nameLabel" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="register__name"
            id="name"
            placeholder="Name"
            value={userData.name}
            onChange={(evt) => onChange(evt)}
          />
          <label className="register__passwordLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="register__password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={(evt) => onChange(evt)}
          />
          <label className="register__emailLabel" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="mariogl@mariogl.com"
            className="register__email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
            value={userData.email}
            onChange={(evt) => onChange(evt)}
            required
          />
          <div className="form__button">
            <button type="submit" className="form__button" disabled={isDisable}>
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
