import { fetchUserRegister } from "src/api/user/fetchUserRegister";
import cls from "./loginRegistration.module.scss";
import { useState } from "react";
import { fetchUserLogin } from "src/api/user/fetchUserLogin";
import { useRouter } from "next/navigation";

export const LoginRegistration = ({ onClose }) => {
  const router = useRouter();
  const [isSwitchLoginRegister, setSwitchLoginRegister] = useState(true);
  const [isPasswordsMatch, setPasswordsMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  async function sendUserData(event) {
    event.preventDefault(); // предотвращает перезагрузку страницы
    const formData = new FormData(event.target); // собирает данные из формы
    const data = Object.fromEntries(formData.entries()); // конвертирует FormData в объект

    if (isSwitchLoginRegister) {
      try {
        const response = await fetchUserLogin(data.email, data.password);
        console.log("Регистрация успешна:", response.token);
        localStorage.setItem("token", response.token);
        router.push("/user");
        onClose();
      } catch (error) {}
    } else {
      const validPassword = data.password === data.confirmPassword;
      setPasswordsMatch(validPassword); // Устанавливаем состояние для проверки паролей

      if (validPassword) {
        try {
          const response = await fetchUserRegister(data.email, data.password);
          console.log("Регистрация успешна:", response);
          // Можно добавить логику для успешной регистрации, например, перенаправление
        } catch (error) {
          setErrorMessage(error.message); // Устанавливаем сообщение об ошибке
        }
      }
    }
  }

  return (
    <div className={cls.authorizationWind}>
      <h1 className={cls.registrationTitle}>
        {isSwitchLoginRegister ? "Авторизация" : "Регистрация"}
      </h1>
      <form
        id="registration-form"
        className={cls.registrationForm}
        onSubmit={sendUserData}
      >
        <p> {errorMessage}</p>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Адрес электронной почты:"
          className={cls.registrationInput}
        />

        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Пароль:"
          className={cls.registrationInput}
        />

        <input
          type="password"
          id="password"
          name="confirmPassword"
          required={!isSwitchLoginRegister}
          placeholder="Повторитe пароль:"
          className={`${cls.registrationInput} ${
            isSwitchLoginRegister ? cls.hide : ""
          }`}
        />
        <p> {isPasswordsMatch ? "" : "Пароли не совпадают"}</p>

        <button
          type="submit"
          className={`middleBtn`}
          //  onClick={sendUserData}
        >
          {isSwitchLoginRegister ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>

      <button
        className={cls.switchLoginRegister}
        onClick={() => {
          setSwitchLoginRegister(!isSwitchLoginRegister);
          setErrorMessage("");
        }}
      >
        <span
          style={{
            left: isSwitchLoginRegister ? "100%" : "0",
            transform: isSwitchLoginRegister ? "translateX(-100%)" : "",
          }}
        >
          {isSwitchLoginRegister
            ? "Зарегистрироваться >>"
            : "<< Авторизоваться"}
        </span>
      </button>
    </div>
  );
};
