"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.scss";
export default function Navigation() {
  type LinkProps = {
    name: string;
    url: string;
    reservation?: any;
  };

  //NAVLINKS
  const Links: LinkProps[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "make Reservation",
      url: "/reservation",
      reservation: `${styles.reservation}`,
    },
  ];

  //ACTIVE NAVSTATE
  const [isActive, setIsActive] = useState("Home");
  return (
    <section className={styles.wrapper}>
      <Link href="/" onClick={() => setIsActive("Home")}>
        <Image
          src="/assets/logo.png"
          alt="swift-logo"
          style={{ cursor: "pointer" }}
          width={250}
          height={90}
          priority
        />
      </Link>
      <nav className={styles.navLinks}>
        {Links.map((link, index) => {
          return (
            <Link
              href={link.url}
              key={index}
              className={
                isActive === link.name ? `${styles.activeLink}` : undefined
              }
              id={link.reservation}
              onClick={() => setIsActive(link.name)}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
