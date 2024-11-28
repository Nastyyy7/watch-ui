// import Image from "next/image";
import styles from "./personAccount.module.css";
// import Account from "../../public/account.png";

function PersonAccount() {
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
                                <p className={styles.account_data_info_details_variable}>Anna</p>
                            </div>
                            <div className={styles.account_data_info_details}>
                                <p className={styles.account_data_info_details_text}>Email</p>
                                <p className={styles.account_data_info_details_variable}>nghbfdgfh@kvfdfid.ry</p>
                            </div>
                            <div className={styles.account_data_info_details}>
                                <p className={styles.account_data_info_details_text}>Номер телефона</p>
                                <p className={styles.account_data_info_details_variable}>88888888888</p>
                            </div>
                            <div className={styles.account_data_info_btn}>
                                <a className={styles.account_data_info_btn_edit} href="">Изменить</a>
                                <a className={styles.account_data_info_btn_edit} href="">Выйти</a>
                            </div>
                            <div className={styles.account_data_info_delete}>
                                <a className={styles.account_data_info_delete_link} href="">Удалить аккаунт</a>
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