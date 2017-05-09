import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { statePropTypes } from 'states';

class ScientistList extends Component {

  handleClick = id => () => {
    const { onClick } = this.props;
    onClick && onClick(id);
  }

  buildScientistList(scientists) {
    return scientists.map(scientist => (
      <li key={`scientist-${scientist.id}`} onClick={this.handleClick(scientist.id)}>{scientist.name}</li>
    ));
  }

  render() {
    const { scientists } = this.props;
    const list = this.buildScientistList(scientists);
    return (
      <div>
        <h3>Scientists list:</h3>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

ScientistList.propTypes = {
  scientists: statePropTypes.scientists.scientists.isRequired,
  onClick: PropTypes.func,
};

export { ScientistList };
