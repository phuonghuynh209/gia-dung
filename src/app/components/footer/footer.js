import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.item3}>
      <footer className={styles.footer}>
        <section className={styles.footerSection}>
          <div>
            <strong>Tổng đài hỗ trợ</strong>
            <ul>
              <li>Gọi mua: 1900 232 461</li>
              <li>Khiếu nại: 1800 1063</li>
              <li>Bảo hành: 1900 232 465</li>
            </ul>
          </div>
        </section>

        <div className={styles.copyright}>
          © 2026. Công ty cổ phần Thế Giới Di Động.
          <br />
          Địa chỉ: 128 Trần Quang Khải, Q.1, TP.HCM.
        </div>
      </footer>
    </div>
  );
}