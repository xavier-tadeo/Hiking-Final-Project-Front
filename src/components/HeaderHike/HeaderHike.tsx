import "./HeaderHike.scss";

const HeaderHike = (): JSX.Element => {
  return (
    <div className="container__header">
      <div className="header__icon">
        <img
          src="hikingIcon.png"
          alt="logo hiking"
          className="header__icon-logo"
        />
      </div>
      <h1 className="header__title">hiKing</h1>
    </div>
  );
};

export default HeaderHike;
