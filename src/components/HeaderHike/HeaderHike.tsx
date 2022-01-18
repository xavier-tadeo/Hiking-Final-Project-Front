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
          src="pablo-811.png"
          alt="logo hiking"
          className="header__icon-logo"
        />
      </div>
      <h1 className="header__title">hiKing</h1>
      <img
        src="icons8-signpost-48.png"
        alt="logo hiking"
        className="header__icon-logoout"
      />
      {isAuthenticated === true ? (
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
