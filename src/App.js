import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Mission from "../src/components/Format/Mission Statement/mission"
import About from "../src/components/Format/About/about"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/mission-statement' element={<Mission/>} />
        <Route path='/about' element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;
