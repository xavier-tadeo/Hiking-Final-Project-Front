import { useFormRegister } from "../../hooks/useFormRegister";
import "./RegisterForm.scss";
import "@fontsource/roboto";

const RegisterForm = (): JSX.Element => {
  const { isDisable, onChange, onSignUp, userData } = useFormRegister();

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
