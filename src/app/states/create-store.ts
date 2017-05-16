import { createStore as createStoreState, StateChangerGroupList, StateDefaultValues } from 'react-dedux';

import { config } from 'states/config';
import { stateChangers as scientists } from 'states/scientists/state-changers';
import { defaultValue as scientistsDefault } from 'states/scientists/types';

const stateChangers: StateChangerGroupList = {
  scientists,
};

const defaultValues: StateDefaultValues = {
  scientists: scientistsDefault,
};

export const createStore = <S>(initialState?: S) =>
  createStoreState<S>(stateChangers, defaultValues, config)(initialState);
