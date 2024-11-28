import Image from "next/image";
import styles from "./basket.module.css";
import Foto from "../../public/foto.png";

function Basket() {
    return (
        <section>
            <div className={styles.conteiner}>
                <a className={styles.link} href="../../catalog">
                    <div className={styles.link_img} alt='Назад'></div>
                    <p className={styles.link_text}>Вернуться к покупкам</p>
                </a>
                <div className={styles.basket}>
                    <p className={styles.basket_title}>Корзина</p>
                    <div className={styles.basket_card}>
                        <Image
                            src={Foto}
                            width={280}
                            height={350}
                            style={{ borderRadius: '10px', pointerEvents: 'none' }}
                            alt="" />
                        <div className={styles.basket_card_block}>
                            <div className={styles.basket_card_block_name}>
                                <h3 className={styles.basket_card_block_name_title}>Наручные часы LEVEL</h3>
                                <p className={styles.basket_card_block_name_article}>Артикул: <span>7001410</span></p>
                            </div>
                            <div className={styles.basket_card_block_btn}>
                                <form className={styles.basket_card_block_btn_quantity} action="">
                                    <input className={styles.basket_card_block_btn_quantity_minus} type="submit" value="" />
                                    <p className={styles.basket_card_block_btn_quantity_text}>1</p>
                                    <input className={styles.basket_card_block_btn_quantity_plus} type="submit" value="" />
                                </form>
                            </div>
                            <p className={styles.basket_card_block_price}>2500<span>руб</span></p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.details}>
                    <h3 className={styles.details_title}>Детали заказа</h3>
                    <div className={styles.details_information}>
                        <p className={styles.details_information_quantity}>1 товар</p>
                        <p className={styles.details_information_price}>2500 руб</p>
                    </div>
                </div>
                <hr />
                <div className={styles.total}>
                    <h3 className={styles.total_title}>Итого:</h3>
                    <p className={styles.total_price}>2500 руб</p>
                    <a className={styles.total_btn} href="..">Забронировать</a>
                </div>
            </div>
        </section>
    );
}

export {
    Basket,
};