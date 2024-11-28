import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "О мастерской",
};

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className={styles.conteiner}>
          <div className={styles.content}>
            <h3 className={styles.content_title}>О мастерской</h3>
            <nav>
              <p className={styles.content_text}>Мы ремонтируем и обслуживаем:</p>
              <ul >
                <li className={styles.content_list}>механические и кварцевые наручные часы производства Швейцария, Япония, Россия, СССР и т. д.</li>
                <li className={styles.content_list}>настенные, напольные, настольные, каминные часы (с боем и без) отечественного и иностранного производства</li>
                <li className={styles.content_list}>механические и кварцевые будильники отечественного и импортного производства</li>
              </ul>
              <p className={styles.content_text}>А также:</p>
              <ul >
                <li className={styles.content_list}>Производим замену элементов питания в часах,автомобильных брелоках,записных книжках и т.д.В наличии элементы питания RENATA (производство Швейцария), MAXELL (производства Япония), VARTA (произвоства Германия) и прочие.</li>
                <li className={styles.content_list}>Устанавливаем часовые стекла</li>
                <li className={styles.content_list}>Производим замену ремешков и браслетов.В наличии большой ассортимент ремешков, в том числе больших размеров.</li>
                <li className={styles.content_list}>Мелкий ремонт (ремонт браслетов, замена переводных головок и т. д.)</li>
              </ul>
              <p className={styles.content_text}>У нас есть отдел розничной продажи наручных и настенных часов.</p>
              <p> Большой выбор элементов питания</p>
            </nav>
            <div className={styles.content_img}></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
