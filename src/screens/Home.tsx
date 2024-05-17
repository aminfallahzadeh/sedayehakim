// components
import Hero from "../sections/Hero";
import Courses from "../sections/Courses";
import Info from "../sections/Info";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <Courses />
      <Info />
    </>
  );

  return content;
}
