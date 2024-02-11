import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./utils/routes";
// import { useAppDispatch } from "./hooks/hooks";
// import { auth } from "./store/reducers/userReducer";
function App() {
  const routes = useRoutes(Routes);

  // const dispatch = useAppDispatch();
  // dispatch(auth("wlecome"))
  return <>{routes}</>;
}

export default App;
