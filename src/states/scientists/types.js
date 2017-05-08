import PropTypes from 'prop-types';

export const typeName = 'scientists';

export const valuePropType = PropTypes.array;

export const actionPropType = PropTypes.shape({
  fetchAll: PropTypes.func,
  setAll: PropTypes.func,
  add: PropTypes.func,
});
