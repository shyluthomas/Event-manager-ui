import { Outlet } from "react-router-dom";

const FullLayout = (): JSX.Element => {
  return (
    <div className="bg-orange-100">
      <h1>Full Layout</h1>
      <Outlet />
    </div>
  );
};

export default FullLayout;
