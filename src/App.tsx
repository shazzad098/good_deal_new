import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SolarSolutions from "./pages/SolarSolutions";
import FireSafetySolutions from "./pages/FireSafetySolutions";
import ElectricalSolutions from "./pages/ElectricalSolutions";
import FireSafetyProductDetail from "./pages/FireSafetyProductDetail";
import SolarProductDetail from "./pages/SolarProductDetail";
import ElectricalProductDetail from "./pages/ElectricalProductDetail";
import AuthorizedAgent from "./pages/AuthorizedAgent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electrical-power-distribution" element={<ElectricalSolutions />} />
      <Route path="/electrical-power-distribution/:id" element={<ElectricalProductDetail />} />
      <Route path="/sustainable-solar-solutions" element={<SolarSolutions />} />
      <Route path="/sustainable-solar-solutions/:id" element={<SolarProductDetail />} />
      <Route path="/fire-life-safety-solutions" element={<FireSafetySolutions />} />
      <Route path="/fire-life-safety-solutions/:id" element={<FireSafetyProductDetail />} />
      <Route path="/authorized-agent" element={<AuthorizedAgent />} />
    </Routes>
  );
}
