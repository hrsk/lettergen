import { Main } from "@/app";
import { ROUTES_PATHS } from "@/shared/config";
import { Dashboard, LettersGenerator } from "@/widgets";
import { HashRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={ROUTES_PATHS.MAIN}
          element={<Main />}
        >
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path={ROUTES_PATHS.GENERATION}
            element={<LettersGenerator />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
