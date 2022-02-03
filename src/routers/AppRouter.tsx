import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";
import pathsHike from "../paths/pathsHike";
import { InitialPage } from "../pages/InitialPage/InitialPage";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={pathsHike.headerPage} element={<InitialPage />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
