import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderHike from "./components/HeaderHike/HeaderHike";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import pathsHike from "./paths/pathsHike";
import { Toaster } from "react-hot-toast";
import CardPageDetails from "./pages/CardPageDetails/CardPageDetails";
import CreateHikePage from "./pages/CreateHikePage/CreateHikePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";

function App(): JSX.Element {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <BrowserRouter>
        <HeaderHike />
        <Routes>
          <Route path={pathsHike.bestRoutes} element={<HomePage />}></Route>
          <Route
            path={pathsHike.registerFormPage}
            element={<RegisterPage />}
          ></Route>
          <Route path={pathsHike.loginFormPage} element={<LoginPage />}></Route>

          <Route
            path={pathsHike.hikeCard}
            element={<CardPageDetails />}
          ></Route>
          <Route
            path={pathsHike.createHike}
            element={<CreateHikePage />}
          ></Route>
          <Route path={pathsHike.userProfile} element={<ProfilePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
