import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import useUser from "../../hooks/useUser";
import pathsHike from "../../paths/pathsHike";
import "./LinkComponent.scss";

const LinkComponent = (): JSX.Element => {
  const { userInfo } = useUser();
  const { setOpenModal, openModal } = useModal();
  const { isAuthenticated } = userInfo;

  const tokenUser = localStorage.getItem("tokenStorage");

  const handleCloseModal = () => {
    setOpenModal(false);
    console.log(openModal);
  };

  if (tokenUser) {
    userInfo.isAuthenticated = true;
  }

  return (
    <div
      className={openModal ? "links__container" : "nolinks"}
      onClick={handleCloseModal}
    >
      <h3 className="link__title">Menu</h3>
      {isAuthenticated ? (
        <>
          <div className="link__container">
            <img src="home2.png" alt="" className="link__image" />
            <Link
              className="nav-link"
              to={pathsHike.homePage}
              onClick={handleCloseModal}
            >
              Home
            </Link>
          </div>
          <div className="link__container">
            <img src="profile.png" alt="" className="link__image" />
            <Link className="nav-link" to={pathsHike.userProfile}>
              Profile
            </Link>
          </div>
          <div className="link__container">
            <img src="create.png" alt="" className="link__image" />
            <Link className="nav-link" to={pathsHike.createHike}>
              Create
            </Link>
          </div>
          <div className="link__container">
            <img src="favorite.png" alt="" className="link__image" />
            <Link className="nav-link" to={pathsHike.homePage}>
              Favorite
            </Link>
          </div>
          <div className="link__container">
            <img src="map.png" alt="" className="link__image" />
            <Link className="nav-link" to={pathsHike.mapPage}>
              Map
            </Link>
          </div>
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
          <Link className="nav-link" to={pathsHike.mapPage}>
            Map
          </Link>
        </>
      )}
    </div>
  );
};

export default LinkComponent;
