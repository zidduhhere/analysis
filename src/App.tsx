import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnalyzePage from "./pages/AnalyzePage";
import RoutinePage from "./pages/RoutinePage";
import NudgesPage from "./pages/NudgesPage";
import InsurancePage from "./pages/InsurancePage";

import SecretSaucePage from "./pages/SecretSaucePage";
import ScorePage from "./pages/secrets/ScorePage";
import LocationPage from "./pages/secrets/LocationPage";
import FoodPage from "./pages/secrets/FoodPage";
import OffersPage from "./pages/secrets/OffersPage";
import PreventionPage from "./pages/secrets/PreventionPage";
import BusinessModelPage from "./pages/BusinessModelPage";
import RoadmapPage from "./pages/RoadmapPage";
import BusinessPlanPage from "./pages/BusinessPlanPage";
import FundUtilisationPage from "./pages/FundUtilisationPage";

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

          <Route path="/secret-sauce" element={<SecretSaucePage />} />
          <Route path="/secret-sauce/score" element={<ScorePage />} />
          <Route path="/secret-sauce/location" element={<LocationPage />} />
          <Route path="/secret-sauce/food" element={<FoodPage />} />
          <Route path="/secret-sauce/offers" element={<OffersPage />} />
          <Route path="/secret-sauce/prevention" element={<PreventionPage />} />

          <Route path="/business-model" element={<BusinessModelPage />} />
          <Route path="/milestones" element={<RoadmapPage />} />
          <Route path="/business-plan" element={<BusinessPlanPage />} />
          <Route path="/fund-utilisation" element={<FundUtilisationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
