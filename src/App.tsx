import "./App.css";

import Routes from "./utils/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes(Routes);
  console.log('routes',routes)
  return <>{routes}</>;
}

export default App;
