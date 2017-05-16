import { connect as connectState } from 'react-dedux';

import { config } from 'states/config';
import { AppStateType } from 'states/types';
import { actions as scientists } from 'states/scientists/actions';

const actions = {
  scientists,
};

export const connect = (...args: AppStateType[]) => connectState(actions, config)(...args);
