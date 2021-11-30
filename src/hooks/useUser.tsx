import { useDispatch, useSelector } from "react-redux";
import {
  getHikeThunks,
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const { login, hiking } = useSelector(({ login, hiking }: any) => ({
    login,
    hiking,
  }));

  const dispatch = useDispatch();

  const loginUser = (userLogin: any) => {
    dispatch(loginUserThunks(userLogin));
  };

  const registerUser = (userRegister: any) => {
    dispatch(registerUserThunks(userRegister));
  };

  const getHiking = (hikingGet: any) => {
    dispatch(getHikeThunks(hikingGet));
  };

  return {
    login,
    hiking,
    loginUser,
    registerUser,
    getHiking,
  };
};

export default useUser;
