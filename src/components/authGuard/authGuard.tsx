import { useAppSelector } from "@/hooks/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthGuard = (props: any): JSX.Element => {
  const auth = useAppSelector((state) => state.userReducer.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login");
    }
  }, [auth]);

  return <>{props.children}</>;
};

export default AuthGuard;
