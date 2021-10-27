import { BrowserRouter, Switch, Route } from "react-router-dom";
import Answer1 from "./answer1/answer1";
import Answer2 from "./answer2/answer2";
import Answer3 from "./answer3/answer3";
import Home from "./home/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/answer1">
          <Answer1 />
        </Route>
      </Switch>
      <Switch>
        <Route path="/answer2">
          <Answer2 />
        </Route>
      </Switch>
      <Switch>
        <Route path="/answer3">
          <Answer3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
