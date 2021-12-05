import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import "./ProfilePage.scss";

const ProfilePage = (): JSX.Element => {
  const { user, getUser } = useUser();

  const tokenUser: any = localStorage.getItem("tokenStorage");

  const userToken = JSON.parse(tokenUser);

  const token = userToken.token;
  const tokenDecode: any = jwtDecode(token);
  const idUser = tokenDecode.id;

  useEffect(() => {
    getUser(idUser);
  }, [getUser, idUser]);

  console.log(user);
  return (
    <div className="container__yourprofile">
      <h3 className="yourprofile__title">Your Profile</h3>
      <div className="yourprofile__container-info">
        <h6 className="yourprofile__name">NAME</h6>
        <p className="Yourprofile__name-user">{user.name}</p>
        <h6 className="yourprofile__email">Email</h6>
        <p className="Yourprofile__email-user">{user.email}</p>
        <h6 className="yourprofile__routes">Your Routes</h6>
        <p className="Yourprofile__routes-user">{user.yourRoutes}</p>
        <h6 className="yourprofile__favorite">Your Favorite Routes</h6>
        <p className="Yourprofile__favorite-user">{user.favorite}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
