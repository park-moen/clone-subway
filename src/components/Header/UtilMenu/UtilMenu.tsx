import globalIcon from "@/assets/global_subway_icon.png";
import { MenuLink } from "@/components/index.ts";

import style from "@/components/Header/UtilMenu/utilMenu.module.css";

const { s_utilMenu, s_sign, s_globalSubwayIcon } = style;

const UtilMenu = () => {
  return (
    <ul className={s_utilMenu}>
      <MenuLink href="#" className={s_sign}>
        로그인
      </MenuLink>
      <MenuLink href="#" className={s_sign}>
        회원가입
      </MenuLink>
      <MenuLink href="#" className={s_globalSubwayIcon}>
        <img src={globalIcon} alt="Global Subway" />
      </MenuLink>
    </ul>
  );
};

export default UtilMenu;
