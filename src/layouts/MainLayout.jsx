import { Outlet } from "react-router";

import Navbar from "../components/layout/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      {/* Footer */}
    </>
  );
}

export default MainLayout;
