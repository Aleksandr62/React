import { Template, Header, LeftBarProfile, ProfileCard } from "../components";

export const Profile = () => {
  return (
    <Template header={<Header />} leftSideBar={<LeftBarProfile />}>
      <ProfileCard />
    </Template>
  );
};
