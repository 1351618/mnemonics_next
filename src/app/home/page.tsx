import Baner from "src/components/baner/Baner";
import cls from "./pageHome.module.scss";

export default function PageHome() {
  return (
    <main className={cls.main}>
      <section className={cls.mainBaner}>
        <Baner />
      </section>
    </main>
  );
}
