import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderHike from "./components/HeaderHike/HeaderHike";
import LinkComponent from "./components/LinkComponent/LinkComponent";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MapPage from "./pages/MapPage/MapPage";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import paths from "./paths/pathsHike";
import { Toaster } from "react-hot-toast";
import CardPageDetails from "./pages/CardPageDetails/CardPageDetails";
import CreateHikePage from "./pages/CreateHikePage/CreateHikePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App(): JSX.Element {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <HeaderHike />
      <BrowserRouter>
        <LinkComponent />
        <Routes>
          <Route path={paths.homePage} element={<HomePage />}></Route>
          <Route
            path={paths.registerFormPage}
            element={<RegisterPage />}
          ></Route>
          <Route path={paths.loginFormPage} element={<LoginPage />}></Route>
          <Route path={paths.mapPage} element={<MapPage />}></Route>
          <Route path={paths.hikeCard} element={<CardPageDetails />}></Route>
          <Route path={paths.createHike} element={<CreateHikePage />}></Route>
          <Route path={paths.userProfile} element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
