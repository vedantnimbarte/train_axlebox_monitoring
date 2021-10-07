import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn, SignUp } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
