import Header from "@/components/header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
    </main>
  );
}
