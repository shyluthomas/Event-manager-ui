import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Outlet, useNavigate } from "react-router-dom";

import helpers from "@/utils/helpers";
import { useAppSelector } from "@/hooks/hooks";

const FullLayout = (): JSX.Element => {
  const user = useAppSelector((state) => state.userReducer.userLogin);
  const navigate = useNavigate();
  return (
    <div className="bg-black h-fit">
      <Menubar className="flex justify-between mx-auto h-20 bg-stone-950 sticky top-0">
        <MenubarMenu>
          <div className="flex">
            <div className="text-white text-2xl p-6">
              <span>Event Manager</span>
            </div>
            <MenubarTrigger className="text-white text-xl p-6">
              DASHBOARD
            </MenubarTrigger>
            <MenubarTrigger className="text-white text-xl p-6">
              EVENTS
            </MenubarTrigger>
          </div>
          <div className="p-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white px-2 rounded-lg">
                {user.username}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    helpers.removeAuthToken();
                    navigate("/login");
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </MenubarMenu>
      </Menubar>
      <Outlet></Outlet>
      <footer className="text-white text-center  p-8">
        <p>Copyright 2024 All rights reserved</p>
      </footer>
    </div>
  );
};

export default FullLayout;
