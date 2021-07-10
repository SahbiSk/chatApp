import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <Auth {...props} />} />
        <Route path="/chat" exact render={(props) => <div>chat</div>} />
      </Switch>
    </Router>
  );
}

export default App;
