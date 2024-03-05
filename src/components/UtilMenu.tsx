import MenuLink from "@/components/common/MenuLink.tsx";

import globalIcon from "@/assets/global_subway_icon.png";

const UtilMenu = () => {
  return (
    <ul className="util-menu">
      <MenuLink href="#" className="sign">
        로그인
      </MenuLink>
      <MenuLink href="#" className="sign">
        회원가입
      </MenuLink>
      <MenuLink href="#" className="global-subway-icon">
        <img src={globalIcon} alt="Global Subway" />
      </MenuLink>
    </ul>
  );
};

export default UtilMenu;
