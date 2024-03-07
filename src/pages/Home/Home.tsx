import { useState } from "react";

import GNBBar from "@/components/Header/GNBBar/GNBBar.tsx";
import Logo from "@/components/Header/Logo/Logo.tsx";
import UtilMenu from "@/components/Header/UtilMenu/UtilMenu.tsx";

import "@/pages/Home/home.css";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div>
      <header className={`header ${isHover ? "header-over" : ""}`}>
        <div className="header-inner">
          <Logo />
          <UtilMenu />
          <GNBBar onHover={handleHover} />
        </div>
      </header>
      <main className="main"></main>
    </div>
  );
};

export default Home;
