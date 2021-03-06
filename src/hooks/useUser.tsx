import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../redux/actions/actionCreator";
import {
  deleteHikeThunk,
  getCurrentHikeThunk,
  getHikeThunks,
  getUserThunk,
  loginUserThunks,
  postHikeThunk,
  registerUserThunks,
  updateHikeTunk,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const {
    login: userInfo,
    hiking: hikingInfo,
    currentHike,
    user,
  } = useSelector(({ login, hiking, currentHike, user }: any) => ({
    login,
    hiking,
    currentHike,
    user,
  }));

  const dispatch = useDispatch();

  const loginUser = (userLogin: any) => {
    dispatch(loginUserThunks(userLogin));
  };

  const registerUser = (userRegister: any) => {
    dispatch(registerUserThunks(userRegister));
  };

  const getHiking = useCallback(() => {
    dispatch(getHikeThunks());
  }, [dispatch]);

  const getCurrentHike = useCallback(
    (id) => {
      dispatch(getCurrentHikeThunk(id));
    },
    [dispatch]
  );

  const postCurretHike = (hike: object) => {
    dispatch(postHikeThunk(hike));
  };

  const updateCurrentHike = (hike: object, id: string) => {
    dispatch(updateHikeTunk(hike, id));
  };

  const deleteCurrentHike = (id: string) => {
    dispatch(deleteHikeThunk(id));
  };

  const getUser = useCallback(
    (id: string) => {
      dispatch(getUserThunk(id));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logoutUserAction());
  }, [dispatch]);

  return {
    user,
    userInfo,
    hikingInfo,
    currentHike,
    loginUser,
    registerUser,
    getHiking,
    getCurrentHike,
    postCurretHike,
    updateCurrentHike,
    deleteCurrentHike,
    getUser,
    logoutUser,
  };
};

export default useUser;
