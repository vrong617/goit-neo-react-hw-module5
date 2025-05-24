import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import styles from './Navigation.module.css'

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
];

function Navigation() {
  const activeClassName = ({ isActive }) => clsx(isActive && "current");

  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={activeClassName}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
