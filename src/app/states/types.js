import { ACTIONS_SUFFIX } from 'react-redux-states';

import {
  typeName as scientistsName,
  valuePropType as scientistsValuePropType,
  actionPropType as scientistsActionPropType,
} from './scientists/types';

export const stateTypes = {
  scientists: scientistsName,
};

const buildStatePropType = (typeName, valuePropType, actionPropTypes) => ({
  [typeName]: valuePropType,
  [`${typeName}${ACTIONS_SUFFIX}`]: actionPropTypes,
});

export const statePropTypes = {
  scientists: buildStatePropType(scientistsName, scientistsValuePropType, scientistsActionPropType),
};
