import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

import TeamInsights from "./components/TeamInsights";
import SurveyCharts from "./components/SurveyCharts";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Insights />
        <SurveyCharts />
        <TeamInsights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
