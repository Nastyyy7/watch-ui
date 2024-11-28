import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Calc } from "@/components/Calc"

export const metadata = {
  title: "Услуги",
};

export default function Home() {
  return (
    <>
      <Header />
      <Calc />
      <section>
        <div className={styles.watch}>
          <div className={styles.conteiner}>
            <div className={styles.content}>
              <h3 className={styles.content_title}>Наши услуги</h3>
              <div className={styles.content_block}>
                <div className={styles.content_block_img}></div>
                <div className={styles.content_block_text}>
                  <p>Чистка и смазка мех. часов с ручным заводом.</p>
                  <p>Чистка и смазка часов с автоподзаводом</p>
                  <p>Чистка и смазка механич, часов тип хронограф</p>
                  <p>Замена переводной головки или переводного вала</p>
                  <p>Замена переводной головки или переводного вала в часах типа `&quot;`хронограф`&quot;`</p>
                  <p>Мелкий ремонт браслета,застежки</p>
                  <p>Мелкий ремонт корпуса (вынимание винтов высверливание,правка втулки и т.п.).</p>
                  <p>Перезапуск электронных часов. Выставление времени установка на `&quot;`0`&quot;` хронографа Подклейка выпавших рисок (за первую)</p>
                  <p>Подклейка выпавших рисок (за вторую и т.д. )</p>
                  <p>Правка, замена стрелок</p>
                  <p>Срочный ремонт (3 дня)</p>
                  <p>Механизм со следами коррозии</p>
                  <p>Отдельные виды работ, не предусмотренные прейскурантом</p>
                  <p>Ремонт электронно-механического будильника или настенных часов (замена механизма)</p>
                  <p>Сложный ремонт браслета или застежки</p>
                  <p>Сушка механизма, корпуса,герметизация силиконом(без полной чистки механизма без гарантии на ход)</p>
                  <p>Уменьшение браслета (за каждую сторону браслета)</p>
                  <p>Установка (замена) шпильки из нержавеющей стали (со шпилькой)</p>
                  <p>Чистка и смазка механизма простых кв.часов(замена)</p>
                  <p>Чистка и смазка механизма кв.часов типа `&quot;`хронограф`&quot;` `&quot;`календарь`&quot;`, сложн., мал. калибр.</p>
                  <p>Дефектация (диагностика)</p>
                  <p>Чистка корпуса часов и ораслета ультразвуком с полной разборкой корпуса часов</p>
                  <p>Замена круглого минерального стекла в часах</p>
                  <p>Замена сложного минерального стекла в часах</p>
                  <p>Замена пластикового стекла в часах</p>
                  <p>Замена уплотгителя задней крышки</p>
                  <p>Регулировка точности хода в механических часах без гарантии.</p>
                  <p>Замена ремня</p>
                  <p>Разб./сборка часов (извлечение механизма и т.д.).</p>
                </div>
              </div>
              <p className={styles.content_text}>Срок гарантии на выполненные работы (механизмы) - 3 месяца <br />На часы, получившие в период гарантийного срока механические повреждения, следы коррозии, гарантия не распространяется.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
