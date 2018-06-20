import React from 'react';
import Contactus from './contactus';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Link2 = ({match}) => {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">link 2</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li><Link to={`${match.url}/aboutus`}>About us</Link></li>
                  <li><Link to={`${match.url}/contactus`}>Contact us</Link></li>
                  <li><Link to={`${match.url}/projects`}>Projects</Link></li>
                </ul>
              </div>
              <div className="col-md-9">
                <Route path={`${match.path}/aboutus`} render={() => { return <h1>About us</h1> }}/>
                <Route path={`${match.path}/contactus`} component ={Contactus}/>
                <Route path={`${match.path}/projects`} render={() => { return <h1>Projects</h1> }}/>
              </div>
            </div>
          </div>
       </div>
      </div>
    );
}
export default Link2;
