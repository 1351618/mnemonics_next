import { GamesBoard } from "../../components/gamesBoard/ui/GamesBoard";
import cls from "./pageGames.module.scss";

export default function PageGames() {
  return (
    <div className={cls.pageGames}>
      <GamesBoard />
    </div>
  );
}
