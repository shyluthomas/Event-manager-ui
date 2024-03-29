import AuthGuard from "@/components/authGuard/authGuard";
import AuthLayout from "@/components/layouts/authLayout";
import Dashboard from "@/pages/dashboard/dashboard";
import Events from "@/pages/events/events";
import FullLayout from "../components/layouts/fullLayout";
import { Navigate } from "react-router-dom";
import NewUser from "@/pages/user/newUser";
import UserHome from "@/pages/user/userHome";
import UserList from "@/pages/user/userList";
import UserLogin from "@/pages/user/userLogin";

const Routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <FullLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <UserHome />,
      },
      {
        path: "userlist",
        element: <UserList />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "event",
        element: <Events />,
      },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "newuser",
        element: <NewUser />,
      },
    ],
  },
];

export default Routes;
