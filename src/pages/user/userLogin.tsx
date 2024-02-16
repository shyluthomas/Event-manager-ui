import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const UserLogin = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("first", data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center mt-54">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-13 h-80 w-64 p-4 mt-5 rounded-lg bg-blue-50">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            User Login
          </h3>

          <Input
            type="text"
            placeholder="User name"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            name="email"
          ></Input>
          {errors.email && errors.email.type === "required" && (
            <p className="text-xs text-rose-500 text-left">Email is required</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="text-xs text-rose-500 text-left">
              Email is not valid
            </p>
          )}
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
            name="password"
          ></Input>
          {errors.password && errors.password.type === "required" && (
            <p className="text-xs text-rose-500 text-left">
              Password is required
            </p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-xs text-rose-500 text-left">
              Password should be atleast 6 chars long
            </p>
          )}
          <Button className="bg-blue-500">Login</Button>
          <Button className="bg-blue-500">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
