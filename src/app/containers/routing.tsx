import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { SimpleComponent } from 'modules/base.component';
import { ToolbarComponent, NavbarComponent } from 'modules/shell';
import { HomeContainer } from 'containers/home';
import { AboutContainer } from 'containers/about';

class Routing extends SimpleComponent {

  render() {
    return (
      <Router>
        <div>
          <ToolbarComponent />
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/about" component={AboutContainer}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { Routing };
