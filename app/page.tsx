import Header from "@/components/header/Header";
import Main from "@/components/mainBodyHome/Main";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Main />
    </main>
  );
}
