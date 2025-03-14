import Image from "next/image";
import styles from "./footer.module.css";
import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <div className={styles.conteiner}>
        <div className={styles.footer}>
          <Link href=".." alt="Ремонт часов на Алексеевской">
            <div className={styles.footer_img}></div>
          </Link>
          <div className={styles.footer_content}>
            <div className={styles.footer_content_mode}>
              <p className={styles.footer_content_mode_title}>Режим работы:</p>
              <div className={styles.footer_content_mode_datatime}>
                <p>Понедельник — пятница:</p>
                <p>9:00 —  19:00</p>
              </div>
              <div className={styles.footer_content_mode_datatime}>
                <p>Суббота:</p>
                <p>10:00 — 15:00</p>
              </div>
              <div className={styles.footer_content_mode_datatime}>
                <p>Воскресенье:</p>
                <p>выходной</p>
              </div>
            </div>
            <div className={styles.footer_content_contacts}>
              <div className={styles.footer_content_contacts_type}>
                <div className={styles.footer_content_contacts_type_email} alt='Почта:'></div>
                <p>watch97@yandex.ru</p>
              </div>
              <div className={styles.footer_content_contacts_type}>
                <div className={styles.footer_content_contacts_type_phone} alt='Телефон:'></div>
                <p>+7 495 616-68-54</p>
              </div>
              <div className={styles.footer_content_contacts_type}>
                <div className={styles.footer_content_contacts_type_place} alt='Место положение:'></div>
                <p>Москва, проспект Мира, д. 97</p>
              </div>
            </div>
          </div>
          <p className={styles.footer_copyright}>© ИП Пинаев А. И., 2024. Все права защищены.<a className={styles.footer_copyright_link} href="">Положение об обработке персональных данных.</a></p>
        </div>
      </div>
    </footer>
  );
}

export {
  Footer,
};