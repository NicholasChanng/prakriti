import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../../components/Logo/logo";
import github from "../../../assets/img/github.png";

export default function Footer() {
  return (
    <section data-aos="fade-in">
      <div className="container footer">
        <div className="footer-logo">
          <Logo />
          <span>BUMI</span>
        </div>
        <div className="footer-links">
          <div className="pages">
            <span>Pages</span>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://drive.google.com/drive/folders/1uO0qqN3DEtPRdGpsAcZNp-p2McN1qR02?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
        <span className="copyright">&copy;{new Date().getFullYear()} BUMI</span>
        <a
          className="github"
          href="https://github.com/NicholasChanng/prakriti"
          target="_blank"
          rel="noreferrer"
        >
          <img id="github" src={github} alt="github" />
        </a>
      </div>
    </section>
  );
}
