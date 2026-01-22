import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnalyzePage from "./pages/AnalyzePage";
import RoutinePage from "./pages/RoutinePage";
import NudgesPage from "./pages/NudgesPage";
import InsurancePage from "./pages/InsurancePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-teal-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution/analyze" element={<AnalyzePage />} />
          <Route path="/solution/routine" element={<RoutinePage />} />
          <Route path="/solution/nudges" element={<NudgesPage />} />
          <Route path="/solution/insurance" element={<InsurancePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
