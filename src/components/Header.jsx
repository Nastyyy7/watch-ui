import Image from "next/image";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.conteiner}>
        <div className={styles.first_head}>
          <div className={styles.first_head_item}>
            <div className={styles.first_head_item_phone} alt='Телефон:'></div>
            <p className={styles.first_head_item_text}>+7 495 616-68-54</p>
          </div>
          <a href=".." alt="Ремонт часов на Алексеевской">
            <div className={styles.first_head_item_logo}></div>
          </a>
          <div className={styles.first_head_item}>
            <div className={styles.first_head_item_place} alt='Место положение:'></div>
            <p className={styles.first_head_item_text}>Москва, проспект Мира, д. 97</p>
          </div>
        </div>
        <div className={styles.second_head}>
          <nav>
            <ul className={styles.second_head_menu}>
              <li>
                <a className={styles.second_head_menu_link} href="..">
                  Главная
                </a>
              </li>
              <li>
                <a className={styles.second_head_menu_link} href="../catalog">
                  Каталог
                </a>
              </li>
              <li>
                <a className={styles.second_head_menu_link} href="../services">
                  Услуги
                </a>
              </li>
              <li>
                <a className={styles.second_head_menu_link} href="../about">
                  О мастерской
                </a>
              </li>
              <li>
                <a className={styles.second_head_menu_link} href="../contacts">
                  Контакты
                </a>
              </li>
              <li>
                <div className={styles.second_head_menu_icon}>
                  <a className={styles.second_head_menu_icon_img} href="../account">
                    <div className={styles.second_head_menu_icon_img_person} alt="Личный кабинет"></div>
                  </a>
                  <a className={styles.second_head_menu_icon_img} href="../basket">
                    <div className={styles.second_head_menu_icon_img_basket} alt="Корзина"></div>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {
  Header,
};