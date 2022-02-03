import { Routes, Route } from "react-router-dom";
import CardPageDetails from "../pages/CardPageDetails/CardPageDetails";
import CreateHikePage from "../pages/CreateHikePage/CreateHikePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import pathsHike from "../paths/pathsHike";

export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={pathsHike.bestRoutes} element={<HomePage />}></Route>
        <Route
          path={pathsHike.registerFormPage}
          element={<RegisterPage />}
        ></Route>
        <Route path={pathsHike.loginFormPage} element={<LoginPage />}></Route>

        <Route path={pathsHike.hikeCard} element={<CardPageDetails />}></Route>
        <Route path={pathsHike.createHike} element={<CreateHikePage />}></Route>
        <Route path={pathsHike.userProfile} element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
};
