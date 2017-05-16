import { createStore as createStoreState, StateChangerGroupList } from 'react-dedux';

import { stateChangers as scientists } from 'states/scientists/state-changers';

const stateChangers: StateChangerGroupList = {
  scientists,
};

export const createStore = <S>(initialState?: S) => createStoreState<S>(stateChangers)(initialState);
