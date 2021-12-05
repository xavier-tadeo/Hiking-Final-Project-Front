import "./HeaderHike.scss";

const HeaderHike = (): JSX.Element => {
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
      <button className="button__logout">Logout</button>
    </header>
  );
};

export default HeaderHike;
