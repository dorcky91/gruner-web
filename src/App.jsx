import { Navigate, Route, Routes } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ConsultoriaPage from "./pages/ConsultoriaPage";
import SolarFotovoltaicoPage from "./pages/SolarFotovoltaicoPage";
import MovilidadPage from "./pages/MovilidadPage";
import ResiduosPage from "./pages/ResiduosPage";
import NosotrosPage from "./pages/NosotrosPage";
import ProyectosPage from "./pages/ProyectosPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* HOME */}
        <Route index element={<HomePage />} />

        {/* SERVICIOS */}
        <Route path="servicios/consultoria" element={<ConsultoriaPage />} />
        <Route
          path="energia/solar-fotovoltaico"
          element={<SolarFotovoltaicoPage />}
        />
        <Route
          path="energia/carga-rapida-de-vehiculos-electricos"
          element={<MovilidadPage />}
        />
        <Route
          path="valorizacion-residuos-industriales"
          element={<ResiduosPage />}
        />

        {/* MÓDULOS */}
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="proyectos" element={<ProyectosPage />} />
        <Route path="contacto" element={<ContactoPage />} />

        {/* ALIASES / RUTAS LEGACY */}
        <Route
          path="consultoria"
          element={<Navigate to="/servicios/consultoria" replace />}
        />
        <Route
          path="residuos"
          element={
            <Navigate to="/valorizacion-residuos-industriales" replace />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
