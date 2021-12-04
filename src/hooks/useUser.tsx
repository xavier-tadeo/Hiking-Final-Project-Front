import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteHikeThunk,
  getCurrentHikeThunk,
  getHikeThunks,
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
  } = useSelector(({ login, hiking, currentHike }: any) => ({
    login,
    hiking,
    currentHike,
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

  return {
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
  };
};

export default useUser;
