import { useDispatch, useSelector } from "react-redux";
import { Template, ProfileMenu, ProfileCard } from "../components";
import { updateUser } from "../store/profile";

export const Profile = () => {
  const user = useSelector((state) => {
    return state.profile.user;
  });
  const dispatch = useDispatch();

  const updateUserData = (newUser) => {
    dispatch(updateUser(newUser));
  };

  return (
    <Template leftSideBar={<ProfileMenu {...user} />}>
      <ProfileCard {...user} updateUser={updateUserData} />
    </Template>
  );
};
