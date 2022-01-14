import "./LoginForm.scss";

import { useFormLogin } from "../../hooks/useFormLogin";

export type FormElement = React.FormEvent<HTMLFormElement>;

const LoginForm = (): JSX.Element => {
  const { isDisable, onChange, onLoginUp, userData } = useFormLogin();
  return (
    <>
      <form
        className="loginForm"
        noValidate
        autoComplete="off"
        onSubmit={onLoginUp}
      >
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
