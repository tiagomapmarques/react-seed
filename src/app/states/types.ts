import * as Dedux from 'react-dedux';

import { ScientistsStateActions, ScientistsStateValue } from 'states/scientists/types';
export * from 'states/scientists/types';

export interface AppStateValues extends Dedux.StateValues {
  scientists: ScientistsStateValue;
}

export interface AppStateActions {
  scientists: ScientistsStateActions;
}

export type AppStateType = 'scientists';

export const AppState: { [key: string]: AppStateType } = {
  scientists: 'scientists',
}
