import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Link1 from './link1';
import Link2 from './link2';
import Home from './home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
            <ul>
              <li><Link to="/link1">link 1</Link></li>
              <li><Link to="/link2">link 2</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact={true} path="/"  component={Home} />
              <Route path="/index" component={Home} />
              <Route path="/link1" component={Link1} />
              <Route path="/link2" component={Link2} />
            </Switch>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
