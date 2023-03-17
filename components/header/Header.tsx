"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
type LinkProps = {
  title: string;
  paragraph: string;
  btnName: string;
  btnUrl: string;
};

export default function Header() {
  //ROUTER LINK
  const router = useRouter();
  //NAVLINKS
  const Links: LinkProps[] = [
    {
      title: "Local and Continental Dishes",
      paragraph:
        "Enjoy mouth-watering cuisines and refreshing drinks to satisfy your cravings",
      btnName: "view menu",
      btnUrl: "/menu",
    },
    {
      title: "Book a Table Online",
      paragraph:
        "You can use our booking form to make a reservation for specific tables or meals ahead of time.",
      btnName: "book a table",
      btnUrl: "/reservation",
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTop}>
        <Image src="/assets/bg.png" alt="bg" fill />
      </div>
      <div className={styles.headerBottom}>
        {Links.map((link, index) => {
          return (
            <aside key={index}>
              <h1 className={styles.after}>{link.title}</h1>
              <p>{link.paragraph}</p>
              <button
                onClick={() => router.push(link.btnUrl)}
                className={styles.btn}
              >
                {link.btnName}
              </button>
            </aside>
          );
        })}
      </div>
    </div>
  );
}
