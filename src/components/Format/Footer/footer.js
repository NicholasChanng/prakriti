import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../../components/Logo/logo";
import github from "../../../assets/img/github.png";

export default function Footer() {
  return (
    <div className="container footer">
      <div className="footer-logo">
        <Logo />
        <span>PRAKRITI</span>
      </div>
      <div className="footer-links">
        <div className="pages">
          <span>Pages</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className=""></div>
      </div>
      <span className="copyright">
        &copy;{new Date().getFullYear()} PRAKRITIT
      </span>
      <a
        className="github"
        href="https://github.com/NicholasChanng/prakriti"
        target="_blank"
        rel="noreferrer"
      >
        <img id="github" src={github} alt="github" />
      </a>
    </div>
  );
}
