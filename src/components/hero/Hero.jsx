import styles from "./Hero.module.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.heroText}>
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting edge curriculum is designed to empower students withe the
          knowledge, skils, and experiences needed to excel in the dynamic feild
          of education.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="dark_arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
