import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";
import "@fontsource/architects-daughter";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <div className="container__loginform">
        <h3 className="Login__title">Login</h3>
        <div className="Login__form">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
