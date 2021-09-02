import { Template, Header, LeftBarHome } from "../components";

export const Home = () => {
  return (
    <Template header={<Header />} leftSideBar={<LeftBarHome />}>
      <h2>Home</h2>
    </Template>
  );
};
