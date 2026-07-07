import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./app/shared/layouts/RootLayout";
import { Home } from "./app/home/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* Aquí irán las demás rutas */}
      </Route>
    </Routes>
  );
}

export default App;
