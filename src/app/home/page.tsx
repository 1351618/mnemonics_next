import cls from "./pageHome.module.scss";
import { Words } from "src/components/words/ui/Words";

export default async function PageHome() {
  return (
    <main className={cls.main}>
      <section className={cls.mainBaner}>
        <Words />
      </section>
    </main>
  );
}
