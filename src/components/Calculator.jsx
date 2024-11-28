import Image from "next/image";
import styles from "./calculator.module.css";

function Calculator() {
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.calculator}>
                    <div className={styles.calculator_block}>
                        <form className={styles.calculator_block_brand} action="">
                            <label className={styles.calculator_block_brand_title}>Выберите бренд:</label>
                            <input className={styles.calculator_block_brand_input} type="text" list={'options'} />
                            <datalist className={styles.calculator_block_brand_select} id={"options"}>
                                <option className={styles.calculator_block_brand_option} value={'123'}>123</option>
                                <option className={styles.calculator_block_brand_option} value={'12345'}>12345</option>
                                <option className={styles.calculator_block_brand_option} value={'123456'}>123456</option>
                            </datalist>
                        </form>
                        <form className={styles.calculator_block_type} action="">
                            <label className={styles.calculator_block_type_title}>Выберите тип ремонта:</label>
                            <input className={styles.calculator_block_type_input} type="text" list="options" />
                            <datalist className={styles.calculator_block_type_select} id={"options"}>
                                <option className={styles.calculator_block_type_option} value={'123'}>123</option>
                                <option className={styles.calculator_block_type_option} value={'12345'}>12345</option>
                                <option className={styles.calculator_block_type_option} value={'123456'}>123456</option>
                            </datalist>
                        </form>
                        <form className={styles.calculator_block_repair} action="">
                            <label className={styles.calculator_block_repair_title}>Выберите бренд:</label>
                            <div className={styles.calculator_block_repair_checked}>
                                <input className={styles.calculator_block_repair_checked_input} type="checkbox" id="inputOne"/>
                                <label htmlFor="inputOne">Чистка и смазка механич. часов с ручным заводом<span> +3500 руб.</span></label>
                            </div>
                            <div className={styles.calculator_block_repair_checked}>
                                <input className={styles.calculator_block_repair_checked_input} type="checkbox" id="inputTwo"/>
                                <label htmlFor="inputTwo">Чистка и смазка часов с автоподзаводом<span> +4000 руб.</span></label>
                            </div>
                            <div className={styles.calculator_block_repair_checked}>
                                <input className={styles.calculator_block_repair_checked_input} type="checkbox" id="inputThree"/>
                                <label htmlFor="inputThree">Чистка и смазка механич, часов типа хронограф<span> +6000 руб.</span></label>
                            </div>
                        </form>
                        <form className={styles.calculator_block_more} action="">
                            <label className={styles.calculator_block_more_title}>Дополнение:</label>
                            <div className={styles.calculator_block_more_checked}>
                                <input className={styles.calculator_block_more_checked_input} type="checkbox" id="inputDon"/>
                                <label htmlFor="inputOne">Срочный ремонт (48 часов)<span>+20-50%</span></label>
                            </div>
                            <div className={styles.calculator_block_more_checked}>
                                <input className={styles.calculator_block_more_checked_input} type="checkbox" id="inputDopMore"/>
                                <label htmlFor="inputTwo">Часы, снятые с производства свыше 10 лет назад.<span>+20%</span></label>
                            </div>
                        </form>
                    </div>
                    <div className={styles.calculator_result}>
                        <p className={styles.calculator_result_title}>Итоговая цена</p>
                        <p className={styles.calculator_result_price}>3000 ₽ *</p>
                        <p className={styles.calculator_result_note}>* Цена указана без учета стоимости запчастей и не является публичной офертой.</p>
                        <a className={styles.calculator_result_button} href="..">Добавить в корзину</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Calculator,
};