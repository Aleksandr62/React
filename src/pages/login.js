import { Template, Header, AuthForm } from "../components";

export const Login = () => {
  return (
    <Template header={<Header />} leftSideBar={<></>}>
      <AuthForm title="Login" button="Sign in" register={false} />
    </Template>
  );
};
