import Image from "next/image";
import styles from "./header.module.css";


export default function header() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
             <li>Giới Thiệu</li>
            <li>Sản Phẩm</li>
           <li>Liên Hệ</li>
            <li>Tin Tức</li>
          </ul>
        </nav>
        <Image src="/next.svg" alt="logo" width={100} height={24}/>
      </div>
    </div>
  );
}
