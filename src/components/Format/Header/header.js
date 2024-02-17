import { Link } from "react-router-dom";
import Logo from "../../Logo/logo";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <Logo />
        <h1>Prakriti</h1>
        <div>
          <Link>Business Model</Link>
          <Link>Team</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
}
