import React, { Component } from 'react';

import { connect, stateTypes, statePropTypes } from '../../states';
import Main from '../../components/App';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.scientistsActions.fetchAll();
    this.state = { addedOne: false };
  }

  componentDidUpdate() {
    if (this.props.scientists && !this.state.addedOne) {
      this.setState({ addedOne: true }, () => this.props.scientistsActions.add('5', 'Tiago Marques', 'mister'));
    }
  }

  render() {
    console.log(this.props);
    return <Main />;
  }
}

Home.propTypes = {
  ...statePropTypes.scientists,
};

const HomeContainer = connect(stateTypes.scientists)(Home);
export { HomeContainer };
