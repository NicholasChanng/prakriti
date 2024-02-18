import { Link } from "react-router-dom";
import Logo from "../../Logo/logo";
import "./header.css";

export default function Header() {
  return (
    <div className="container navbar">
      <div className="navbar-logo">
        <Logo />
        <span>PRAKRITI</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
