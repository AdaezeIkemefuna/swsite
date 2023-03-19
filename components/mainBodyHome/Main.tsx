import Image from "next/image";
import styles from "./Main.module.scss";
type MainProps = {
  imageUrl: string;
  title: string;
  paragraph: string;
  paragraph2?: string;
};
export default function Main() {
  const MainSection: MainProps[] = [
    {
      imageUrl: "/assets/main1.png",
      title: "Out-Bar",
      paragraph:
        "Swift Lounge exhibits a wide range of renowned wines, beers, spirits and soft drinks.",
      paragraph2:
        "Our selection of drinks perfectly complements your food dishes for a delightful experience.",
    },
    {
      imageUrl: "/assets/main2.png",
      title: "Lounge",
      paragraph:
        "Our state-of-the-art lounge offers you the ambience to enjoy your meal and drink in a serene atmosphere.",
    },
    {
      imageUrl: "/assets/main3.png",
      title: "Food",
      paragraph:
        "We source only the freshest and highest quality ingredients to make your food experience unforgettable.",
      paragraph2: "Try our menu today!",
    },
    {
      imageUrl: "/assets/main4.png",
      title: "Snooker",
      paragraph: "Unwind after a long day at our snooker bar.",
      paragraph2:
        "Enjoy the game's buzz with amiable friends or sporting strangers ready to have fun with you.",
    },
  ];
  return (
    <main className={styles.main}>
      {MainSection.map((section, index) => {
        return (
          <section className={styles.main__section} key={index}>
            <aside className={styles.main__sectionAside}>
              <Image src={section.imageUrl} alt="environ" fill />
            </aside>
            <aside className={styles.main__sectionAside2}>
              <h1>{section.title}</h1>
              <p>{section.paragraph}</p>

              <p>{section.paragraph2}</p>
            </aside>
          </section>
        );
      })}
    </main>
  );
}
