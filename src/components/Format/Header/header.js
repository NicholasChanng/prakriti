import Logo from "../../logo/logo";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="navbar">
        <Logo />
        <h1>Prakriti</h1>
        <div>
          {/* <Link>Business Model</Link>
          <Link>Team</Link>
          <Link>Contact</Link> */}
        </div>
      </div>
    </header>
  );
}
