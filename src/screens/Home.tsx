// components
import Hero from "../sections/Hero";
import SearchSection from "../sections/SearchSection";
import CoursesSection from "../sections/CoursesSection";
import Info from "../sections/Info";
import BestCoursesSection from "../sections/BestCoursesSection";
import AdviceSection from "../sections/AdviceSection";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <SearchSection />
      <CoursesSection />
      <Info />
      <BestCoursesSection />
      <AdviceSection />
    </>
  );

  return content;
}
