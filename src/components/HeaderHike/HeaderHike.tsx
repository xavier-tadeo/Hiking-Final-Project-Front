import useUser from "../../hooks/useUser";
import "./HeaderHike.scss";

const HeaderHike = (): JSX.Element => {
  const { userInfo, logoutUser } = useUser();

  const clickLogoutUser = () => {
    logoutUser();
    localStorage.removeItem("tokenStorage");
  };
  console.log(userInfo);
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
