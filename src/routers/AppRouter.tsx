import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderHike from "../components/HeaderHike/HeaderHike";
import pathsHike from "../paths/pathsHike";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={pathsHike.headerPage} element={<HeaderHike />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
