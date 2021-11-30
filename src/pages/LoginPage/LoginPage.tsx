import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <h3 className="Login__title">Register</h3>
      <div className="Login__form">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
