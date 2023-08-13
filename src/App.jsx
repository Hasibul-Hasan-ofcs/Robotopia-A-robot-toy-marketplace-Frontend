import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Lenis from "@studio-freight/lenis";

function App() {
  const [count, setCount] = useState(0);
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      <NavigationBar></NavigationBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
