import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import pathsHike from "../../paths/pathsHike";
import "./HeaderHike.scss";

const HeaderHike = (): JSX.Element => {
  let navigate = useNavigate();
  const { userInfo, logoutUser } = useUser();

  const { isAuthenticated } = userInfo;

  const clickLogoutUser = () => {
    logoutUser();
    navigate(pathsHike.homePage);
    localStorage.removeItem("tokenStorage");
  };

  return (
    <header className="header">
      <div className="header__icon">
        <img
          src="three3.jpg  "
          alt="logo hiking"
          className="header__icon-logo"
        />
      </div>
      <h1 className="header__title animate__animated animate__bounce">
        hiKing
      </h1>

      <div className="header__container-logout">
        {isAuthenticated === true && (
          <img
            src="logout.png"
            alt="logout door"
            className="header__icon-door"
            onClick={clickLogoutUser}
          />
        )}
      </div>
    </header>
  );
};

export default HeaderHike;
