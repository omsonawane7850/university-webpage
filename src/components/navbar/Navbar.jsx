import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`${styles.nav} ${sticky ? styles.darkNav : ""} container`}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul className={mobileMenu ? "" : styles.hideMobileMenu}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="programs" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials{" "}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-220}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className={styles.menuIcon}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
