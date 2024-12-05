import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Home from "./components/Format/Home/home";
import ContactForm from "./components/Format/Contact/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}

export default App;
