import { Outlet } from "react-router-dom";

const AuthLayout = (): JSX.Element => {
  return (
    <div style={{background:"red"}}>
      <h1>Auth Layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
