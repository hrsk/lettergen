import { Main } from "@/app";
import { Dashboard, LettersGenerator } from "@/widgets";
import { HashRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        >
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path='/generation'
            element={<LettersGenerator />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
