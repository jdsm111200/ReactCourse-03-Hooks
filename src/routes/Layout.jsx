import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";

export const Layout = () => {
  return (
    <div className="row">
      <NavBar />

      <div className="row px-5 py-3">
        <Outlet />
      </div>
    </div>
  );
};
