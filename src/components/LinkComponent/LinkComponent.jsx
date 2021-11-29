import { Link } from "react-router-dom";
// import useUser from "../../hooks/useUser";
import paths from "../../paths/pathsHike";

const LinkComponent = () => {
  // const { register } = useUser();
  return (
    <header className="linksPages">
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
        <Link className="nav-link" to={paths.loginFormPage}>
          LOGIN
        </Link>
        <Link className="nav-link" to={paths.registerFormPage}>
          REGISTER
        </Link>
      </>
      {/* )} */}
    </header>
  );
};

export default LinkComponent;
