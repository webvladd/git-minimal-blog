import React from "react";

import s from "./Header.module.scss";

const Header = () => {
  const navigation = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "Articles",
      path: "/blog",
    },
    {
      id: 3,
      name: "Contact",
      path: "/blog",
    },
  ];
  return (
    <header className={s.header}>
      <a href="/" title="Home" className={s.logo}>
        <span>My</span>Games
      </a>
      <nav className={s.nav}>
        {navigation.map(({ id, name, path }) => {
          return (
            <a key={id} href={path}>
              {name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
