import Footer from "../Footer/footer";
import Hackathon from "../Hackathon/hackathon";
import Header from "../Header/header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Hackathon />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
