import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Catalog } from "@/components/Catalog";

export const metadata = {
  title: "Каталог",
};

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className={styles.conteiner}>
          <div className={styles.filter}>
            <h2 className={styles.filter_title}>Каталог</h2>
            <form className={styles.filter_search} action="">
              <input className={styles.filter_search_input} type="search" name="" placeholder="Поиск" />
              <input className={styles.filter_search_submit} type="submit" name="" value="" />
            </form>
            <div className={styles.filter_choice}>
              <div className={styles.filter_choice_sort}>
                <div className={styles.filter_choice_sort_title}>
                  <div className={styles.filter_choice_sort_title_icon}></div>
                  <p className={styles.filter_choice_sort_title_text}>Сортировать:</p>
                </div>
                <div className={styles.filter_choice_sort_type}>
                  <p className={styles.filter_choice_sort_type_text}>Сначала дорогие</p>
                  <p className={styles.filter_choice_sort_type_text}>Сначала дешёвые</p>
                  <p className={styles.filter_choice_sort_type_text}>От А до Я</p>
                  <p className={styles.filter_choice_sort_type_text}>От Я до А</p>
                </div>
              </div>
              <div className={styles.filter_choice_price}>
                <div className={styles.filter_choice_price_title}>
                  <div className={styles.filter_choice_price_title_icon}></div>
                  <p className={styles.filter_choice_price_title_text}>Фильтрация:</p>
                </div>
                <div className={styles.filter_choice_price_type}>
                  <p className={styles.filter_choice_price_type_text}>Цена, &#8381;</p>
                  <form className={styles.filter_choice_price_type_form} action="">
                    <p>От:</p>
                    <input className={styles.filter_choice_price_type_form_input} type="number" name="" placeholder="0" />
                    <p>До:</p>
                    <input className={styles.filter_choice_price_type_form_input} type="number" name="" placeholder="10000000" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Catalog />
      <Footer />
    </>
  );
}
