import { clearConversationValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithThunk = (message, roomId) => (dispatch) => {
  console.log("sendMessageWithThunk");
  dispatch(sendMessage(message, roomId));
  dispatch(clearConversationValue, { title: roomId });

  if (message.author !== "Bot") {
    setTimeout(
      () =>
        dispatch(
          sendMessage(
            {
              id: message.id + 1,
              author: "Bot",
              message: "Hello from bot thunk",
              date: new Date()
            },
            roomId
          )
        ),
      500
    );
  }
};
