import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Home from "./components/Format/Home/home";
import ContactForm from "./components/Format/Contact/contact";
import About from "./components/Format/About/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactForm/>} />
      </Route>
    </Routes>
  );
}

export default App;
