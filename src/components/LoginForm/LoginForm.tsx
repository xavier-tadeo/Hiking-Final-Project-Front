import { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface IForm {
  name: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const initialData: IForm = {
    name: "",
    password: "",
  };

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

  const onLoginUp = (evt: FormElement) => {
    evt.preventDefault();
  };

  return (
    <>
      <form
        className="LoginForm"
        noValidate
        autoComplete="off"
        onSubmit={onLoginUp}
      >
        <h5 className="login__title">Login</h5>
        <div className="login__container">
          <label className="login__nameLabel" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="login__name"
            id="name"
            placeholder="Name"
            value={userData.name}
            onChange={(evt) => onChange(evt)}
          />
          <label className="login__passwordLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="login__password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={(evt) => onChange(evt)}
          />
          <div className="form__button">
            <button type="submit" className="form__button" disabled={isDisable}>
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
