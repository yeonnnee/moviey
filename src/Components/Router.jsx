import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Components/Header";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" exact component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
