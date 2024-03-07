import { MenuLink } from "@/components/index.ts";

import style from "@/components/Header/GNBBar/GNBBar.module.css";

interface GNBProps {
  onHover: React.MouseEventHandler;
}

const { s_nav, s_gnb, s_lnb } = style;

const GNBBar = ({ onHover }: GNBProps) => {
  return (
    <nav className={s_nav} onMouseEnter={onHover} onMouseLeave={onHover}>
      <ul className={s_gnb}>
        <li>
          <a href="#">메뉴소개</a>
          <ul className={s_lnb}>
            <MenuLink href="#">샌드위치</MenuLink>
            <MenuLink href="#">랩ㆍ기타</MenuLink>
            <MenuLink href="#">샐러드</MenuLink>
            <MenuLink href="#">아침메뉴</MenuLink>
            <MenuLink href="#">스마일 썹</MenuLink>
            <MenuLink href="#">단체메뉴</MenuLink>
          </ul>
        </li>

        <li>
          <a href="#">이용방법</a>
          <ul className={s_lnb}>
            <MenuLink href="#">써브웨이 이용방법</MenuLink>
            <MenuLink href="#">단체메뉴 이용방법</MenuLink>
            <MenuLink href="#">신선한 재료 소개</MenuLink>
            <MenuLink href="#">App 이용방법</MenuLink>
          </ul>
        </li>

        <li>
          <a href="#">새소식</a>
          <ul className={s_lnb}>
            <MenuLink href="#">이벤트ㆍ프로모션</MenuLink>
            <MenuLink href="#">뉴스ㆍ공지사항</MenuLink>
            <MenuLink href="#">광고영상</MenuLink>
          </ul>
        </li>

        <li>
          <a href="#">쎄브웨이</a>
          <ul className={s_lnb}>
            <MenuLink href="#">써브웨이 역사</MenuLink>
            <MenuLink href="#">써브웨이 약속</MenuLink>
            <MenuLink href="#">샌드위치 아티스트 지원</MenuLink>
            <MenuLink href="#">매장찾기</MenuLink>
          </ul>
        </li>

        <li>
          <a href="#">가맹점</a>
          <ul className={s_lnb}>
            <MenuLink href="#">써브웨이 프랜차이즈</MenuLink>
            <MenuLink href="#">가맹관련 FAQ</MenuLink>
            <MenuLink href="#">가맹신청ㆍ문의</MenuLink>
            <MenuLink href="#">지사안내</MenuLink>
            <MenuLink href="#">사업설명회</MenuLink>
          </ul>
        </li>

        <li>
          <a href="#">온라인 주문</a>
          <ul className={s_lnb}>
            <MenuLink href="#">FAST-SUB</MenuLink>
            <MenuLink href="#">HOME-SUB</MenuLink>
            <MenuLink href="#">단체주문</MenuLink>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default GNBBar;
