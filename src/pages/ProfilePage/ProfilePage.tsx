import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import "./ProfilePage.scss";

const ProfilePage = (): JSX.Element => {
  const { user, getUser } = useUser();

  const tokenUser: any = localStorage.getItem("tokenStorage");
  console.log(tokenUser);

  const userToken = JSON.parse(tokenUser);

  const token = userToken.token;
  const tokenDecode: any = jwtDecode(token);
  const idUser = tokenDecode.id;

  useEffect(() => {
    getUser(idUser);
  }, [getUser, idUser]);

  return (
    <div className="container__yourprofile">
      <h3 className="yourprofile__title">Your Profile</h3>
      <div className="yourprofile__container-info">
        <h6 className="yourprofile__name info title">NAME</h6>
        <p className="Yourprofile__name-user info user">{user.name}</p>
        <h6 className="yourprofile__email info title">Email</h6>
        <p className="Yourprofile__email-user info user">{user.email}</p>
        <h6 className="yourprofile__routes info title">Your Routes</h6>
        <p className="Yourprofile__routes-user info user">{user.yourRoutes}</p>
        <h6 className="yourprofile__favorite info title">
          Your Favorite Routes
        </h6>
        <p className="Yourprofile__favorite-user info user">{user.favorite}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
