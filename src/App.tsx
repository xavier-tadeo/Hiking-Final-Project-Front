import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderHike from "./components/HeaderHike/HeaderHike";
import LinkComponent from "./components/LinkComponent/LinkComponent";
import LoginForm from "./components/LoginForm/LoginForm";
import HomePage from "./pages/HomePage/HomePage";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import paths from "./paths/pathsHike";

function App(): JSX.Element {
  return (
    <>
      <HeaderHike />
      <BrowserRouter>
        <LinkComponent />
        <Routes>
          <Route path={paths.homePage} element={<HomePage />}></Route>
          <Route
            path={paths.registerFormPage}
            element={<RegisterPage />}
          ></Route>
          <Route path={paths.loginFormPage} element={<LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
