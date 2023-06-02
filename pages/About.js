import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";
import Image from "next/image";

function About() {
  const [clicked, setClicked] = useState(false);

  const handleClick = (title) => {
    if (clicked === title) {
      setClicked("");
    } else {
      setClicked(title);
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
        <title>About Me</title>
      </Head>
      <div class={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleClick("title1")}
          >
            Who Am I ?
          </div>
          {clicked === "title1" && (
            <div className={utilStyles.aboutContents}>
              My name is Sawa Takahashi
              <br />
              I was born in Japan.
              <br />
              I love travel and I traveled a lot of countries.
              <br />
              (LA, Seattle, Italy, switzerland, France, Malta, Taiwan, Malaysia,
              Mongol, Korea, Mexico)
              <br />
              I wanted to experience living in a different country, so I decided
              to move to Vancouver.
              <br />I am currently working as a barista and striving to improve
              my latte art skills.
              <br />
              <div className={styles.latteImg}>
                <div>
                  <Image src="/latte1.jpg" width={120} height={120} />
                </div>
                <div>
                  <Image src="/latte2.jpg" width={120} height={120} />
                </div>
                <div>
                  <Image src="/latte3.jpg" width={120} height={120} />
                </div>
                <div>
                  <Image src="/latte4.jpg" width={120} height={120} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleClick("title2")}
          >
            Experience in Hospitality and Customer Service
          </div>
          {clicked === "title2" && (
            <div className={utilStyles.aboutContents}>
              15 years of experience in the customer service industry including
              part-time jobs during my student days.
              <br />
              Developed a sense of hospitality through communication with
              customers.
              <br />
              Seamless Team Communication: I emphasized effective communication
              with team members and other departments. Conducting regular
              meetings facilitated information sharing and problem-solving,
              ensuring smooth operational workflows.
              <br />
              Supporting and Building Trust Among Team Members: I actively
              supported the growth and success of my colleagues. When faced with
              challenging situations or tasks, I provided encouragement,
              guidance, and constructive feedback, fostering a culture of
              collaboration and trust.
              <br /> I encouraged and motivated team members and superiors,
              contributing to a positive and enjoyable workplace atmosphere.
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleClick("title3")}
          >
            Reasons for Aspiring to be a Programmer
          </div>
          {clicked === "title3" && (
            <div className={utilStyles.aboutContents}>
              <p className={utilStyles.boldText}>
                Interest and Enjoyment in Programming
              </p>
              &nbsp;Developed an interest in programming influenced by a friend
              (2021)
              <br />
              ・Learned from programmer friends and experienced the joy of
              coding.
              <br />
              ・Found fulfillment in solving errors and bringing new ideas to
              life through programming.
              <br />
              <p className={utilStyles.boldText}>
                Desire for Growth and New Challenges
              </p>
              &nbsp;Felt the limitations of growth in the hospitality industry
              and wanted to acquire new skills
              <br />
              ・Recognized the need for a broader skill set for personal growth.
              <br />
              ・Wished to expand personal growth and career opportunities by
              acquiring engineering skills.
              <p className={utilStyles.boldText}>Aspiring to be an Engineer</p>
              ・Aim to become an engineer with creative problem-solving
              abilities and teamwork skills.
              <br />
              ・Intend to apply the spirit of hospitality to programming and
              provide user-friendly and valuable solutions.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
