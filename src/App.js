import Navbar from "./components/Navbar";
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Disclaimer from './components/Disclaimer'
import OurTeams from './components/OurTeams';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Disclaimer/>}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/teams" element={<OurTeams />}></Route>
          <Route  path="*" element={<Disclaimer/>}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
