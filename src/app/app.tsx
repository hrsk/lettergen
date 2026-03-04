import { Main } from "@/app";
import { Dashboard, LettersGenerator } from "@/widgets";
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
          <Route
            path='/generation'
            element={<LettersGenerator />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
