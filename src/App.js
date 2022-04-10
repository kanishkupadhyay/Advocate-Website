import Navbar from "./components/Navbar";
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <Router>
    <>
    <Navbar />
    <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about-us" element={<About/>}></Route>
   </Routes>
    </>
    </Router>
  );
}

export default App;
