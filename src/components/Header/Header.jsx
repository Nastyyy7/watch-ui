import Image from "next/image";
import styles from "./header.module.css";
import Link from 'next/link'

function Header({openSignupForm}) {
  return (
    <header>
      <div className={styles.conteiner}>
        <div className={styles.first_head}>
          <div className={styles.first_head_item}>
            <div className={styles.first_head_item_phone} alt='Телефон:'></div>
            <p className={styles.first_head_item_text}>+7 495 616-68-54</p>
          </div>
          <Link href="/" alt="Ремонт часов на Алексеевской">
            <div className={styles.first_head_item_logo}></div>
          </Link>
          <div className={styles.first_head_item}>
            <div className={styles.first_head_item_place} alt='Место положение:'></div>
            <p className={styles.first_head_item_text}>Москва, проспект Мира, д. 97</p>
          </div>
        </div>
        <div className={styles.second_head}>
          <nav>
            <ul className={styles.second_head_menu}>
              <li>
                <Link className={styles.second_head_menu_link} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={styles.second_head_menu_link} href="/catalog/">
                  Каталог
                </Link>
              </li>
              <li>
                <Link className={styles.second_head_menu_link} href="/services/">
                  Услуги
                </Link>
              </li>
              <li>
                <Link className={styles.second_head_menu_link} href="/about/">
                  О мастерской
                </Link>
              </li>
              <li>
                <Link className={styles.second_head_menu_link} href="/contacts/">
                  Контакты
                </Link>
              </li>
              <li>
                <div className={styles.second_head_menu_icon}>
                  <div className={styles.second_head_menu_icon_img} onClick={openSignupForm}>
                    <div className={styles.second_head_menu_icon_img_person} alt="Личный кабинет"></div>
                  </div>
                  <Link className={styles.second_head_menu_icon_img} href="/basket/">
                    <div className={styles.second_head_menu_icon_img_basket} alt="Корзина"></div>
                  </Link>
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