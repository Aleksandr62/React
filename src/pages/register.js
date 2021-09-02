import { Template, Header, AuthForm } from "../components";

export const Register = () => {
  return (
    <Template header={<Header />} leftSideBar={<></>}>
      <AuthForm title="Register" button="Register" register={true} />
    </Template>
  );
};
