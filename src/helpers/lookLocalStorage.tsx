import jwtDecode from "jwt-decode";

export const lookLocalStorage = () => {
  const tokenUser: any = localStorage.getItem("tokenStorage");
  if (tokenUser) {
    const userToken = JSON.parse(tokenUser);
    const tokenDecode: any = jwtDecode(userToken.token);

    return { tokenDecode };
  }
  const tokenDecode = {
    id: "123456",
  };
  return { tokenDecode };
};
