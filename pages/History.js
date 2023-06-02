import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

function History() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>History</title>
      </Head>
      <div className={styles.aboutContainer}>
        <div className={utilStyles.mediumTextNomal}>
          <p className={utilStyles.boldText}>My Programming History</p>
          ・During my student years, I utilized HTML and CSS to design an
          original blog.
          <br />
          ・2022.September : Embarked on my learning journey.
          <br />
          ・2023.February-April : Completed a 2 month online course for
          HTML/CSS/Javascript.
          <br />
        </div>
      </div>
    </motion.div>
  );
}

export default History;
