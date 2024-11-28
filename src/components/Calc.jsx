import Image from "next/image";
import styles from "./calc.module.css";

function Calc() {
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.calc}>
                    <div className={styles.calc_img}></div>
                    <div className={styles.calc_content}>
                        <h2 className={styles.calc_content_title}>Калькулятор стоимости</h2>
                        <p className={styles.calc_content_text}>Нажмите на кнопку и узнайте через калькулятор стоимость услуги</p>
                        <a className={styles.calc_content_button} href="../calculator">Рассчитать стоимость услуги</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Calc,
};