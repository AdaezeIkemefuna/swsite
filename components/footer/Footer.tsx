"use client";
import { useState } from "react";
import styles from "./Footer.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
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
      name: "Reservation",
      url: "/reservation",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  //ACTIVE NAVSTATE
  const [isActive, setIsActive] = useState("Home");
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <sub className={styles.sub}>
        <aside className={styles.sub__left}>
          <h1 className={styles.after}>Book a Table Online</h1>
          <p>
            You can use our booking form to make a reservation for specific
            tables or meals ahead of time.
          </p>
          <button
            onClick={() => router.push("/reservation")}
            className={styles.btn}
          >
            book a table
          </button>
        </aside>

        <aside className={styles.sub__right}>
          <h2>Opening hours</h2>
          <ul>
            <li>
              <span>Monday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>Tuesday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>wednesday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>thursday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>friday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>saturday</span> <span>24 Hrs</span>
            </li>
            <li>
              <span>sunday</span> <span>24 Hrs</span>
            </li>
          </ul>
        </aside>
      </sub>

      <sub className={styles.footerLinks}>
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
      </sub>
      <div className={styles.copyright}>
        Copyright 2023 Swift Lounge & Bar. All Rights Reserved
      </div>
    </footer>
  );
}
