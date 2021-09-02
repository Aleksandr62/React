import { Template, Header, LeftBarChat } from "../components";
import { MessageList } from "../components";

export const Chat = () => {
  return (
    <Template header={<Header />} leftSideBar={<LeftBarChat />}>
      <MessageList />
    </Template>
  );
};
