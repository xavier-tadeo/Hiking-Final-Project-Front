import { useEffect } from "react";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
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
      <ProfileCard user={user} />
    </div>
  );
};

export default ProfilePage;
