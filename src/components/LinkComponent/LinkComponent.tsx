import { Link } from "react-router-dom";
// import useUser from "../../hooks/useUser";
import paths from "../../paths/pathsHike";
import "./LinkComponent.scss";

const LinkComponent = (): JSX.Element => {
  // const { register } = useUser();
  return (
    <nav className="links__container">
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
          Home
        </Link>
        <Link className="nav-link" to={paths.registerFormPage}>
          Register
        </Link>
        <Link className="nav-link" to={paths.loginFormPage}>
          Login
        </Link>
        <Link className="nav-link" to={paths.mapPage}>
          Map
        </Link>
      </>
      {/* )} */}
    </nav>
  );
};

export default LinkComponent;
