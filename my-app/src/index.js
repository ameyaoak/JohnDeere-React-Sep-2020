import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./store";

import Home from './Home';
import BugTracker from './bugTracker';
import Projects from './projects';
import BugInfo from './bugTracker/views/BugInfo';

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <h1>My App</h1>
          <div>
            <span>
              {" "}
              [ <Link to="/">Home</Link> ]{" "}
            </span>
            <span>
              {" "}
              [ <Link to="/projects">Projects</Link> ]{" "}
            </span>
            <span>
              {" "}
              [ <Link to="/bugs">Bugs</Link> ]{" "}
            </span>
          </div>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/bugs/:id">
              <BugInfo/>
            </Route>
            <Route path="/bugs">
              <BugTracker />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );




/* 
import * as calc from './calculator';
calc.add(10,20) 
*/

/* 
import * as calc from './calculator';
const { add } = calc;
console.log(add(10,20)); 
*/

/* 
import { add } from './calculator';
console.log(add(10, 20)); 
*/

//importing the default exported object
/* 
import calc from './calculator';
console.log(calc.add(10,20));
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
