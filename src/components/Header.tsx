import { useState } from "react";

import GNBBar from "@/components/GNBBar.tsx";
import UtilMenu from "@/components/UtilMenu.tsx";

import logImage from "@/assets/logo_title.png";

import "@/styles/header.css";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <header className={`header ${isHover ? "header-over" : ""}`}>
      <div className="header-inner">
        <section className="logo">
          <a href="#">
            <img src={logImage} alt="Subway Log" />
          </a>
        </section>
        <UtilMenu />
        <GNBBar onHover={handleHover} />
      </div>
    </header>
  );
};

export default Header;
