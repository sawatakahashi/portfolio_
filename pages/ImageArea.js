import Image from "next/image";
import styles from "../styles/Home.module.css";

const ImageArea = () => {
  return (
    <div className={styles.image}>
      <Image src="/profile.png" layout="responsive" width={300} height={300}/>
    </div>
  )
}

export default ImageArea