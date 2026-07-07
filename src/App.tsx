import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./app/shared/layouts/RootLayout";
import { Hero } from "./app/home/components/hero";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Hero />} />
        {/* Aquí irán las demás rutas */}
      </Route>
    </Routes>
  );
}

export default App;
