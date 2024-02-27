import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";

import ModalHOC from "./ModalHOC";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthLayout = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-fit">
      <ModalHOC />
      <Menubar className="flex justify-between mx-auto h-20 bg-stone-950 opacity-50 sticky top-0">
        <MenubarMenu>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-white text-2xl">
            <p>Event Manager</p>
          </div>

          <MenubarTrigger
            className="bg-amber-600"
            onClick={() => {
              navigate("newuser");
            }}
          >
            Sign Up
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Outlet></Outlet>
      <footer className="text-white text-center p-8">
        <p>Copyright 2024 All rights reserved</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
