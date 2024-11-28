import Image from "next/image";
import styles from "./map.module.css";

function Map() {
    return (
        <section>
            <div className={styles.conteiner}>
                <div style={{position:'relative',overflow:'hidden', borderRadius:'40px', marginTop:'40px'}}>
                    <a href="https://yandex.ru/maps/org/remont_chasov/1109593602/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px',}}>Ремонт часов</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/clock_and_watch_repair/184108239/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px',}}>Ремонт часов в Москве</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/watch_shop/184107945/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'28px',}}>Магазин часов в Москве</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?display-text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B9&ll=37.640708%2C55.809437&mode=search&oid=1109593602&ol=biz&sctx=ZAAAAAgCEAAaKAoSCW%2FwhclU0UJAEW%2Fx8J4D30tAEhIJup7ouvCDzT8RY5y%2FCYUItD8iBgABAgMEBSgKOABAp5IHSAFqAnJ1nQHNzMw9oAEAqAEAvQEtxeLswgEWgpyMkQTf1KrTBoKHxdv7AtDV4K3GBoICNdGA0LXQvNC%2B0L3RgiDRh9Cw0YHQvtCyINC90LAg0LDQu9C10LrRgdC10LXQstGB0LrQvtC5igIJMTg0MTA4MjM5kgIFMjAzODmaAgxkZXNrdG9wLW1hcHOqAmIyMjM3OTc4NjU5OTcsNTU5Mjk0MDg4MTMsMzgzNTg0NzI3NzIsMTgxODA3MjM5OTQ4LDY5ODI4NzI5NDgyLDE2MTE4MTg5Mzk4OSw0MzMwNDU0NjU0LDE1NTUyODczNjI4M7ACAQ%3D%3D&sll=37.640708%2C55.809437&sspn=0.012157%2C0.006670&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B9&utm_source=share&z=16.13" width={1600} height={500} frameBorder={1} allowFullScreen={true} style={{position:'relative',}}></iframe>
                </div>
            </div>
        </section>
    );
}

export {
    Map,
};