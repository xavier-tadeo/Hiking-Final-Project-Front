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
      {isAuthenticated ? (
        <>
          <Link
            className="nav-link"
            to={pathsHike.homePage}
            onClick={handleCloseModal}
          >
            Home
          </Link>
          <Link className="nav-link" to={pathsHike.userProfile}>
            Profile
          </Link>
          <Link className="nav-link" to={pathsHike.createHike}>
            Create
          </Link>
          <Link className="nav-link" to={pathsHike.homePage}>
            Favorite
          </Link>
          <Link className="nav-link" to={pathsHike.mapPage}>
            Map
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
          <Link className="nav-link" to={pathsHike.mapPage}>
            Map
          </Link>
        </>
      )}
    </div>
  );
};

export default LinkComponent;
