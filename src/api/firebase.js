import { getDatabase, child, ref, set, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChNmzXE2x6v9_7AEd_j_WVPBZSd0U1-Xo",
  authDomain: "gb-chat-62d4.firebaseapp.com",
  databaseURL:
    "https://gb-chat-62d4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-62d4",
  storageBucket: "gb-chat-62d4.appspot.com",
  messagingSenderId: "1085302611100",
  appId: "1:1085302611100:web:eafbbe10c37a519deea159"
};

export const firebaseApp = initializeApp(firebaseConfig);

const fb = getDatabase();
const dbRef = ref(fb);

const writeConversationsDb = ({ id, title, value }) => {
  set(ref(fb, `conversations/${id}`), {
    title,
    value
  });
};

const getConversationsDb = async () => {
  try {
    const snapshot = await get(child(dbRef, `conversations`));
    return snapshot.exists()
      ? Object.entries(snapshot.val()).map(([key, value]) => ({
          id: key,
          ...value
        }))
      : [];
  } catch (error) {
    console.error(error);
  }
};

const writeMessagesDb = ({ chatId, message }) => {
  const { id, author, text, date } = message;
  /*   const date = JSON.stringify(message.date); */

  set(ref(fb, `messages/${chatId}/${id}`), {
    author,
    text,
    date
  });
};

const getMessagesDb = async (chatId) => {
  try {
    const snapshot = await get(child(dbRef, `messages`));
    const allMessages = snapshot.exists()
      ? Object.keys(snapshot.val()).reduce((acc, key) => {
          acc = {
            ...acc,
            ...{
              [key]:
                Object.entries(snapshot.val()[key]).map(([key, value]) => ({
                  id: key,
                  ...value
                })) || []
            }
          };
          return acc;
        }, {})
      : {};

    return allMessages;
  } catch (error) {
    console.error(error);
  }
};

export const messagesDb = {
  get: getMessagesDb,
  set: writeMessagesDb
};

export const conversationsDb = {
  get: getConversationsDb,
  set: writeConversationsDb
};
