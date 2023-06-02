import Head from "next/head";
import ImageArea from "./ImageArea";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const initialName = "S";
const name = "awa Takahashi";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <main className={styles.container}>
        <section>
          <div className={styles.profile}>
            <div className={styles.name}>
              <h1 className={utilStyles.initialName}>{initialName}</h1>
              <h1 className={utilStyles.nameTitle}>{name}</h1>
            </div>
            <p className={utilStyles.desc}>
              I am a Frontend Developer based in Vancouver.
            </p>
            <div className={styles.items}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/MyProject" className={utilStyles.mediumText}>My Project</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/About" className={utilStyles.mediumText}>About Me</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/Business" className={utilStyles.mediumText}>Business</Link>
              </motion.div>
            </div>
          </div>
        </section>
        <ImageArea />
      </main>
      <footer>
        <div className={styles.footer}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="https://github.com/sawatakahashi">
              <Image src="/gitIcon.png" width={50} height={50} />
            </Link>
          </motion.div>
          <p className={utilStyles.lightText}>2023 Sawa's Portfolio</p>
        </div>
      </footer>
    </motion.div>
  );
}
