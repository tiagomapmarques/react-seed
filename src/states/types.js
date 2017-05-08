import {
  typeName as scientistsName,
  valuePropType as scientistsValuePropType,
  actionPropType as scientistsActionPropType,
} from './scientists/types';

export const ACTIONS_SUFFIX = 'Actions';

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
