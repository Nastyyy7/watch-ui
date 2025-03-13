'use client'

import styles from "./singupform.module.css";
import { signup } from '@/app/actions/signup'
import { useActionState, useState } from 'react'

export default function SignupForm({ onClose, onOpenLogin }) {
  const [state, action, pending] = useActionState(signup, undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={styles.conteiner}>
        <div className={styles.signup}>
          <div className={styles.signup_content}>
            <div className={styles.signup_content_head}>
              <p className={styles.signup_content_head_text}>Регистрация</p>
              <div className={styles.signup_content_head_close} onClick={onClose}></div>
            </div>
            <form className={styles.signup_content_form} action={action}>
              <div className={styles.signup_content_form_content}>
                <label className={styles.signup_content_form_content_lable} htmlFor="name">Имя</label>
                <input className={styles.signup_content_form_content_input} id="name" name="name" placeholder="Имя" value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }} />
                {state?.errors?.name && <p className={styles.signup_content_form_content_error}>{state.errors.name}</p>}
              </div>
              <div className={styles.signup_content_form_content}>
                <label className={styles.signup_content_form_content_lable} htmlFor="email">Email</label>
                <input className={styles.signup_content_form_content_input} id="email" name="email" placeholder="Email" value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}/>
                {state?.errors?.email && <p className={styles.signup_content_form_content_error}>{state.errors.email}</p>}
              </div>
              <div className={styles.signup_content_form_content}>
                <label className={styles.signup_content_form_content_lable} htmlFor="password">Пароль</label>
                <input className={styles.signup_content_form_content_input} id="password" name="password" type="password" />
                {state?.errors?.password && (
                  <div>
                    <p className={styles.signup_content_form_content_error}>Пароль должен быть:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                        <li className={styles.signup_content_form_content_error} key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.signup_content_form_content}>
                <label className={styles.signup_content_form_content_lable} htmlFor="password_confirmation">Повторите пароль</label>
                <input className={styles.signup_content_form_content_input} id="password_confirmation" name="password_confirmation" type="password" />
                {state?.errors?.password_confirmation && (
                  <div>
                    <p className={styles.signup_content_form_content_error}>Пароль должен быть:</p>
                    <ul>
                      {state.errors.password_confirmation.map((error) => (
                        <li className={styles.signup_content_form_content_error} key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <p className={styles.signup_content_form_content_link} onClick={() => { onClose(); onOpenLogin(); }}>У вас уже есть аакаунт?</p>
              <button className={styles.signup_content_form_content_btn} disabled={pending} name="submit" type="submit">
                Зарегистрироваться
              </button>
              {state?.message && (
                <p className={styles.signup_content_form_content_error}>Вы успешно зарегистрированы. Зайдите на почту!</p>
              )}
            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export {
  SignupForm,
};