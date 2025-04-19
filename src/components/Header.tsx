import React from "react";

import { navigationItems } from "../data/navigationItems";
const Header: React.FC = () => {
  console.log("123");
  return (
    <header className="header">
      <h1 className="header__title">Путешествия во времени</h1>
      <nav>
        <ul className="header__list">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
