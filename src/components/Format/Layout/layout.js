import Header from "../Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}