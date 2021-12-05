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

  // c
  console.log(user);
  return (
    <div className="container__yourprofile">
      <h3 className="yourprofile__title">Your Profile</h3>
    </div>
  );
};

export default ProfilePage;
