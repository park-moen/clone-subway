import logImage from "@/assets/logo_title.png";

import style from "@/components/Header/Logo/logo.module.css";

const { s_logo } = style;

const Logo = () => {
  return (
    <section className={s_logo}>
      <a href="#">
        <img src={logImage} alt="Subway Log" />
      </a>
    </section>
  );
};

export default Logo;
