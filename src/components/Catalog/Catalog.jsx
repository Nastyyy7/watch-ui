// import Image from "next/image";
import styles from "./catalog.module.css";
// import Foto from "../../public/foto.png";
import Link from 'next/link'

async function Catalog({products}) {
    
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.catalog}>
                    {products.data.map((product) => {
                        return (
                            <article key={product.id} className={styles.catalog_card}>
                                <Link href={"/catalog/" + product.id} className={styles.catalog_card_link}></Link>
                                <img src="../../../foto.png" alt="7001410" width={300} height={370} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                                {/* <Image
                                src={Foto}
                                width={300}
                                height={370}
                                style={{
                                    borderRadius: "10px",
                                    // pointerEvents: 'none'
                                }}
                                alt="7001410"/> */}
                                <h3 className={styles.catalog_card_title}>{product.attributes.name}</h3>
                                <p className={styles.catalog_card_article}>Артикул: <span>7001410</span></p>
                                <p className={styles.catalog_card_price}>{product.attributes.price}<span>руб</span></p>
                                <div className={styles.catalog_card_btn}>
                                    <form className={styles.catalog_card_btn_quantity} action="">
                                        <input className={styles.catalog_card_btn_quantity_minus} type="submit" value="" alt="Убрать один" />
                                        <p className={styles.catalog_card_btn_quantity_text}>1</p>
                                        <input className={styles.catalog_card_btn_quantity_plus} type="submit" value="" alt="Добавить один" />
                                    </form>
                                    <form className={styles.catalog_card_btn_buy} action="" alt="Добавить в корзину">
                                        <input className={styles.catalog_card_btn_buy_image} content="" type="submit" value="" />
                                        <input className={styles.catalog_card_btn_buy_text} content="" type="submit" value="Купить" />
                                    </form>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export {
    Catalog,
};