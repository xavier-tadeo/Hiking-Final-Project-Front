import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import HeaderHike from "./components/HeaderHike/HeaderHike";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import paths from "./paths/pathsHike";

function App(): JSX.Element {
  return (
    <>
      <HeaderHike />
      <BrowserRouter>
        <Routes>
          <Route
            path={paths.registerFormPage}
            element={<RegisterPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
