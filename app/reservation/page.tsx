"use client";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from "./page.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Tutorial {
  date: string;
  name: string;
  time: string;
  email?: string;
  phone: string;
  NOG: string;
  message: string;
}

export default function page() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NOG, setNOG] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const reserve = async ({
    date,
    name,
    time,
    email,
    phone,
    NOG,
    message,
  }: Tutorial) => {
    try {
      const response = await fetch("https://m-kozm.onrender.com/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          name,
          time,
          email,
          phone,
          NOG,
          message,
        }),
      });
      const data = await response.json();
      if (response.ok || response.status === 204) {
        console.log("ok");
        toast.success("reservation placed", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setLoading(false);
      } else {
      }
    } catch (err) {
      console.log(err, "not working");
      toast("failed to place reservation");
    } finally {
      setDate("");
      setEmail("");
      setMessage("");
      setNOG("");
      setName("");
      setPhone("");
      setNOG("");
    }
    setLoading(false);
  };

  const sendReservation = (e: any) => {
    e.preventDefault();
    setLoading(true);
    reserve({ date, name, time, email, phone, NOG, message });
  };
  return (
    <>
      <ToastContainer />

      <form
        className={styles.mainReservation}
        onSubmit={(e) => sendReservation(e)}
      >
        <h1 className={styles.after}>Reservations</h1>
        <aside className={styles.inputSection}>
          <div>
            <input
              type="text"
              placeholder="Date"
              className={styles.input}
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Time"
              className={styles.input}
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Number of Guests"
              className={styles.input}
              required
              value={NOG}
              onChange={(e) => setNOG(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              className={styles.input}
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </aside>
        <textarea
          placeholder="Message"
          className={styles.input}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ minWidth: "78%", minHeight: "180px", maxWidth: "100%" }}
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
              minWidth: "220px",
            }}
          >
            <InfinitySpin width="100" color="#fff" />
          </div>
        ) : (
          <button className={styles.btn2}>make a reservation</button>
        )}
      </form>
    </>
  );
}
