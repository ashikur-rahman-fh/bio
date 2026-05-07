import React from "react";

interface NavItem {
  text: string;
  href: string;
}

interface MenuProps {
  items: NavItem[];
}

const Menu = (props: MenuProps) => {
  const { items } = props;

  const renderMenuItems = () => {
    return items.map((option, index) => {
      const { text, href } = option;
      return (
        <a
          key={index.toString()}
          className={
            "text-md whitespace-nowrap lowercase text-slate-400 " +
            "hover:text-slate-800"
          }
          href={href}
        >
          {text}
        </a>
      );
    });
  };

  return <>{renderMenuItems()}</>;
};

export default Menu;
