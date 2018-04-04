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
import { AuthRoute } from '../utils/route_util';

const App = () => (

  // <Header />
  // <Main />
  // <Footer />

  // All routes go here?

  <Switch>
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <Route exact path="/" component={DashboardContainer} />
  </Switch>

);

export default App;
