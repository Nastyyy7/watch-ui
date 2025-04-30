import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Catalog } from "@/components/Catalog";
import Link from "next/link";
import { Search } from "@/components/Search";

export const metadata = {
  title: "Каталог",
};

export default async function Home({ searchParams }) {
  const searchParamsData = (await searchParams);
  const page = searchParamsData.page;

  // console.log((await searchParams).page);
  console.log(searchParamsData)
  const uri = new URL("http://127.0.0.1:8000/api/v1/products/");
  // const filteredParam = searchParamsData.filter((param)=>{
  //   return typeof param !== 'undefined';
  // }
  // )
  // console.log(filteredParam)
  for (const [key, value] of Object.entries(searchParamsData)) {
    if (typeof value !== 'undefined')
    uri.searchParams.append(key, value);
  }
  
  // uri.searchParams.append('page', page);
  // uri.searchParams.append('filter[name]', searchParamsData['filter[name]']);
  // uri.searchParams.append('filter[price][>]', searchParamsData['filter[price][>]']);
  // uri.searchParams.append('filter[price][<]', searchParamsData['filter[price][<]']);
  // uri.searchParams.append('sort', searchParamsData['sort']);
  
  // console.log(uri)
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
            <Search />
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
