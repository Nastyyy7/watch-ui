import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Catalog } from "@/components/Catalog";
import Link from "next/link";

export const metadata = {
  title: "Каталог",
};

export default async function Home({ searchParams }) {
  const page = (await searchParams).page;
  // console.log((await searchParams).page);

  const uri = new URL("http://127.0.0.1:8000/api/v1/products/");
    uri.searchParams.append('page', page);
    const response = await fetch(uri, {
        headers: {
            'Accept': 'application/vnd.api+json'
        }
    });
    const products = await response.json();
    // console.log(products.data);
  return (
    <>
      <Header />
      <section>
        <div className={styles.conteiner}>
          <div className={styles.filter}>
            <h2 className={styles.filter_title}>Каталог</h2>
            <form className={styles.filter_search} action="">
              <input className={styles.filter_search_input} type="search" name="" placeholder="Поиск" alt="Введите для поиска" />
              <input className={styles.filter_search_submit} type="submit" name="" value="" alt="Искать" />
            </form>
            <div className={styles.filter_choice}>
              <div className={styles.filter_choice_sort}>
                <div className={styles.filter_choice_sort_title}>
                  <div className={styles.filter_choice_sort_title_icon} alt=""></div>
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
                  <div className={styles.filter_choice_price_title_icon} alt=""></div>
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
      <Catalog
      products={products} />
      <section>
        <div className={styles.conteiner}>
          <ul className={styles.pages}>
            {products.meta.links.map((link) => {
              return (
                <li key={link.label} className={styles.pages_item}>{
                  (link.url) ?
                    <Link
                      href={{
                        pathname: "/catalog/",
                        query: {
                          page: new URL(link.url).searchParams.get("page")
                        }
                      }}
                      style={{ color: '#E7D5A1' }}
                    >{link.label}</Link>
                    :
                    link.label
                }</li>
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
