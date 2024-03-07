interface MenuLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const MenuLink = ({ href, className, children }: MenuLinkProps) => {
  return (
    <li className={className}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default MenuLink;
