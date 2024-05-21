// components
import Hero from "../sections/Hero";
import SearchSection from "../sections/SearchSection";
import NewCoursesSection from "../sections/NewCoursesSection";
import Info from "../sections/Info";
import BestCoursesSection from "../sections/BestCoursesSection";
import AdviceSection from "../sections/AdviceSection";
import NewProductsSection from "../sections/NewProductsSection";
import WhySection from "../sections/WhySection";
import FreeCoursesSection from "../sections/FreeCoursesSection";
import StatisticsSection from "../sections/StatisticsSection";
import ColleagueSection from "../sections/ColleagueSection";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <SearchSection />
      <NewCoursesSection />
      <Info />
      <BestCoursesSection />
      <AdviceSection />
      <NewProductsSection />
      <WhySection />
      <FreeCoursesSection />
      <StatisticsSection />
      <ColleagueSection />
    </>
  );

  return content;
}
