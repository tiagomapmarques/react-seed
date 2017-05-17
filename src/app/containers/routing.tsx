import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ToolbarComponent, NavbarComponent } from 'modules/shell';
import { HomeContainer } from 'containers/home';
import { AboutContainer } from 'containers/about';

const routeContainer = (RouteContainer: any) => (props: any) => (<RouteContainer {...props} />);

class Routing extends React.Component<{}, {}> {

  render() {
    return (
      <Router>
        <div>
          <ToolbarComponent />
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={routeContainer(HomeContainer)}/>
            <Route exact path="/about" component={routeContainer(AboutContainer)}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { Routing };
