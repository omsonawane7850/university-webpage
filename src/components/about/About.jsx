import styles from "./About.module.css";
import about_img from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";

const About = ({ setplay }) => {
  return (
    <div className={styles.about} name="about">
      <div className={styles.aboutLeft}>
        <img src={about_img} alt="about_img" className={styles.aboutImg} />
        <img
          src={Play_icon}
          alt="Play_icon"
          className={styles.playImg}
          onClick={() => setplay(true)}
        />
      </div>
      <div className={styles.aboutRight}>
        <h3>About University</h3>
        <h2>nurturing tommorw's leaders today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
