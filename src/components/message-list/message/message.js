import classNames from "classnames";
import styles from "./message.module.css";

export const Message = ({ message }) => {
  const date = new Date();

  return (
    <div data-bot={message.author === "Bot"} className={styles.messageGroup}>
      <div className={styles.author}>{message.author}:</div>
      <div data-bot={message.author === "Bot"} className={styles.message}>
        <p className={styles.text}>{message.message}</p>
        <p className={styles.date}>
          {date.toLocaleDateString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit"
          })}
        </p>
      </div>
    </div>
  );
};
