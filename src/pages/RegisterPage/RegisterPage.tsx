import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegisterPage.scss";
import "@fontsource/architects-daughter";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <div className="registerform">
        <h2 className="registerform__title animate__animated animate__bounceInDown">
          hiKing
        </h2>
        <h3 className="registerform__subtitle animate__animated animate__bounceInDown">
          Register
        </h3>
        <p className="registerform__text animate__animated animate__backInLeft">
          Welcome to the best walking routes, where you can enjoy nature.You
          want to create your own routes. Register and start your way.
        </p>
        <div className="registerform__container">
          <div className="registerform__image-container">
            <div className="registerform__images">
              <img
                src="hiking1.jpg"
                className="registerform__image"
                alt="route hiking three"
              />
              <img
                src="hiking2.jpg"
                className="registerform__image"
                alt="route hiking three"
              />
            </div>
            <div className="registerform__images">
              <img
                src="hiking3.jpg"
                className="registerform__image"
                alt="route hiking three"
              />
              <img
                src="hiking4.jpg"
                className="registerform__image"
                alt="route hiking three"
              />
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
