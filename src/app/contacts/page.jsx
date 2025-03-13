import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Map } from "@/components/Map"

export const metadata = {
  title: "Контакты",
};

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className={styles.conteiner}>
          <h3 className={styles.title}>Контакты</h3>
        </div>
      </section>
      <Map />
      <section>
        <div className={styles.conteiner}>
          <div className={styles.contact}>
            <div className={styles.contact_content}>
              <div className={styles.contact_content_contacts}>
                <div className={styles.contact_content_contacts_type}>
                  <div className={styles.contact_content_contacts_type_place} alt="Место положени:"></div>
                  <p>Москва, проспект Мира, д. 97</p>
                </div>
                <div className={styles.contact_content_contacts_type}>
                  <div className={styles.contact_content_contacts_type_email} alt="Почта:"></div>
                  <p>watch97@yandex.ru</p>
                </div>
                <div className={styles.contact_content_contacts_type}>
                  <div className={styles.contact_content_contacts_type_phone} alt="Номер телефона:"></div>
                  <p>+7 495 616-68-54</p>
                </div>
              </div>
              <div className={styles.contact_content_mode}>
                <p className={styles.contact_content_mode_title}>Режим работы:</p>
                <div className={styles.contact_content_mode_datatime}>
                  <p>Понедельник — пятница:</p>
                  <p>9:00 —  19:00</p>
                </div>
                <div className={styles.contact_content_mode_datatime}>
                  <p>Суббота:</p>
                  <p>10:00 — 15:00</p>
                </div>
                <div className={styles.contact_content_mode_datatime}>
                  <p>Воскресенье:</p>
                  <p>выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
