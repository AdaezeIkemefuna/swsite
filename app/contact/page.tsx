"use client";
import styles from "./page.module.scss";
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
interface Tutorial {
  from?: string;
  message: string;
  subject: string;
}
export default function page() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const contact = async ({
    from,

    subject,

    message,
  }: Tutorial) => {
    try {
      const response = await fetch("https://m-kozm.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,

          subject,

          message,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("ok");
        setLoading(false);
        toast.success("message sent", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
      }
    } catch (err) {
      console.log(err, "not working");
      toast.error("failed to send message", {
        position: toast.POSITION.BOTTOM_LEFT,
      });

      setLoading(false);
    } finally {
      setSubject("");
      setMessage("");
      setFrom("");
      setPhone("");
      setLoading(false);
    }
  };

  const contactHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    contact({ from, subject, message });
  };
  return (
    <div className={styles.mainContact}>
      <ToastContainer />
      <section className={styles.contactWrapper}>
        <form onSubmit={(e) => contactHandler(e)}>
          <aside>
            <h1>Use the form below to contact us</h1>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
              required
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              className={styles.input}
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Address"
              className={styles.input}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              style={{ width: "100%" }}
              placeholder="Message"
              className={styles.input}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {loading === true ? (
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0rem",
                  backgroundColor: "#e7992a",
                  borderRadius: "6px",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                <InfinitySpin width="100" color="#fff" />
              </div>
            ) : (
              <button className={styles.btn2}>send message</button>
            )}{" "}
          </aside>
        </form>
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
