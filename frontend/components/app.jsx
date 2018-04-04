import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './login_form/login_form_container';
import DashboardContainer from './main/dashboard/dashboard_container';

const App = () => (
  <div>
    <h1>Faquity</h1>
    <Switch>
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/" component={DashboardContainer} />
    </Switch>
  </div>
);

export default App;
