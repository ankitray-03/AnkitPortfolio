import styles from "./ProjectsStyles.module.css";

import RentRoost from "../../assets/RentRoost.png";
import ProjectCard from "../../common/ProjectCard";
import JobHive from "../../assets/JobHive.png";
import ExpenseTracker from "../../assets/ExpenseTracker.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={JobHive}
          link="https://jobhiverepo.onrender.com/"
          h3="JobHive"
          p="Job tracker"
        />
        <ProjectCard
          src={RentRoost}
          link="https://rentroost.onrender.com/"
          h3="RentRoost"
          p="Hotel Rental Site"
        />
        <ProjectCard
          src={ExpenseTracker}
          link="https://github.com/ankitray-03/ExpenseTracker"
          h3="Expense Tracker"
          p="Site to track expenses"
        />
      </div>
    </section>
  );
}

export default Projects;
