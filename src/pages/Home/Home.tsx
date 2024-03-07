import { useState } from "react";

import { GNBBar, Logo, UtilMenu } from "@/components/index.ts";

import style from "@/pages/Home/home.module.css";

const { s_header, s_headerOver, s_headerInner, s_main } = style;

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div>
      <header className={`${s_header} ${isHover ? s_headerOver : ""}`}>
        <div className={s_headerInner}>
          <Logo />
          <UtilMenu />
          <GNBBar onHover={handleHover} />
        </div>
      </header>
      <main className={s_main}></main>
    </div>
  );
};

export default Home;
