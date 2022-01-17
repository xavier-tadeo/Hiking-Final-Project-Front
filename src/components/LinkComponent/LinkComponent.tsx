import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import pathsHike from "../../paths/pathsHike";
import "./LinkComponent.scss";

const LinkComponent = (): JSX.Element => {
  const { userInfo } = useUser();
  const { isAuthenticated } = userInfo;

  const tokenUser = localStorage.getItem("tokenStorage");

  if (tokenUser) {
    userInfo.isAuthenticated = true;
  }

  return (
    <nav className="links__container">
      {isAuthenticated ? (
        <>
          <Link className="nav-link" to={pathsHike.homePage}>
            Home
          </Link>
          <Link className="nav-link" to={pathsHike.userProfile}>
            Profile
          </Link>
          <Link className="nav-link" to={pathsHike.createHike}>
            Create
          </Link>
        </>
      ) : (
        <>
          <Link className="nav-link" to={pathsHike.homePage}>
            Home
          </Link>
          <Link className="nav-link" to={pathsHike.registerFormPage}>
            Register
          </Link>
          <Link className="nav-link" to={pathsHike.loginFormPage}>
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default LinkComponent;
