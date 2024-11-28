import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Calculator } from "@/components/Calculator";

export const metadata = {
  title: "Калькулятор",
};

export default function Home() {
  return (
    <>
      <Header />
      <section>
            <div className={styles.conteiner}>
                <div className={styles.calculator}>
                    <h2 className={styles.calculator_title}>Калькулятор стоимости</h2>
                    <p className={styles.calculator_text}>С помощью данного сервиса Вы можете предварительно рассчитать стоимость услуг ремонта и обслуживания Вашего изделия.</p>
                </div>
            </div>
        </section>
      <Calculator />
      <Footer />
    </>
  );
}
