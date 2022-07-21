import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav  from "./components/Nav";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {
  return (
        
    <BrowserRouter>
    <Nav/>
        <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
