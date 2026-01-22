import React from "react";
import Hero from "../components/Hero";
import ProblemStatement from "../components/ProblemStatement";
import UserAnalysis from "../components/UserAnalysis";
import SolutionNavigator from "../components/SolutionNavigator";
import Insights from "../components/Insights";
import SurveyCharts from "../components/SurveyCharts";
import TeamInsights from "../components/TeamInsights";

const Home: React.FC = () => {
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
