import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import "./HeaderHike.scss";
import pathsHike from "../../paths/pathsHike";

const HeaderHike = (): JSX.Element => {
  const { userInfo, logoutUser } = useUser();

  let navigate = useNavigate();

  const clickLogoutUser = () => {
    logoutUser();
    navigate(pathsHike.homePage);
    localStorage.removeItem("tokenStorage");
  };

  return (
    <header className="container__header">
      <div className="header__icon">
        <img
          src="hikingIcon.png"
          alt="logo hiking"
          className="header__icon-logo"
        />
      </div>
      <h1 className="header__title">hiKing</h1>
      {userInfo.isAuthenticated === true ? (
        <button className="button__logout" onClick={clickLogoutUser}>
          Logout
        </button>
      ) : (
        ""
      )}
    </header>
  );
};

export default HeaderHike;
