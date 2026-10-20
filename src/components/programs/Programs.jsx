import styles from "./Programs.module.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className={styles.programs} name="programs">
      <div className={styles.program}>
        <img src={program_1} alt="Program 1" />
        <div className={styles.caption}>
          <img src={program_icon_1} alt="program_icon_1" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className={styles.program}>
        <img src={program_2} alt="Program 2" />
        <div className={styles.caption}>
          <img src={program_icon_2} alt="program_icon_2" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className={styles.program}>
        <img src={program_3} alt="Program 3" />
        <div className={styles.caption}>
          <img src={program_icon_3} alt="program_icon_3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
