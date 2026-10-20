import { useState } from "react";
import styles from "./Programs.module.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      image: program_1,
      icon: program_icon_1,
      title: "Graduation Degree",
    },
    {
      image: program_2,
      icon: program_icon_2,
      title: "Master Degree",
    },
    {
      image: program_3,
      icon: program_icon_3,
      title: "Post Graduation",
    },
  ];

  const handleClick = (index) => {
    setActiveProgram((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.programs} name="programs">
      {programs.map((program, index) => (
        <div
          className={styles.program}
          key={program.title}
          onClick={() => handleClick(index)}
        >
          <img src={program.image} alt={program.title} />

          <div
            className={`${styles.caption} ${
              activeProgram === index ? styles.showCaption : ""
            }`}
          >
            <img src={program.icon} alt="" />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;