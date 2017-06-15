import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { SimpleComponent } from 'modules/base.component';
import { HomeContainer } from 'containers/home';
import { AboutContainer } from 'containers/about';

class Routing extends SimpleComponent {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/about" component={AboutContainer}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export { Routing };
