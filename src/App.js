import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";

//REST API
//BY DEFAULT FETCH MAKES A GET

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/post/id">
            <PostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
