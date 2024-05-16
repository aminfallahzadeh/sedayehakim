// rrd imports
import { Outlet } from "react-router-dom";

// compoentns
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
