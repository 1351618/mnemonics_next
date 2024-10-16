import cls from "./authorizationWind.module.scss";
import { useEffect, useRef } from "react";

export const AuthorizationWind = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const steamLoginButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleFormSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      alert(
        "Форма отправлена! В реальном приложении здесь будет логика регистрации."
      );
    };

    const handleSteamLogin = () => {
      alert("В разработке: Вход через Steam");
    };

    // Копируем рефы в переменные
    const currentFormRef = formRef.current;
    const currentSteamLoginButtonRef = steamLoginButtonRef.current;

    // Проверяем, что рефы существуют перед добавлением обработчиков событий
    if (currentFormRef) {
      currentFormRef.addEventListener("submit", handleFormSubmit);
    }
    if (currentSteamLoginButtonRef) {
      currentSteamLoginButtonRef.addEventListener("click", handleSteamLogin);
    }

    return () => {
      // Используем сохраненные переменные в функции очистки
      if (currentFormRef) {
        currentFormRef.removeEventListener("submit", handleFormSubmit);
      }
      if (currentSteamLoginButtonRef) {
        currentSteamLoginButtonRef.removeEventListener(
          "click",
          handleSteamLogin
        );
      }
    };
  }, []);

  return (
    <div className={cls.authorizationWind}>
      <h1 className={cls.registrationTitle}>Регистрация</h1>
      <form id="registration-form" className={cls.registrationForm}>
        <label htmlFor="name" className={cls.registrationLabel}>
          Имя:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={cls.registrationInput}
        />

        <label htmlFor="email" className={cls.registrationLabel}>
          Адрес электронной почты:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={cls.registrationInput}
        />

        <label htmlFor="password" className={cls.registrationLabel}>
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className={cls.registrationInput}
        />

        <button type="submit" className={`middleBtn`}>
          Зарегистрироваться
        </button>
      </form>

      <div className={cls.steamLogin}>
        <p className={cls.steamText}>или</p>
        <button className={cls.steamBtn} id="steam-login">
          Войти через Steam
        </button>
      </div>
      <svg className="iconsSVG">
        <use href="/icons.svg#emailIcon"></use>
      </svg>
    </div>
  );
};
