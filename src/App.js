import { useState, useEffect } from 'react';
import { InputText } from './components/InputText.js';
import { MessageList } from './components/MessageList.js';
import styles from './assets/style.module.sass';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  function handleMsgChange({author, text}) {
    if(!author) author = 'anonim';
    setMessageList((messageList) => [...messageList, {author, text}]);
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1]

    if (lastMessage?.author && lastMessage?.author !== "Bot") {
      setTimeout(() => {
        setMessageList((state) => [
          ...state,
          { text: `Hello ${lastMessage.author}`, author: "Bot" },
        ])
      }, 600)
    }
  }, [messageList])

  return (
    <div className={styles.app}>
        <MessageList styles={styles} messageList={messageList} />        
        <InputText styles={styles} onMessageChange={handleMsgChange}/>
    </div>
  );
}
