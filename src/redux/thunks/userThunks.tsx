import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import {
  currentHikeAction,
  getHikesAction,
  getUserAction,
  loginUserAction,
  postHikeAction,
  registerUserAction,
  updateHikeAction,
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
    toast.success("Successfully register!");
  }
};

export const getHikeThunks = () => async (dispatch: any) => {
  const hikings = await axios.get(`${urlApi}hike/get`);

  dispatch(getHikesAction(hikings.data));
};

export const getCurrentHikeThunk = (id: string) => async (dispatch: any) => {
  const currentHike = await axios.get(`${urlApi}hike/get/${id}`);
  dispatch(currentHikeAction(currentHike.data));
};

export const postHikeThunk = (hike: object) => async (dispatch: any) => {
  try {
    const storageUser: any = localStorage.getItem("tokenStorage");
    const { token } = JSON.parse(storageUser);
    const createHike = await axios.post(`${urlApi}hike/create`, hike, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (createHike.status === 201) {
      toast.success("Successfully Create Hike");
      dispatch(postHikeAction(createHike.data));
    }
  } catch {
    toast.error("You don't can't");
  }
};

export const updateHikeTunk =
  (hike: any, id: string) => async (dispatch: any) => {
    try {
      const storageUser: any = localStorage.getItem("tokenStorage");
      const { token } = JSON.parse(storageUser);
      const createHike = await axios.patch(`${urlApi}hike/update/${id}`, hike, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (createHike.status === 200) {
        dispatch(updateHikeAction(createHike.data));
        toast.success("Successfully Hike Update");
      }
    } catch {
      toast.error("You don't can't");
    }
  };

export const deleteHikeThunk = (id: string) => async (dispatch: any) => {
  try {
    const storageUser: any = localStorage.getItem("tokenStorage");
    const { token } = JSON.parse(storageUser);
    const deleteHike = await axios.delete(`${urlApi}hike/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (deleteHike.status === 200) {
      dispatch(updateHikeAction(deleteHike.data));
      toast.success("Successfully Hike Delete");
    }
  } catch {
    toast.error("You don't can't");
  }
};

export const getUserThunk = (id: string) => async (dispatch: any) => {
  const storageUser: any = localStorage.getItem("tokenStorage");
  const { token } = JSON.parse(storageUser);
  const getUser = await axios.get(`${urlApi}user/oneUser/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (getUser.status === 200) {
    dispatch(getUserAction(getUser.data));
  }
};
