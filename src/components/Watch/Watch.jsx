// import Image from "next/image";
import styles from "./watch.module.css";
// import Foto from "../../public/foto.png";
import Link from 'next/link'

function Watch() {
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.watch}>
                    <h2 className={styles.watch_title}>Часы</h2>
                    <div className={styles.watch_slider}>
                        <div className={styles.watch_slider_last}></div>
                        <Link href="/catalog/" style={{ textDecoration: 'none', color: '#3D4149' }}>
                            <div className={styles.watch_slider_block}>
                            <img src="../../foto.png" alt="7001410" width={270} height={340} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                                {/* <Image
                                    src={Foto}
                                    width={270}
                                    height={340}
                                    style={{ borderRadius: "10px", pointerEvents: 'none' }}
                                    alt="7001410" /> */}
                                <h3 className={styles.watch_slider_block_title}>Наручные часы LEVEL</h3>
                                <p className={styles.watch_slider_block_article}>Артикул: <span>7001410</span></p>
                                <p className={styles.watch_slider_block_price}>2500<span>руб</span></p>
                            </div>
                        </Link>
                        <Link href="/catalog/" style={{ textDecoration: 'none', color: '#3D4149' }}>
                            <div className={styles.watch_slider_block}>
                            <img src="../../foto.png" alt="7001410" width={270} height={340} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                                {/* <Image
                                    src={Foto}
                                    width={270}
                                    height={340}
                                    style={{ borderRadius: "10px", pointerEvents: 'none' }}
                                    alt="7001410" /> */}
                                <h3 className={styles.watch_slider_block_title}>Наручные часы LEVEL</h3>
                                <p className={styles.watch_slider_block_article}>Артикул: <span>7001410</span></p>
                                <p className={styles.watch_slider_block_price}>2500<span>руб</span></p>
                            </div>
                        </Link>
                        <Link href="/catalog/" style={{ textDecoration: 'none', color: '#3D4149' }}>
                            <div className={styles.watch_slider_block}>
                            <img src="../../foto.png" alt="7001410" width={270} height={340} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                                {/* <Image
                                    src={Foto}
                                    width={270}
                                    height={340}
                                    style={{ borderRadius: "10px", pointerEvents: 'none' }}
                                    alt="7001410" /> */}
                                <h3 className={styles.watch_slider_block_title}>Наручные часы LEVEL</h3>
                                <p className={styles.watch_slider_block_article}>Артикул: <span>7001410</span></p>
                                <p className={styles.watch_slider_block_price}>2500<span>руб</span></p>
                            </div>
                        </Link>
                        <Link href="/catalog/" style={{ textDecoration: 'none', color: '#3D4149' }}>
                            <div className={styles.watch_slider_block}>
                            <img src="../../foto.png" alt="7001410" width={270} height={340} style={{ borderRadius: '10px', pointerEvents: 'none' }} />
                                {/* <Image
                                    src={Foto}
                                    width={270}
                                    height={340}
                                    style={{ borderRadius: "10px", pointerEvents: 'none' }}
                                    alt="7001410" /> */}
                                <h3 className={styles.watch_slider_block_title}>Наручные часы LEVEL</h3>
                                <p className={styles.watch_slider_block_article}>Артикул: <span>7001410</span></p>
                                <p className={styles.watch_slider_block_price}>2500<span>руб</span></p>
                            </div>
                        </Link>
                        <div className={styles.watch_slider_next}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Watch,
};