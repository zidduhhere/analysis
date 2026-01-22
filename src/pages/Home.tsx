import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import ProblemStatement from "../components/ProblemStatement";
import UserAnalysis from "../components/UserAnalysis";
import SolutionNavigator from "../components/SolutionNavigator";
import Insights from "../components/Insights";
import SurveyCharts from "../components/SurveyCharts";
import TeamInsights from "../components/TeamInsights";

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Short timeout to allow rendering to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Optional: Clean up state history so refreshing doesn't scroll again?
      // window.history.replaceState({}, document.title)
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ProblemStatement />
      <UserAnalysis />
      <SolutionNavigator />
      <Insights />
      <SurveyCharts />
      <TeamInsights />
    </>
  );
};

export default Home;
