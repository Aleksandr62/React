import { useState } from "react";
import { Template, ProfileMenu, ProfileCard } from "../components";

export const Profile = () => {
  const [user, setState] = useState({
    firstName: "Vasya",
    lastName: "Ivanov",
    birthday: "2001-10-01"
  });

  const updateUser = (newUser) => {
    setState((user) => {
      return { ...user, ...newUser };
    });
  };

  return (
    <Template leftSideBar={<ProfileMenu {...user} />}>
      <ProfileCard {...user} updateUser={updateUser} />
    </Template>
  );
};
