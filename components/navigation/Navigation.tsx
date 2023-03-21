"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={styles.wrapper}>
      <Link href="/" onClick={() => setIsActive("Home")}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.png"
            alt="swift-logo"
            style={{ cursor: "pointer" }}
            width={250}
            height={90}
            priority
          />
        </div>
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
      {/* Mobile navigation */}
      <div className={styles.mobile__navWrapper}>
        <div className={styles.mobile__navIcons}>
          {!isOpen && (
            <GiHamburgerMenu
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={25}
            />
          )}
          {isOpen && (
            <AiOutlineClose
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={25}
            />
          )}
        </div>
        <div
          className={
            isOpen
              ? `${styles.mobile__nav__links}`
              : `${styles.mobile__nav__links__none}`
          }
        >
          {Links.map((item, index) => (
            <div className={styles.mobile__nav__links__item} key={index}>
              <Link
                href={item.url}
                key={index}
                className={
                  isActive === item.name ? `${styles.activeLink}` : undefined
                }
                onClick={() => {
                  showNav();
                  setIsActive(item.name);
                }}
                id={item.reservation}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
