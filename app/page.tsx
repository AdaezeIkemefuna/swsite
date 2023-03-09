import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>Hello world</h1>
    </main>
  );
}
