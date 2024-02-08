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
              私の名前は髙橋佐和です。
              <br />
              日本の高知県で生まれ、大学生活は大阪で過ごしました。
              <br />
              旅行が大好きで、知らない世界を見てみたいと思いあらゆるところに旅行に行きました。
              <br />
              (Vancouver, Toronto, LA, Seattle, Portland Italy, switzerland, France, Malta, Taiwan, Malaysia,
              Mongol, Korea, Mexico)
              <br />
              旅行だけでは物足りなく、海外で生活し、働いてみたいと思い、2019年１月にカナダに渡米しました。
              <br />
              カナダではやってみたかったバリスタの仕事につきました。
              <br/>
              ローカルなカフェだったので当時は日本人は私が一人だったので英語のスキル、コミュニケーションスキルにも磨きをかけ、さらに自分のバリスタとしてのスキルを上げました。
              <br />
              こちらが一部の作品となっております。
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
              15年間の接客業の経験があります（学生時代からのアルバイトも含まれます）。
              <br/>
              お客様とのコミュニケーションを通じてホスピタリティ精神を磨いてきました。
              <br/>
              円滑なチーム間コミュニケーションに重点を置き、チームメンバーや他部門との効果的なコミュニケーションを促進しました。定期的なミーティングを通じて情報共有や問題解決を行い、業務をスムーズにしました。
              <br/>
              チームメンバー間の信頼構築と支援に積極的に取り組み、同僚の成長と成功をサポートしました。困難な状況やタスクに直面した際には、励ましや指導、建設的なフィードバックを提供し、協力と信頼の文化を築きました。
              <br/>
              さらに、チームメンバーや上司を励まし、モチベーションを高め、ポジティブで楽しい職場の雰囲気に貢献しました。常連のお客様と仲良くなり、一期一会の素敵な出会いをたくさん経験しました。

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
              プログラミングへの興味を持ったきっかけ
              </p>
              ・義兄や彼のパートナー、そして周囲に多くのプログラマーがいたことがきっかけです。
              <br />
              ・Paizaを解いていく楽しみを味わいました。
              <br />
              ・プログラミングを通じて、エラーを周囲の助けを借りながら解決し、作品が完成していく過程で充実感を感じ、さらなる興味を持ち、オンライン授業を受ける決心をしました。
              <br />
              <br />
              <p className={utilStyles.boldText}>
              成長と新たな挑戦への欲求
              </p>
              ・接客業界での成長の限界を感じ、新しいスキルを身につけたいと思いました。
              <br/>
              ・個人の成長には幅広いスキルセットが必要であることを認識しました。
              <br/>
              ・エンジニアリングのスキルを身につけることで、個人の成長とキャリアの機会を拡大したいと願っています。
              <br/>
              <br/>
              <p className={utilStyles.boldText}>エンジニアを目指して</p>
              ・クリエイティブな問題解決能力とチームワークスキルを持つエンジニアになることを目指しています。
              <br/>
              ・ホスピタリティの精神をプログラミングに応用し、ユーザーフレンドリーで価値のあるソリューションを提供したいと考えています。また、将来的には、オンラインゲームやPUBGのような3Dゲームの開発にも挑戦し、野心を持っています。
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
