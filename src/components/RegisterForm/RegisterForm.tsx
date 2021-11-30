import { useState } from "react";
import useUser from "../../hooks/useUser";
import "./RegisterForm.scss";

type FormElement = React.FormEvent<HTMLFormElement>;

interface IForm {
  name: string;
  password: string;
  email: string;
}

const RegisterForm = (): JSX.Element => {
  const initialData: IForm = {
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

  const onSignUp = (evt: FormElement) => {
    evt.preventDefault();
    registerUser(userData);
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
            type="email"
            className="register__email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={(evt) => onChange(evt)}
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
