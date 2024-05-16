// components
import Hero from "../sections/Hero";
import Courses from "../sections/Courses";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <Courses />
    </>
  );

  return content;
}
