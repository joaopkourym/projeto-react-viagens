import { Routes, Route } from "react-router-dom";
import TravelNavbar from "./components/TravelNavbar.jsx";
import TravelFooter from "./components/TravelFooter.jsx";

import Home from "./pages/Home.jsx";
import Destinos from "./pages/Destinos.jsx";
import Pacotes from "./pages/Pacotes.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="app-container">
      <TravelNavbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/pacotes" element={<Pacotes />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <TravelFooter />
    </div>
  );
}

export default App;
