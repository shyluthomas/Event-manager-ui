import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setLogin } from "@/store/reducers/userReducer";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserLogin = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector((state) => state.userReducer.auth);
  const loggedIn = loggedUser.isAuthenticated;
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/login/dash");
  // }, [loggedIn]);
  if (loggedIn) {
    navigate("/login/dash");
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(setLogin(data));
    reset();
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex mt-16 justify-center items-center">
          <Card className="w-[550px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">User Name</Label>
                    <Input
                      id="email"
                      placeholder="User Name"
                      {...register("username", { required: true })}
                    />
                    {errors.username && errors.username.type === "required" && (
                      <p className="text-xs text-rose-500 text-left">
                        User Name is required
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      type="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && errors.password.type === "required" && (
                      <p className="text-xs text-rose-500 text-left">
                        Password is required
                      </p>
                    )}
                    {errors.password &&
                      errors.password.type === "minLength" && (
                        <p className="text-xs text-rose-500 text-left">
                          Password should be atleast 6 chars long
                        </p>
                      )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="submit">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
