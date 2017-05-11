import { config } from './config';
import {
  typeName as scientistsName,
  valuePropType as scientistsValuePropType,
  actionsPropType as scientistsActionsPropType,
} from './scientists/types';

export const stateTypes = {
  scientists: scientistsName,
};

const getStatePropTypes = (typeName, valuePropType, actionsPropTypes) => ({
  [typeName]: valuePropType,
  [config.getActionsName(typeName)]: actionsPropTypes,
});

export const statePropTypes = {
  scientists: getStatePropTypes(scientistsName, scientistsValuePropType, scientistsActionsPropType),
};
