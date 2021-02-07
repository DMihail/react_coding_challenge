import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Description} from "./component/Description";
import {Films} from "./component/Films";

export const App : React.FC = () => {
  return (
      <Router>
          <Switch>
              <Route path="/description/:id">
                  <Description />
              </Route>
              <Route path="/">
                  <Films />
              </Route>
          </Switch>
      </Router>
  );
}
