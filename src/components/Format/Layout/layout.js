import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
