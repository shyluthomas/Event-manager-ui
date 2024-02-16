import { Outlet } from "react-router-dom";

const FullLayout = (): JSX.Element => {
  return (
    <div style={{ background: "#a58a8a" }}>
      <h1>Full Layout</h1>
      <Outlet />
    </div>
  );
};

export default FullLayout;
