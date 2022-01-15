import { useEffect } from "react";
import { lookLocalStorage } from "../../helpers/lookLocalStorage";
import useUser from "../../hooks/useUser";
import "./ProfilePage.scss";

const ProfilePage = (): JSX.Element => {
  const { user, getUser } = useUser();

  const { tokenDecode } = lookLocalStorage();

  useEffect(() => {
    getUser(tokenDecode.id);
  }, [getUser, tokenDecode.id]);

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
