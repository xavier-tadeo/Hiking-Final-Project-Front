import "./ProfilePage.scss";

const ProfilePage = (userInfo: any): JSX.Element => {
  // const { user, getUser } = useUser();

  // const tokenUser: any = localStorage.getItem("tokenStorage");
  // let token;
  // let idUser: string;

  // const userToken = JSON.parse(tokenUser);
  // token = userToken.token;
  // const tokenDecode: any = jwtDecode(token);
  // idUser = tokenDecode.id;

  // useEffect(() => {
  //   getUser(idUser);
  // }, [getUser, idUser]);

  // console.log(userInfo);
  return (
    <div className="container__yourprofile">
      <h3 className="yourprofile__title">Your Profile</h3>
    </div>
  );
};

export default ProfilePage;
