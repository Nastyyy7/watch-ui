// import Image from "next/image";
import styles from "./personAccount.module.css";
// import Account from "../../public/account.png";
import Link from 'next/link';
import { cookies } from 'next/headers'

async function PersonAccount() {
    const cookieStore = await cookies()
    const User = cookieStore.get('User')
    // я поняла что выше мы получаем куку, в которой уже хранться передаваемый айди юзера, но я не понимаю по какому пути к нему обращаться
    // http://127.0.0.1:8000/api/v1/login
    // {
    //     "token": "31|OKk4y6KNgyfHEyL14Lax6DgigL3RFOaJLVWfmaanb209c417",
    //     "user_id": 26
    // }
    const uri = new URL("http://127.0.0.1:8000/api/v1/users/" + User.value);
    const response = await fetch(uri, {
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    });
    const user = await response.json();
    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.account}>
                    <p className={styles.account_title}>Личный кабинет</p>
                    <div className={styles.account_data}>
                        <img src="../../account.png" width={345} height={345} style={{ borderRadius: '50px', pointerEvents: 'none' }} alt="default_avatar" />
                        {/* <Image
                            src={Account}
                            width={345}
                            height={345}
                            style={{ borderRadius: '50px', pointerEvents: 'none' }}
                            alt="default_avatar" /> */}
                        <div className={styles.account_data_info}>
                            <div className={styles.account_data_info_details}>
                                <p className={styles.account_data_info_details_text}>Имя</p>
                                <p className={styles.account_data_info_details_variable}>{user.name}</p>
                            </div>
                            <div className={styles.account_data_info_details}>
                                <p className={styles.account_data_info_details_text}>Email</p>
                                <p className={styles.account_data_info_details_variable}>{user.email}</p>
                            </div>
                            <div className={styles.account_data_info_btn}>
                                <Link className={styles.account_data_info_btn_edit} href="">Изменить</Link>
                                <Link className={styles.account_data_info_btn_edit} href="">Выйти</Link>
                            </div>
                            <div className={styles.account_data_info_delete}>
                                <Link className={styles.account_data_info_delete_link} href="">Удалить аккаунт</Link>
                                <p className={styles.account_data_info_delete_text}>После удаления аккаунта все данные о заказах будут удалены</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.order}>
                    <h3 className={styles.order_title}>Детали заказа</h3>
                    <div className={styles.order_information}>
                        <p className={styles.order_information_none}>Заказов пока нет</p>
                    </div>
                </div>
                <hr />
                <div className={styles.history}>
                <h3 className={styles.history_title}>История заказов</h3>
                    <div className={styles.history_information}>
                        <p className={styles.history_information_none}>Ещё нет законченых заказов</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    PersonAccount,
};