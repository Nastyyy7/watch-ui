import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <header>
  <div className={styles.conteiner}>
    <div className={styles.first_head}>
      <div className={styles.first_head_item}>
        <img className={styles.first_head_item_svg} src="/phone.svg" alt="" />
        <p className={styles.first_head_item_text}>+7 495 616-68-54</p>
      </div>
      <img className={styles.first_head_logo} src="/logo.svg" alt="" />
      <div className={styles.first_head_item}>
        <img className={styles.first_head_item_svg} src="/tochka.svg" alt="" />
        <p className={styles.first_head_item_text}>Москва, проспект Мира, д. 97</p>
      </div>
    </div>
    <div className={styles.second_head}>
      <nav>
        <ul className={styles.second_head_menu}>
          <li>
            <a className={styles.second_head_menu_link} href="#">
              Главная
            </a>
          </li>
          <li>
            <a className={styles.second_head_menu_link} href="#">
              Каталог
            </a>
          </li>
          <li>
            <a className={styles.second_head_menu_link} href="#">
              Услуги
            </a>
          </li>
          <li>
            <a className={styles.second_head_menu_link} href="#">
              О мастерской
            </a>
          </li>
          <li>
            <a className={styles.second_head_menu_link} href="#">
              Контакты
            </a>
          </li>
          <div>
            <a className={styles.second_head_menu_img} href="#">
              <img src="/личный кабинет.svg" alt="" />
            </a>
            <a className={styles.second_head_menu_img} href="#">
              <img src="/конзина.svg" alt="" />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</header>
  );
}
