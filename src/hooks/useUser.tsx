import { useDispatch, useSelector } from "react-redux";
import { loginUserThunks } from "../redux/thunks/userThunks";

const useUser = () => {
  const { login } = useSelector(({ login }: any) => ({
    login,
  }));

  const dispatch = useDispatch();

  const loginUser = (userLogin: any) => {
    dispatch(loginUserThunks(userLogin));
  };

  return {
    login,
    loginUser,
  };
};

export default useUser;
