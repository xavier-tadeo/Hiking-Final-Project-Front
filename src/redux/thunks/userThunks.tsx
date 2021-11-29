import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_URL;

export const loginUserThunks = (user: any) => async (dispatch: any) => {
  const response = await axios.post(`${urlApi}user/login`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const userDecode: any = jwtDecode(token);
    localStorage.setItem("tokenStorage", JSON.stringify({ token }));
    dispatch(loginUserAction(userDecode));
  }
};
