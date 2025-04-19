import { NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigationItems";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          {navigationItems.map(({ id, title, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
