import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegisterPage.scss";
import "@fontsource/architects-daughter";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <div className="container__registerform">
        <h3 className="register__title">Register</h3>
        <div className="register__form">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
