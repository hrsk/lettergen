import { Main } from "@/app";
import { Dashboard } from "@/widgets";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        >
          <Route
            index
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
