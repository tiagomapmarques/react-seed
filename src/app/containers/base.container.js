import { Component } from 'react';
import PropTypes from 'prop-types';

require('./base.style');

class Container extends Component { }

Container.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.shape({}),
    key: PropTypes.string,
  }).isRequired,
};

export { Container };
