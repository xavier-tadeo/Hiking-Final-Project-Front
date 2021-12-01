import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentHikeThunk,
  getHikeThunks,
  loginUserThunks,
  registerUserThunks,
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

  return {
    userInfo,
    hikingInfo,
    currentHike,
    loginUser,
    registerUser,
    getHiking,
    getCurrentHike,
  };
};

export default useUser;
