import styles from "./page.module.scss";
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import Image from "next/image";
export default function page() {
  return (
    <div className={styles.mainContact}>
      <section className={styles.contactWrapper}>
        <aside>
          <h1>Use the form below to contact us</h1>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input
            type="number"
            placeholder="Phone Number"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email Address"
            className={styles.input}
          />
          <textarea
            style={{ width: "100%" }}
            placeholder="Message"
            className={styles.input}
          ></textarea>
          <button className={styles.btn2}>send message</button>
        </aside>
        <aside>
          <h1>Get in touch</h1>
          <p>
            Swift Lounge fuses elegance and leisure to create an environment
            that makes every occasion momentous.
          </p>
          <p>
            <MdLocationOn color="#e7992a" size={25} />
            <span>3D Igboeze St, Independence Layout 400271, Enugu</span>
          </p>
          <p>
            <HiPhone color="#e7992a" size={25} />
            <span>(+234) 816 587 3854, (+234) 894 749 2928</span>
          </p>
        </aside>
      </section>
      <div className={styles.mapImage}>
        <Image src="/assets/map.png" alt="map" fill />
      </div>
    </div>
  );
}
