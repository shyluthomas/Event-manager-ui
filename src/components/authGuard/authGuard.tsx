import helpers from "@/utils/helpers";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthGuard = (props: any): JSX.Element => {
  const navigate = useNavigate();
  const token = helpers.getAuthToken();
  // if (token) {
  //   dispatch(setAuth({ isAuthenticated: true, user: null }));
  // }
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return <>{props.children}</>;
};

export default AuthGuard;
