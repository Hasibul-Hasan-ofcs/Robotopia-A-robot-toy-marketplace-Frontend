import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      <NavigationBar></NavigationBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
