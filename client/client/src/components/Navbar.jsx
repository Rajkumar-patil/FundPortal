import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FundPortal</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/ContactUS">Contact Us</Link>
        </li>
        <li>
          <Link to="/LoginSignup">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
