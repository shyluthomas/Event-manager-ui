import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export default function NewUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitLogin = (data: any) => {
    console.log("data", data);
    reset({
      name: "",
      email: "",
      password: "",
      language: "",
      phone: "",
      address: "",
      sex: "",
      dob: "",
      avatar: "",
      roleId: "",
      username: "",
    });
  };

  return (
    <div className="flex mt-16 justify-center items-center">
      <Card className="w-[450px]">
        <form onSubmit={handleSubmit(submitLogin)}>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>New User registeration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Name is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
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
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Email is required
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-xs text-rose-500 text-left">
                    Email is not valid
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="avatar">Avatar</Label>
                <Input
                  id="avatar"
                  placeholder="Avatar"
                  {...register("avatar", { required: true })}
                />
                {errors.avatar && errors.avatar.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Avatar is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="language">Language</Label>
                <Input
                  id="language"
                  placeholder="Language"
                  {...register("language", { required: true })}
                />
                {errors.language && errors.language.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Language is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                />
              </div>
              {errors.phone && errors.phone.type === "required" && (
                <p className="text-xs text-rose-500 text-left">
                  Phone is required
                </p>
              )}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && errors.address.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Address is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dob">Date Of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  placeholder="DOB"
                  {...register("dob", { required: true })}
                />

                {errors.dob && errors.dob.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    DOB is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="sex">Sex</Label>

                <select
                  {...register("sex", { required: true })}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.sex && errors.sex.type === "required" && (
                  <p className="text-xs text-rose-500 text-left">
                    Sex is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="roleId">Role ID</Label>
                <Input
                  id="roleId"
                  placeholder="Role"
                  value={2}
                  {...register("roleId", { value: 2 })}
                  type="hidden"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
