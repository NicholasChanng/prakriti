import { Link } from "react-router-dom";
import Logo from "../../Logo/logo";
import "./header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="navbar">
        <Logo />
        <span>PRAKRITI</span>
        <div className="navbar-links">
          <Link>Team</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
}
