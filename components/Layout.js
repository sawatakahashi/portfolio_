import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

import Link from "next/link";
import { motion } from "framer-motion";

export const webtitle = "sawa's portfolio";

function Layout() {
  return (
    <>
      <Head>
        <title>Sawa Takahashi</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&family=Quicksand:wght@300&family=Ubuntu:wght@300&display=swap');
        </style>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <header whileHover={{ scale: 1.1 }} className={styles.nav}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              className={styles.img}
            />
          </Link>
        </motion.div>
        <ul className={styles.navbar}>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/History">History</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/Skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/Contact">Contact</a>
          </motion.li>
        </ul>
      </header>
    </>
  );
}

export default Layout;
