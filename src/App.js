import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Home from "./components/Format/Home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
