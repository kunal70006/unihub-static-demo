import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Routes from "./Routes";
import { Footer } from "./Components";
import Navbar from "./Components/common/Navbar/Navbar";

const App = (props) => {
  const [isModalOpen, updateModalState] = useState(false);

  return (
    <Router>
      <Navbar modalController={updateModalState} />
      <Switch>
        {/* Add new routes in Routes.js file */}
        {Routes.map((route) => {
          return (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
