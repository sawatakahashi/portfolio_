import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

function Skills() {
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
        <div className={utilStyles.mediumTextNormal}>
          ・HTML
          <br />
          ・CSS
          <br />
          ・Javascript
          <br />
          ・React
          <br />
          ・Nextjs
          <br />
          ・Typescript
          <br />
<<<<<<< HEAD
=======
          <br />
          ・Firebase
          <br />
>>>>>>> parent of 0107ac1 (Update Skills.js)
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
