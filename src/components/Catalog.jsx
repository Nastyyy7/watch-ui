// import Image from "next/image";
import styles from "./catalog.module.css";
// import Foto from "../../public/foto.png";

function Catalog() {
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.catalog}>
                    <div className={styles.catalog_card}>
                        <a href="../card" style={{ textDecoration: 'none', color: '#3D4149' }}>
                        <img src="../../foto.png" alt="7001410" width={300} height={370} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                            {/* <Image
                                src={Foto}
                                width={300}
                                height={370}
                                style={{
                                    borderRadius: "10px",
                                    // pointerEvents: 'none'
                                }}
                                alt="7001410"/> */}
                            <h3 className={styles.catalog_card_title}>Наручные часы LEVEL</h3>
                            <p className={styles.catalog_card_article}>Артикул: <span>7001410</span></p>
                            <p className={styles.catalog_card_price}>2500<span>руб</span></p>
                        </a>
                        <div className={styles.catalog_card_btn}>
                            <form className={styles.catalog_card_btn_quantity} action="">
                                <input className={styles.catalog_card_btn_quantity_minus} type="submit" value="" />
                                <p className={styles.catalog_card_btn_quantity_text}>1</p>
                                <input className={styles.catalog_card_btn_quantity_plus} type="submit" value="" />
                            </form>
                            <form className={styles.catalog_card_btn_buy} action="">
                                <input className={styles.catalog_card_btn_buy_image} content="" type="submit" value="" />
                                <input className={styles.catalog_card_btn_buy_text} content="" type="submit" value="Купить" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Catalog,
};