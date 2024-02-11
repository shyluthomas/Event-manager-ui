import { Navigate } from "react-router-dom";
import UserList from "@/pages/user/userList";
import FullLayout from "../components/layouts/fullLayout";
import UserLogin from "@/pages/user/userLogin";
import NewUser from "@/pages/user/newUser";
import UserHome from "@/pages/user/userHome";
import AuthLayout from "@/components/layouts/authLayout";
import AuthGuard from "@/components/authGuard/authGuard";

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
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
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
