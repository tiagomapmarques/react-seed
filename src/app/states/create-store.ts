import * as Dedux from 'react-dedux';

import { stateChangers as scientistsChangers } from 'states/scientists/state-changers';
import { defaultValue as scientistsDefault } from 'states/scientists/types';

const stateChangers: Dedux.StateChangerGroupWithDefaultsList = {
  scientists: {
    defaultValue: scientistsDefault,
    stateChangers: scientistsChangers,
  },
};

export const createStore = <S>(initialState?: S) => Dedux.createStore<S>(stateChangers)(initialState);
