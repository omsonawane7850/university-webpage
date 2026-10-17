import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
