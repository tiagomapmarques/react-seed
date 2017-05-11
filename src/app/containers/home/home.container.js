import React from 'react';

import { Container } from 'containers/base.container';
import { connect, stateTypes, statePropTypes } from 'states';
import { ScientistList, ScientistForm } from 'modules/scientist';

class Home extends Container {

  constructor(props) {
    super(props);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleRemoval(id) {
    this.props.scientistsActions.remove(id);
  }

  render() {
    const { scientists, scientistsActions } = this.props;
    return (
      <div>
        <ScientistForm scientistsActions={scientistsActions} />
        <ScientistList scientists={scientists || []} onClick={this.handleRemoval}/>
      </div>
    );
  }
}

Home.propTypes = {
  ...Container.propTypes,
  ...statePropTypes.scientists,
};

const HomeContainer = connect(stateTypes.scientists)(Home);
export { HomeContainer };
