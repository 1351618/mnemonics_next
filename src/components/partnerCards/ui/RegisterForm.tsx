// import { partnersItems } from "../lib/items";
import cls from "./registerForm.module.scss";

export const RegisterForm = () => {
  return (
    <div className={cls.registration}>
      <h2>Регистрация</h2>
      <form className={cls.registerForm} id="register-form">
        <input type="text" placeholder="Имя пользователя" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
