import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

function Skills() {
  const [projectClicked, setProjectClicked] = useState(false);

  const handleProjectClick = (project) => {
    if (projectClicked === project) {
      setProjectClicked("");
    } else {
      setProjectClicked(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>My Project</title>
      </Head>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project1")}
          >
            Discord Clone
          </div>
          {projectClicked === "project1" && (
            <div className={utilStyles.aboutContents}>
              <p>
                I developed this project using reference materials and expanded
                upon it after completing the course. I implemented an accordion
                UI for Channels, allowing users to easily navigate and send
                images within them. Integrating Firebase for the first time
                presented some challenges, particularly in saving and displaying
                images, but I overcame them through resourceful problem-solving.
                <br />
                This project taught me the importance of self-learning,
                teamwork, and project management. I emphasized code quality and
                readability, following established conventions and ensuring
                maintainability. The design was also a focus, with user feedback
                and usability tests guiding iterative improvements.
                <br />
                Overall, my portfolio showcases this project, highlighting both
                its technical aspects and the valuable skills and insights
                gained along the way.
              </p>
              <br />
              <Link className={utilStyles.boldText} href="#">
                Check this project
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project2")}
          >
            Typing Game
          </div>
          {projectClicked === "project2" && (
            <div className={utilStyles.aboutContents}>
              <p>
                This game was inspired by YouTube videos. I learned how to add
                sound to typing, which made the development process enjoyable. I
                added scoring and a feature where the game ends after completing
                10 questions, giving it a unique twist.
                <br />
                I also implemented responsive design, allowing the game to be
                played comfortably on different devices and screen sizes. It
                automatically adjusts to provide the best experience for users.
                <br />
                Personally, I use this game to practice and improve my typing
                speed, enhancing my accuracy and speed.
                <br />
                These improvements make the game more user-friendly and
                captivating. It also showcases my skills and insights gained
                through game development in my portfolio.
              </p>
              <br />
              <Link className={utilStyles.boldText} href="#">
                Check this project
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project3")}
          >
            Fourtune Game
          </div>
          {projectClicked === "project3" && (
            <div className={utilStyles.aboutContents}>
              <p>
                This game holds a special place for me as it marks my very first
                venture into game development. Guided by instructional
                materials, I eagerly set out to create a captivating experience.
                In the process, I introduced a mesmerizing snowfall feature that
                adds a touch of enchantment to the game.
                <br />
                The moment I completed this project, I was overwhelmed with a
                profound sense of achievement. It was a remarkable realization
                of the joy and satisfaction that comes from bringing ideas to
                life through programming. This experience ignited a deep passion
                within me and further motivated me to explore the vast
                possibilities that lie within the world of application
                development.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://chimerical-scone-e6ee81.netlify.app"
              >
                Check this project
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
