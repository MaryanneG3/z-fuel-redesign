import { NavLink } from "react-router-dom";
import NavLinks from "../../components/navlinks/NavLinks";
import styles from "./Header.module.css";
import logo from "/images/logo.png";

function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* // clicking on the logo will redirect to the homepage */}
      <div className={styles.leftSection}>
        <NavLink to="/" className={styles.logoContainer}>
          <img src={logo} className={styles.logoImg} />
        </NavLink>

        <button className={styles.forPersonalBtn}>For Personal</button>
      </div>

      {/* navlinks will vary for specific pages - use variants */}
      <div className={styles.rightSection}>
        <div className={styles.navlinks}>
          <NavLinks variant="header" />
        </div>
      </div>
    </div>
  );
}

export default Header;
