// components
import Hero from "../sections/Hero";
import Courses from "../sections/Courses";
import Info from "../sections/Info";
import BestCoursesSection from "../sections/BestCoursesSection";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <Courses />
      <Info />
      <BestCoursesSection />
    </>
  );

  return content;
}
