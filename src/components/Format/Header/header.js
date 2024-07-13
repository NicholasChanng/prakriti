import { Link } from "react-router-dom";
import Logo from "../../Logo/logo";
import "./header.css";
import Menu from "./Menu/menu";

export default function Header() {
  return (
    <div className="container navbar">
      <div className="navbar-logo">
        <Logo />
        <span>BUMI</span>
      </div>
      <div className="navbar-links">
        <nav>
          <Link className="aCool navbar-link" to="/">
            Home
          </Link>
          <Link className="aCool navbar-link" to="/contact">
            Contact
          </Link>
          <a
            className="navbar-link aCool"
            href="https://drive.google.com/drive/folders/1uO0qqN3DEtPRdGpsAcZNp-p2McN1qR02?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </nav>
        <Menu />
      </div>
    </div>
  );
}
