"use client";

import cls from "./gamesBoard.module.scss";

import Image from "next/image";
import Link from "next/link";
import IMG from "../../../assets/images/images";

const gameData = [
  { id: 1, title: "Космические войны", imgUrl: IMG.Out8 },
  { id: 2, title: "Сладкий пазл", imgUrl: IMG.Out1 },
  { id: 3, title: "Скоростной драйв", imgUrl: IMG.Out2 },
  { id: 4, title: "Легенды драконов", imgUrl: IMG.Out3 },
  { id: 5, title: "Эпоха империй", imgUrl: IMG.Out4 },
  { id: 6, title: "Звериные бега", imgUrl: IMG.Out5 },
  { id: 7, title: "Тайны старого замка", imgUrl: IMG.Out6 },
  { id: 8, title: "Счастливая ферма", imgUrl: IMG.Out7 },
];

export const GamesBoard = () => {
  return (
    <div className={cls.gamesBoard}>
      <h2>Наши игры</h2>
      <div className={cls.gamesBoardCards}>
        {gameData.map((val) => {
          return (
            <Link href='' className={cls.gameMiniCard} key={val.id}>
              <Image src={val.imgUrl} alt='imgMiniCard'></Image>
              <h3>{val.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
