import React from 'react';
import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './login_form/login_form_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <h1>This is Faquity.</h1>
    <Switch>
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/login" component={LogInFormContainer} />
    </Switch>
  </div>
);

export default App;
