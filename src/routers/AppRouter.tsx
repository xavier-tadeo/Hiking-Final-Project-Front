import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderHike from "../components/HeaderHike/HeaderHike";

import { DashboardRoutes } from "./DashboardRoutes";
import pathsHike from "../paths/pathsHike";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={pathsHike.headerPage} element={<HeaderHike />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
