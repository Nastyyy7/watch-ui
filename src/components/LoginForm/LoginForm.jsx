'use client'

import styles from "./loginform.module.css";
import { auth } from '@/app/actions/auth'
import { useActionState, useState } from 'react'


export default function LoginForm({ onClose, onOpenSignup }) {
  const [state, action, pending] = useActionState(auth, undefined)
  const [email, setEmail] = useState('')

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={styles.conteiner}>
        <div className={styles.login}>
          <div className={styles.login_content}>
            <div className={styles.login_content_head}>
              <p className={styles.login_content_head_text}>Авторизация</p>
              <div className={styles.login_content_head_close} onClick={onClose}></div>
            </div>
            <form className={styles.login_content_form} action={action}>
              <div className={styles.login_content_form_content}>
                <label className={styles.login_content_form_content_lable} htmlFor="email">Email</label>
                <input className={styles.login_content_form_content_input} id="email" name="email" placeholder="Email" value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
                {state?.errors?.email && <p className={styles.login_content_form_content_error}>{state.errors.email}</p>}
              </div>
              <div className={styles.login_content_form_content}>
                <label className={styles.login_content_form_content_lable} htmlFor="password">Пароль</label>
                <input className={styles.login_content_form_content_input} id="password" name="password" type="password" />
                {state?.errors?.password && (
                  <div>
                    <p className={styles.login_content_form_content_error}>Пароль должен быть:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                        <li className={styles.login_content_form_content_error} key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <p className={styles.login_content_form_content_link} onClick={() => { onClose(); onOpenSignup(); }}>У вас нет аккаунта?</p>
              <button className={styles.login_content_form_content_btn} disabled={pending} name="submit" type="submit">
                Войти
              </button>
              {state?.message && (
                <p className={styles.signup_content_form_content_error}>{state.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export {
  LoginForm,
};