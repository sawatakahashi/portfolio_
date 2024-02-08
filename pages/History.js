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
        <div className={utilStyles.mediumTextNormal}>
          <p className={utilStyles.boldText}>プログラミング勉強過程</p>
          ・Youtube, Udemy, Paizaで独学(2022.Oct)
          <br />
          ・プログラミングスクールSiid、３ヶ月の短期コースを受け、HTML,CSS,Javascriptの基礎を学習(2023.Feb)
          <br />
        </div>
      </div>
    </motion.div>
  );
}

export default History;
