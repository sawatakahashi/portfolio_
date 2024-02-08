import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";


function MyProject() {
  const [projectClicked, setProjectClicked] = useState(false);

  const handleProjectClick = (project) => {
    if (projectClicked === project) {
      setProjectClicked("");
    } else {
      setProjectClicked(project);
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
        <title>My Project</title>
      </Head>
      <div className={styles.aboutContainer}>
      <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project1")}
          >
            Online Shopping website
            <p className={utilStyles.subText}>January/2024</p>
          </div>
          {projectClicked === "project1" && (
            <div className={utilStyles.aboutContents}>
              <p>
              自分たちのラーメン屋さん向けに、将来商品ができた際にオンライン販売を可能にするウェブサイトを開発しました。Udemyを参考にして初めてオンライン決済機能を実装しました。エディターとしてはCursorを使用し、ChatGPTを活用してエラーやスペルミスなどを解決する時間を大幅に短縮しました。また、GitHubを使用してログイン機能を導入し、ユーザー認証を強化しました。(ポートフォリオ用にログインページは表示していません)
              <br/>
              Next.jsの最新のアップデートを取り入れることで、知識ベースを拡大し、継続的な学習と全体的な開発プロセスの改善へ努めました。
              </p>
              <br />
              <Link
                className={utilStyles.boldTextHover}
                href="https://denshi-app.vercel.app/"
              >
                ネットショッピングアプリをみてみる
              </Link>
              <br />
              <br />

              <div className={styles.s_Image}>
              <Image src="/Shopping_1.png" layout="responsive" width={300} height={300}/>
              <p>　＞</p>
              <br />
              <Image src="/Shopping_2.png" layout="responsive" width={300} height={300}/>
              </div>
              <br />
              <div className={styles.s_Image}>
              <Image src="/Shopping_3.png" width={300} height={300}/>
              <p>　＞</p>
              <Image src="/Shopping_4.png" width={300} height={200}/>
              </div>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project2")}
          >
            Discord Clone
            <p className={utilStyles.subText}>June/2023</p>
          </div>
          {projectClicked === "project2" && (
            <div className={utilStyles.aboutContents}>
              <p>
              このプロジェクトは、参考資料を使用して初めに開発し、その後自分で追加機能を調査しました。追加した機能には、アコーディオンUIを実装してチャンネル名を表示することが含まれます。また、ユーザーが簡単にチャット内で画像を送信できるようにするためにFirebaseを使用しました。ただし、データベースに保存したものを表示する際に問題が発生し、Documentを見ながら試行錯誤しました。さらに、検索機能も追加し、既存のチャンネル名を検索できる機能を実装しました。
              <br/>

              このプロジェクトを通じて、自ら課題を追求し、問題解決をする過程や解決した後の達成感を味わうことができ、初めてのチャットアプリを完成させるという自信に繋がりました。これにより、学習のモチベーションが高まりました。
              <br/>
              <br/>
              注：ログイン機能を追加したことにより、Warningが表示されることがあります。
              </p>
              <br />
              <Link
                className={utilStyles.boldTextHover}
                href="https://discord-app-nine.vercel.app"
              >
                Discordクローンアプリをみてみる
              </Link>
              <br />
              <br />
              <br />
              <div className={styles.s_Image}>
              <Image src="/Discord_1.png" layout="responsive" width={300} height={300}/>
              <p>　＞</p>
              <Image src="/Discord_2.png" layout="responsive" width={300} height={300}/>
              </div>
              <br />
              <div className={styles.s_Image}>
              <Image src="/Discord_3.png" width={300} height={100}/>
              <Image src="/Discord_4.png" width={300} height={300}/>
              </div>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project3")}
          >
            Anime List
            <p className={utilStyles.subText}>June/2023</p>
          </div>
          {projectClicked === "project3" && (
            <div className={utilStyles.aboutContents}>
              <p>
              Jikan APIを使用して、アニメを検索できるウェブサイトを構築しました。アニメが好きで、常に人気の作品や気になる作品を検索しているため、検索機能に興味を持ちました。画像を表示しようとする際にいくつかの困難に直面しましたが、console.logを使用して問題を解決しました。最終的に問題を解決できたときは、達成感と爽快感を味わいました。
              </p>
              <br />
              <Link
                className={utilStyles.boldTextHover}
                href="https://anime-database-kappa.vercel.app/"
              >
                アニメリストをみてみる
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project4")}
          >
            Typing Game
            <p className={utilStyles.subText}>June/2023</p>
          </div>
          {projectClicked === "project4" && (
            <div className={utilStyles.aboutContents}>
              <p>
              このゲームはYouTube動画からインスピレーションを受けています。タイピングに音を追加する方法を学んで、面白かったです。オンライン授業で学んだスコアリングと、10問目を成功したらゲームが終了する機能を入れて、挑戦心や遊び心を追加しました。
また、レスポンシブデザインを実装し、異なるデバイスや画面サイズでも快適にプレイできるようにしました。
私はこのゲームを使って、タイピングの速度を練習して向上させ、正確性とスピードを高めています。

              </p>
              <br />
              <Link
                className={utilStyles.boldTextHover}
                href="https://typing-game-2023.netlify.app"
              >
                タイピングゲームをみてみる
              </Link>
            </div>
          )}
        </div>
        <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project5")}
          >
            Fortune Game
            <p className={utilStyles.subText}>March/2023</p>
          </div>
          {projectClicked === "project5" && (
            <div className={utilStyles.aboutContents}>
              <p>
              このおみくじサイトは、私にとって特別なものです。なぜなら、これが私が初めて作ったウェブサイトだからです。最初は何を作ればいいのかわからず、身近なものから始めようと考えていました。ある教材に触れ、興味を持ち試してみたところ、自分で作り上げた喜びを感じ、エンジニアとしての道を進む決意を固めるきっかけとなりました。デザインにも少しこだわり、愛犬の写真を使って雪の降り積もりの機能を取り入れ、サイトに特別な雰囲気を与えました。

アイデアをプログラミングを通じて実現することから生まれる喜びや満足感を深く味わうことができました。この経験は私の内に情熱をかき立て、アプリケーション開発の世界に潜む無限の可能性をさらに追求する動機となりました。
              </p>
              <br />
              <Link
                className={utilStyles.boldTextHover}
                href="https://chimerical-scone-e6ee81.netlify.app"
              >
                おみくじサイトをみてみる
              </Link>
              <br />
              <br />
              <Image src="/Omikuji_Bepo.png" layout="responsive" width={300} height={300}/>
            </div>
          )}
        </div>
        {/* <div className={styles.aboutBox}>
          <div
            className={utilStyles.aboutTitles}
            onClick={() => handleProjectClick("project5")}
          >
            Brick Breaker
          </div>
          {projectClicked === "project5" && (
            <div className={utilStyles.aboutContents}>
              <p>
                This game is one that I used to play a lot and I was able to
                create it using just HTML, CSS, and JavaScript. The process was
                incredibly enjoyable for me. As it was my first attempt, I
                struggled to understand the code, but the journey proved to be a
                highly beneficial learning experience. The experience of
                creating a game by myself was immensely valuable in developing
                crucial programming skills.
              </p>
              <br />
              <Link
                className={utilStyles.boldText}
                href="https://legendary-pastelito-0bb2ba.netlify.app"
              >
                Check this project
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </motion.div>
  );
}

export default MyProject;
