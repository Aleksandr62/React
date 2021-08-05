import styles from './assets/style.module.sass'
import { InputText, MessageList, ChatRooms } from './components'
import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const handleMsgChange = ({author, text}) => {
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
    <Grid container spacing={3}>
      <Grid item xs={6}>
      <div className={styles.app}>
        <ChatRooms styles={styles} chats={} />        
    </div>
      </Grid>
      <Grid item xs={6}>
      <div className={styles.app}>
        <MessageList styles={styles} messageList={messageList} />        
        <InputText styles={styles} onMessageChange={handleMsgChange}/>
    </div>
      </Grid>
    </Grid>
  );
}
