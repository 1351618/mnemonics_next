"use client";

import Image from "next/image";
import cls from "./logAccountBtn.module.scss";
import { useEffect, useState } from "react";
import { LoginRegistration } from "src/components/LoginRegistration/ui/LoginRegistration";
import { fetchUserCurrent } from "src/api/user/fetchUserCurrent";
import IMG from "src/assets/images/images";
import { useRouter } from "next/navigation";

export const LogAccountBtn = () => {
  const router = useRouter();
  const [isSubstrate, setSubstrate] = useState(false);
  const [isUserFoto, setUserFoto] = useState("");
  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!isAuthorized) {
      router.push("/");
    }
  }, [isAuthorized]);

  // Функция для получения фото пользователя
  const getUserFoto = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      try {
        const response = await fetchUserCurrent(token);
        console.log(response.photo);
        setAuthorized(true);
        response.photo === null ? setUserFoto("") : setUserFoto(response.photo);
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        setAuthorized(false);
      }
    } else {
      console.log("нет токена");
      setAuthorized(false);
    }
  };

  // useEffect для первоначального получения данных
  useEffect(() => {
    getUserFoto(); // Загружаем фото при первом рендере
  }, []);

  // Функция для закрытия поля регистрации и получения фото
  function substrateOnOff() {
    getUserFoto(); // Получаем фото при каждом открытии/закрытии
    setSubstrate(!isSubstrate);
  }

  return (
    <>
      <button
        className={cls.logAccountBtn}
        onClick={() => (isAuthorized ? router.push("/user") : substrateOnOff())}
      >
        {isUserFoto === "" ? (
          <Image src={IMG.DefaultPhoto} alt="foto" />
        ) : (
          <img src={isUserFoto} alt="foto" />
        )}
      </button>

      <div
        className={`substrate ${isSubstrate ? "active" : ""}`}
        onClick={substrateOnOff}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <LoginRegistration onClose={substrateOnOff} />
        </div>
      </div>
    </>
  );
};
