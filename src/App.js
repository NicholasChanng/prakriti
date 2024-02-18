import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Home from "./components/Format/Home/home";
<<<<<<< Updated upstream
import ContactForm from "./components/Format/Contact/contact";
import About from "./components/Format/About/about";
=======
import About from "./components/Format/About/about";
import ContactForm from "./components/Format/Contact/contact";
>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactForm/>} />
=======
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
>>>>>>> Stashed changes
      </Route>
    </Routes>
  );
}

export default App;
