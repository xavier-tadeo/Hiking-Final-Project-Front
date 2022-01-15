import jwtDecode from "jwt-decode";

export const lookLocalStorage = () => {
  const tokenUser: any = localStorage.getItem("tokenStorage");
  const userToken = JSON.parse(tokenUser);
  const tokenDecode: any = jwtDecode(userToken.token);

  return { tokenDecode };
};
