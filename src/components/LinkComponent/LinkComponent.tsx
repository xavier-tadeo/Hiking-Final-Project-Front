import { Link } from "react-router-dom";
// import useUser from "../../hooks/useUser";
import paths from "../../paths/pathsHike";
import "./LinkComponent.scss";

const LinkComponent = (): JSX.Element => {
  // const { register } = useUser();
  return (
    <header className="links__container">
      {/* {register.isAuthenticated ? ( */}
      <>
        {/* <Link className="nav-link" to={paths.homePage}>
          USERS
        </Link>
        <Link className="nav-link" to={paths.logout}>
          LOGOUT
        </Link> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <> */}
        <Link className="nav-link" to={paths.homePage}>
          HOME
        </Link>
        <Link className="nav-link" to={paths.registerFormPage}>
          REGISTER
        </Link>
        <Link className="nav-link" to={paths.loginFormPage}>
          LOGIN
        </Link>
        <Link className="nav-link" to={paths.mapPage}>
          MAP
        </Link>
      </>
      {/* )} */}
    </header>
  );
};

export default LinkComponent;
