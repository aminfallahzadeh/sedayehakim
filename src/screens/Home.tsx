// components
import Hero from "../sections/Hero";
import SearchSection from "../sections/SearchSection";
import CoursesSection from "../sections/CoursesSection";
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
      <CoursesSection />
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
