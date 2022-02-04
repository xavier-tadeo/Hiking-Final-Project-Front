import { useFormRegister } from "../../hooks/useFormRegister";
import "./RegisterForm.scss";
import "@fontsource/roboto";

const RegisterForm = (): JSX.Element => {
  const { isDisable, onChange, onSignUp, userData } = useFormRegister();

  const { name, lastName, userName, password, age, email, birthday } = userData;

  return (
    <>
      <form
        className="register"
        noValidate
        autoComplete="off"
        onSubmit={onSignUp}
      >
        <div className="register__container">
          <label className="register__nameLabel" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            className="register__name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <label className="register__lastLabel" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className="register__lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
          />
          <label className="register__userLabel" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            className="register__userName"
            id="userName"
            placeholder="User Name"
            value={userName}
            onChange={onChange}
          />
          <label className="register__passwordLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="register__password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <label className="register__emailLabel" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="mariogl@mariogl.com"
            className="register__email"
            value={email}
            onChange={onChange}
          />

          <label htmlFor="age" className="form__agelabel">
            Age
          </label>
          <input
            type="number"
            className="form__ageinput"
            id="age"
            placeholder="Your birthday"
            min={18}
            max={100}
            value={age}
            onChange={onChange}
          />
          <label className="create-route__images-label" htmlFor="images">
            Picture
          </label>
          <input
            type="file"
            name="filefield"
            multiple
            className="create-route__images"
            id="images"
            placeholder="Images"
            onChange={onChange}
          />
          <label htmlFor="birthday" className="form__datelabel">
            Your birthday
          </label>
          <input
            type="date"
            className="form__dateinput"
            id="birthday"
            placeholder="Your birthday"
            value={birthday}
            onChange={onChange}
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
