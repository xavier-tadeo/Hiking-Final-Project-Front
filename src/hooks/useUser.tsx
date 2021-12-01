import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHikeThunks,
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const { login: userInfo, hiking: hikingInfo } = useSelector(
    ({ login, hiking }: any) => ({
      login,
      hiking,
    })
  );

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

  return {
    userInfo,
    hikingInfo,
    loginUser,
    registerUser,
    getHiking,
  };
};

export default useUser;
