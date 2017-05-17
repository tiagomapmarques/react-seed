import * as Dedux from 'react-dedux';

import { AppStateType } from 'states/types';
import { actions as scientists } from 'states/scientists/actions';

const actions = {
  scientists,
};

export const connect = (...args: AppStateType[]) => Dedux.connect(actions)(...args);
