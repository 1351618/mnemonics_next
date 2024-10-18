import Baner from "src/components/baner/Baner";
import cls from "./pageHome.module.scss";
import { Words } from "src/components/words/ui/Words";

export default function PageHome() {
  return (
    <main className={cls.main}>
      <section className={cls.mainBaner}>
        <Words />
        <Baner />
      </section>
    </main>
  );
}
