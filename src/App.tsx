import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./app/shared/layouts/RootLayout";
import { Home } from "./app/home/Home";
import { TestingFuncional } from "./app/testing-funcional/TestingFuncional";
import { ApiTesting } from "./app/api-testing/ApiTesting";
import { PruebasPerformance } from "./app/pruebas-de-performance/PruebasPerformance";
import { Automatizacion } from "./app/automatizacion/Automatizacion";
import { Pentesting } from "./app/pentesting/Pentesting";
import { CiCd } from "./app/ci-cd/CiCd";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="testing-funcional" element={<TestingFuncional />} />
        <Route path="api-testing" element={<ApiTesting />} />
        <Route path="pruebas-de-performance" element={<PruebasPerformance />} />
        <Route path="automatizacion" element={<Automatizacion />} />
        <Route path="pentesting" element={<Pentesting />} />
        <Route path="ci-cd" element={<CiCd />} />
      </Route>
    </Routes>
  );
}

export default App;
