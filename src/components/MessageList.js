export function MessageList({styles, messageList}) {

    return (
      <ul className={styles.messages}>
        {messageList.map((msg, idx) => {
            return  <li className={styles.msg} key={idx}>
                        <p className={styles.author}>{msg.author}</p> 
                        <div className={styles.text}>{msg.text} </div>
                    </li>
        })}
      </ul>
    );
  }