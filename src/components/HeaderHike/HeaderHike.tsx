import useUser from "../../hooks/useUser";
import "./HeaderHike.scss";

const HeaderHike = (): JSX.Element => {
  const { userInfo } = useUser();

  const logoutUser = () => {
    userInfo.isAuthenticated = false;
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
        <button className="button__logout" onClick={logoutUser}>
          Logout
        </button>
      ) : (
        ""
      )}
    </header>
  );
};

export default HeaderHike;
