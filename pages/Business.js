import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

function Business() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Business</title>
      </Head>
      <div className={styles.aboutContainer}>
        <div className={utilStyles.mediumTextNomal}>
          My husband and I running Ramen business in Vancouver.
          <br />
          He is a cheif, he makes everything with scracth.
          <br />
          I do organize orders, marketing, advertisement design.
          <div className={utilStyles.flex}>
            Go check our website :&nbsp;&nbsp;
            <div className={utilStyles.mediumText}>
              <Link href="https://luckybeporamen.com/Who-we-are">
                Lucy Bepo Ramen
              </Link>
            </div>
          </div>
          <div className={utilStyles.flex}>
            Instagram :&nbsp;&nbsp;
            <div className={utilStyles.mediumText}>
              <Link href="#">
                @luckybeporamen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Business;
