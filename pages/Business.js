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
        <div className={utilStyles.mediumTextNormal}>
         夫と私で2021年９月にバンクーバーで、ラーメンポップアップを立ち上げました。
          <br />
          麺もスープもトッピング全て彼が作り、私はメニューのデザイン、ロゴを作ったりマーケティング全般、接客を担当しています。
          <br />
          私たちの強みは、毎回違うタイプのラーメンを提供し、バンクーバーどのお店にもないラーメンを味わえることです。
          本場のラーメンの味を、おいしさを知ってもらい、食にこだわりが強い日本食文化を広げたく始めました。
          <br/>
          常連客がたくさんいて、いつも感動してくれることにやりがいを感じております。
          <div className={utilStyles.flex}>
           ウェブサイトはこちら :&nbsp;&nbsp;
            <div className={utilStyles.mediumText}>
              <Link href="https://luckybeporamen.com/Who-we-are">
                Lucy Bepo Ramen
              </Link>
            </div>
          </div>
          <div className={utilStyles.flex}>
            Instagram :&nbsp;&nbsp;
            <div className={utilStyles.mediumText}>
              <Link href="https://www.instagram.com/luckybeporamen/">
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
