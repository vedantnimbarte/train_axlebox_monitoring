import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
