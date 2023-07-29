import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      {/* <Helmet>
        <meta property="og:title" content="Robotopia" />
        <meta property="og:description" content="An action-figure toy shop" />
        <meta property="og:image" content="../assets/images/robotopia-pc.png" />
        <meta property="og:url" content="https://robotopia-28322.web.app/" />
        <meta property="og:type" content="Toy Shop E-commerce" />
      </Helmet> */}
      <NavigationBar></NavigationBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
