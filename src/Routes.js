import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Another from "./pages/Another";

export default function Routes() {
  return (
    <Switch>
      <Route path  = '/' exact  component = {Home}/>
      <Route path  = '/another'  component = {Another} />
    </Switch>
  );
}