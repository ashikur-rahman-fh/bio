import React from "react";

interface MenuProps {
  items: Array<any>;
}

const Menu = (props: MenuProps) => {
  const { items } = props;

  const renderMenuItems = () => {
    return items.map((option, index) => {
      const { text, link } = option;
      return (
        <a
          key={index.toString()}
          className={
            "text-md whitespace-nowrap lowercase text-slate-400 " +
            "hover:text-slate-800"
          }
          href={link}
        >
          {text}
        </a>
      );
    });
  };

  return <>{renderMenuItems()}</>;
};

export default Menu;
