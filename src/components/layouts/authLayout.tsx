import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthLayout = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg",
        height: "130vh",
      }}
    >
      {/* <h1>Auth Layout</h1> */}

      <Menubar className="flex justify-between mx-auto h-16">
        <MenubarMenu>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <MenubarTrigger
            onClick={() => {
              navigate("newuser");
            }}
          >
            Sign Up
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
