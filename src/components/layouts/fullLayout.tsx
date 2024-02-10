import { Outlet } from "react-router-dom";

const FullLayout = (): JSX.Element => {
  return (
    <div style={{ background: "black" }}>
      <h1>Full Layout</h1>
      <Outlet />
    </div>
  );
};

export default FullLayout;
