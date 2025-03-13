// import Image from "next/image";
import styles from "./card.module.css";
// import Foto from "../../public/foto.png";

function Card({product}) {
    const properties = JSON.parse(product.attributes.properties); 
    return (
        
        <section>
            <div className={styles.conteiner}>
                <a className={styles.link} href="/catalog/">
                    <div className={styles.link_img} alt='Назад'></div>
                    <p className={styles.link_text}>Вернуться к покупкам</p>
                </a>
                <article className={styles.card}>
                    <img src="../../foto.png" alt="7001410" width={630} height={767} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                    <Image
                        src={Foto}
                        width={630}
                        height={767}
                        style={{ borderRadius: '10px', pointerEvents: 'none' }}
                        alt="7001410" />
                    <div className={styles.card_block}>
                        <h3 className={styles.card_block_title}>{product.attributes.name}</h3>
                        <p className={styles.card_block_article}>Артикул: <span>{properties.article}</span></p>
                        <p className={styles.card_block_price}>{product.attributes.price}<span>руб</span></p>
                        <div className={styles.card_block_btn}>
                            <form className={styles.card_block_btn_quantity} action="">
                                <input className={styles.card_block_btn_quantity_minus} type="submit" value="" />
                                <p className={styles.card_block_btn_quantity_text}>1</p>
                                <input className={styles.card_block_btn_quantity_plus} type="submit" value="" />
                            </form>
                            <form className={styles.card_block_btn_buy} action="">
                                <input className={styles.card_block_btn_buy_image} content="" type="submit" value="" />
                                <input className={styles.card_block_btn_buy_text} content="" type="submit" value="Купить" />
                            </form>
                        </div>
                    </div>
                </article>
                <hr />
                <div className={styles.properties}>
                    <h3 className={styles.properties_title}>Описание</h3>
                    <div className={styles.properties_information}>
                        <div className={styles.properties_information_variable}>
                            <p className={styles.properties_information_variable_type}>Тип механизма</p>
                            <p className={styles.properties_information_variable_name}>Кварцевые</p>
                        </div>
                        <div className={styles.properties_information_variable}>
                            <p className={styles.properties_information_variable_type}>Производитель</p>
                            <p className={styles.properties_information_variable_name}>LEVEL</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.review}>
                    <h3 className={styles.review_title}>Отзывы</h3>
                    <div className={styles.review_information}>
                        Отзывы отсутсвуют
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Card,
};