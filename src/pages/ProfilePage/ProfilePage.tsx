import jwtDecode from "jwt-decode";
import { couldStartTrivia } from "typescript";
import useUser from "../../hooks/useUser";
import "./ProfilePage.scss";

const ProfilePage = (): JSX.Element => {
  const { user, getUser } = useUser();

  const tokenUser: any = localStorage.getItem("tokenStorage");
  let token;
  let idUser;
  if (tokenUser) {
    const userToken = JSON.parse(tokenUser);
    token = userToken.token;
    const tokenDecode: any = jwtDecode(token);
    idUser = tokenDecode.id;
    console.log(idUser);
  }
  console.log(user);
  return (
    <div className="container__yourprofile">
      <h3 className="yourprofile__title">Your Profile</h3>
    </div>
  );
};

export default ProfilePage;
