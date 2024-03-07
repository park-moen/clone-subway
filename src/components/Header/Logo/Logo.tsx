import logImage from "@/assets/logo_title.png";

import "@/components/Header/Logo/logo.css";

const Logo = () => {
  return (
    <section className="logo">
      <a href="#">
        <img src={logImage} alt="Subway Log" />
      </a>
    </section>
  );
};

export default Logo;
