import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

function MyProject() {
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
            Online Shopping website
          </div>
          {projectClicked === "project1" && (
            <div className={utilStyles.aboutContents}>
              <p>
                Developed a user-friendly website for our brand, drawing inspiration from Udemy's design principles. Leveraged the power of Cursor to seamlessly integrate with ChatGPT, significantly reducing error resolution time. Introduced a streamlined login functionality through GitHub integration, enhancing user authentication. Moreover, by incorporating the latest updates from Next.js, I not only ensured the site's technical robustness but also expanded my knowledge base, providing opportunities for continuous learning and improvement in the overall development process.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://denshi-app.vercel.app/"
              >
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
            Discord Clone
          </div>
          {projectClicked === "project2" && (
            <div className={utilStyles.aboutContents}>
              <p>
                I developed this project using reference materials and expanded
                upon it after completing the course. I implemented an accordion
                UI for Channels, allowing users to easily navigate and send
                images within them. Integrating Firebase for the first time
                presented some challenges, particularly in saving and displaying
                images, but I overcame them through resourceful problem-solving.
                <br />
                This project taught me the importance of self-learning, and
                project management. I emphasized code quality and readability.
                <br />
                This project showcases my portfolio, highlighting both its
                technical aspects and the valuable skills and insights gained
                along the way.
                <br />
                <br />
                ps. There is Log in function.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://discord-app-nine.vercel.app"
              >
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
            Anime List
          </div>
          {projectClicked === "project3" && (
            <div className={utilStyles.aboutContents}>
              <p>
                I created a website using an API. As a big fan of anime, I built
                a website using the Jikan API that allows users to search for
                anime. I encountered some difficulties when trying to display
                images. They wouldn't show up, and I had to resort to using
                console.log to troubleshoot the issue. Whenever I finally solved
                the problem, I experienced a sense of achievement and a
                refreshing feeling.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://anime-database-kappa.vercel.app/"
              >
                Check this project
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project4")}
          >
            Typing Game
          </div>
          {projectClicked === "project4" && (
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
                I use this game to practice and improve my typing speed,
                enhancing my accuracy and speed.
                <br />
                These improvements make the game more user-friendly and
                captivating. It also showcases my skills and insights gained
                through game development in my portfolio.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://typing-game-2023.netlify.app"
              >
                Check this project
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project5")}
          >
            Fortune Game
          </div>
          {projectClicked === "project5" && (
            <div className={utilStyles.aboutContents}>
              <p>
                This game is special to me as it marks my first venture into
                game development. Guided by instructional materials, I eagerly
                set out to create a captivating experience. In the process, I
                introduced a mesmerizing snowfall feature that adds a touch of
                enchantment to the game.
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
        {/* <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project5")}
          >
            Brick Breaker
          </div>
          {projectClicked === "project5" && (
            <div className={utilStyles.aboutContents}>
              <p>
                This game is one that I used to play a lot and I was able to
                create it using just HTML, CSS, and JavaScript. The process was
                incredibly enjoyable for me. As it was my first attempt, I
                struggled to understand the code, but the journey proved to be a
                highly beneficial learning experience. The experience of
                creating a game by myself was immensely valuable in developing
                crucial programming skills.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://legendary-pastelito-0bb2ba.netlify.app"
              >
                Check this project
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </motion.div>
  );
}

export default MyProject;
