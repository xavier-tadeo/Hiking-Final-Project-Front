import { useDispatch, useSelector } from "react-redux";
import {
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const { login } = useSelector(({ login }: any) => ({
    login,
  }));

  const dispatch = useDispatch();

  const loginUser = (userLogin: any) => {
    dispatch(loginUserThunks(userLogin));
  };

  const registerUser = (userRegister: any) => {
    dispatch(registerUserThunks(userRegister));
  };

  return {
    login,
    loginUser,
    registerUser,
  };
};

export default useUser;
