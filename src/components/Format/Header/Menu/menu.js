import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>

      <aside className="links-container">
        <nav className="links">
          <Link className="aCool" to="/">
            Home
          </Link>
          <Link className="aCool" to="/contact">
            Contact
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1uO0qqN3DEtPRdGpsAcZNp-p2McN1qR02?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </nav>
      </aside>
    </div>
  );
}
