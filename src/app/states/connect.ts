import { connect as connectState } from 'react-dedux';

import { config } from './config';
import { AppStateType } from './types';
import { actions as scientists } from './scientists/actions';

const actions = {
  scientists,
};

export const connect = (...args: AppStateType[]) => connectState(actions, config)(...args);
