'use client'
import Image from "next/image";
import { useState } from 'react';
import styles from "./page.module.css";
import { Header } from "@/components/Header"
import { Calc } from "@/components/Calc";
import { Watch } from "@/components/Watch"
import { Footer } from "@/components/Footer"
import { SignupForm } from "@/components/SignupForm"
import { LoginForm } from "@/components/LoginForm"

export default function Home() {
  const [isSignupFormOpen, setSignupFormOpen] = useState(false); // Состояние для управления модальным окном регистрации
  const [isLoginFormOpen, setLoginFormOpen] = useState(false); // Для авторизации
  
  const openSignupForm = () => {
    setSignupFormOpen(true); // Открытие модального окнаopenSignupForm
    setLoginFormOpen(false); // Закрыть авторизацию, если открыта регистрация
  };

  const closeSignupForm = () => {
    setSignupFormOpen(false); // Закрытие модального окна
  };
  
  const openLoginForm = () => {
    setLoginFormOpen(true);
    setSignupFormOpen(false); // Закрыть регистрацию, если открыта авторизация
  };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  return (
    
    <>
      <Header openSignupForm={openSignupForm}/>
      {isSignupFormOpen && <SignupForm onClose={closeSignupForm} onOpenLogin={openLoginForm} />}
      {isLoginFormOpen && <LoginForm onClose={closeLoginForm} onOpenSignup={openSignupForm} />}
      <section>
        <div className={styles.fon} rel="preload" as="style">
          <div className={styles.conteiner}>
            <div className={styles.main}>
              <div className={styles.main_logo}></div>
                <div className={styles.main_img}></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.watch}>
          <div className={styles.conteiner}>
            <div className={styles.offers}>
              <p className={styles.offers_title}>Мы предлагаем</p>
              <div className={styles.offers_block}>
                <div className={styles.offers_block_item}>
                  <div className={styles.offers_block_item_img1}></div>
                  <h3 className={styles.offers_block_item_text}>Наручные часы</h3>
                </div>
                <div className={styles.offers_block_item}>
                <div className={styles.offers_block_item_img2}></div>
                  <h3 className={styles.offers_block_item_text}>Настенные часы</h3>
                </div>
                <div className={styles.offers_block_item}>
                <div className={styles.offers_block_item_img3}></div>
                  <h3 className={styles.offers_block_item_text}>Будильники</h3>
                </div>
                <div className={styles.offers_block_item}>
                <div className={styles.offers_block_item_img4}></div>
                  <h3 className={styles.offers_block_item_text}>Элементы питания</h3>
                </div>
                <div className={styles.offers_block_item}>
                  <div className={styles.offers_block_item_img5}></div>
                  <h3 className={styles.offers_block_item_text}>Ремонт часов</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Calc />
      <Watch />
      <Footer />
    </>
  );
}
