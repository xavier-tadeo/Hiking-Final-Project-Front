import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegisterPage.scss";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <h3 className="register__title">Register</h3>
      <div className="register__form">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
