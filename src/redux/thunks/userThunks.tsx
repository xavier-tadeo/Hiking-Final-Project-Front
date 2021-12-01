import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import {
  currentHikeAction,
  getHikesAction,
  loginUserAction,
  registerUserAction,
} from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_URL;

export const loginUserThunks = (user: any) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${urlApi}user/login`, user);
    if (response.status === 200) {
      const token = response.data.token;
      const userDecode: any = jwtDecode(token);
      localStorage.setItem("tokenStorage", JSON.stringify({ token }));
      dispatch(loginUserAction(userDecode));
      toast.success("Successfully loged!!!");
    }
  } catch {
    toast.error("You don't can't");
  }
};

export const registerUserThunks = (user: any) => async (dispatch: any) => {
  const response = await axios.post(`${urlApi}user/register`, user);

  if (response.status === 200) {
    dispatch(registerUserAction(response.data));
  }
};

export const getHikeThunks = () => async (dispatch: any) => {
  const hikings = await axios.get(`${urlApi}hike/get`);

  dispatch(getHikesAction(hikings.data));
};

export const getCurrentHikeThunk = () => async (dispatch: any) => {
  const currentHike = await axios.get(`${urlApi}hike/get/:id`);

  dispatch(currentHikeAction(currentHike.data));
};
