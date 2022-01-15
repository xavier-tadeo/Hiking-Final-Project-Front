import jwtDecode from "jwt-decode";

export const lookLocalStorage = () => {
  const tokenUser: any = localStorage.getItem("tokenStorage");
  console.log(tokenUser);
  const userToken = JSON.parse(tokenUser);
  const tokenDecode: any = jwtDecode(userToken.token);

  return { tokenDecode };
};
