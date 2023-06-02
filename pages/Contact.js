import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Link from "next/link";
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
        <div>
          <p>Email : sawa4.12@icud.com</p>
          <div className={utilStyles.mediumText}>
            <Link href="https://github.com/sawatakahashi">github account</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
