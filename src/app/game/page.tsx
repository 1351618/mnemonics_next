// src\app\pages\pageHome\page.tsx

import Image from "next/image";

import cls from "./pageGame.module.scss";
import ImgCardTest6 from "./out-0 (6).webp";

export default function PageGame() {
  return (
    <div className={cls.pageGame}>
      <Image
        className={cls.pageGameBcImg}
        src={ImgCardTest6}
        alt="imgMiniCard"
      ></Image>
      <h1>Тайны старого замка</h1>
      <section className={cls.pageGameSectBoard}>
        <div className={cls.SectBoardB}>
          <h2>Призовой фонд</h2>
          <p>Текущий призовой фонд игры составляет:</p>

          <b>1 108 952 кредитов</b>
          <p>Фонд постоянно растет с каждым новым участником!</p>
        </div>
        <div className={cls.SectBoardB}>
          <h2>Вступительный взнос</h2>
          <p>Для участия в игре необходимо внести вступительный взнос:</p>

          <b>500 кредитов</b>
          <p>
            Взнос дает вам доступ ко всем игровым режимам и возможность выиграть
            часть призового фонда.
          </p>
        </div>
        <div className={cls.SectBoardB}>
          <h2>Список участников</h2>
          <p>Уже зарегистрированные игроки:</p>

          <ul>
            <li>Космический рейнджер</li>
            <li>Звездный пилот</li>
            <li>Галактический воин</li>
            <li>Межзвездный торговец</li>
            <li>Искатель приключений</li>
            <li>Космический пират</li>
            <li>Звездный инженер</li>
            <li>Межгалактический дипломат</li>
            <li>Космический археолог</li>
            <li>Звездный картограф</li>
          </ul>
          <p>Присоединяйтесь к нашим героям в битве за Галактику!</p>
        </div>
      </section>
    </div>
  );
}
