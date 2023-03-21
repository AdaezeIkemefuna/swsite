import styles from "./page.module.scss";
export default function page() {
  return (
    <div className={styles.mainReservation}>
      <h1 className={styles.after}>Reservations</h1>
      <aside className={styles.inputSection}>
        <div>
          <input type="date" placeholder="Date" className={styles.input} />
          <input type="text" placeholder="Name" className={styles.input} />
        </div>
        <div>
          <input type="time" placeholder="Time" className={styles.input} />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Number of Guests"
            className={styles.input}
          />
          <input type="number" placeholder="Phone" className={styles.input} />
        </div>
      </aside>
      <textarea
        placeholder="Message"
        className={styles.input}
        style={{ minWidth: "78%", minHeight: "180px", maxWidth: "100%" }}
      ></textarea>
      <button className={styles.btn2}>make a reservation</button>
    </div>
  );
}
