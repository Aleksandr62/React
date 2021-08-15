import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MessageProvider = ({ children }) => {
  const { roomId } = useParams();

  const [conversations, setConversations] = useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
    { title: "room3", value: "" }
  ]);
  const [messages, setMessages] = useState({
    room1: [{ message: "Hello Room1", author: "Bot" }],
    room2: [{ message: "Hello Room2", author: "Bot" }],
    room3: [{ message: "Hello Room3", author: "Bot" }]
  });

  const updateConversations = useCallback(
    (value = "") => {
      setConversations(
        conversations.map((room) => {
          return room.title === roomId ? { ...room, value } : room;
        })
      );
    },
    [conversations, roomId]
  );

  const state = useMemo(() => {
    return {
      conversations,
      messages: messages,
      value:
        conversations.find((conversation) => conversation.title === roomId)
          ?.value || "",
      hasRoomById: Object.keys(messages).some((room) => room === roomId)
    };
  }, [conversations, messages, roomId]);

  // тут доделать - поправить прием messages и в зависимости от комнаты
  const actions = useMemo(() => {
    return {
      sendMessage: (message, roomId) => {
        setMessages((messages) => {
          return { ...messages, [roomId]: [...messages[roomId], message] };
        });
        updateConversations();
      },
      handleChangeValue: ({ target }) => {
        updateConversations(target.value);
      },
      roomDelete: (conversation) => {
        const newConversations = [...conversations];
        const newMessages = { ...messages };
        delete newMessages[conversation];

        newConversations.splice(
          conversations.findIndex((room) => room.title === conversation),
          1
        );
        setConversations(() => {
          return [...newConversations];
        });
        setMessages(() => {
          return { ...newMessages };
        });
      },
      addRoom: (conversation) => {
        setConversations((conversations) => {
          return [...conversations, { title: conversation, value: "" }];
        });
        setMessages((messages) => {
          return {
            ...messages,
            [conversation]: [
              { message: `Hello ${conversation}`, author: "Bot" }
            ]
          };
        });
      }
    };
  }, [messages, conversations, updateConversations]);

  useEffect(() => {
    let timerId = null;
    let lastMessage =
      roomId && Object.keys(messages).some((room) => room === roomId)
        ? [...messages[roomId]].pop()
        : null;

    if (lastMessage?.author === "User")
      timerId = setTimeout(
        () =>
          actions.sendMessage({ message: "Hello User", author: "Bot" }, roomId),
        500
      );
    return () => clearInterval(timerId);
  }, [messages, roomId, actions]);

  return children([state, actions]);
};
