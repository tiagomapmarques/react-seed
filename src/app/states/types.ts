import { StateValues } from 'react-dedux';

import { ScientistsStateActions, ScientistsStateValue } from 'states/scientists/types';

export interface AppStateValues extends StateValues {
  scientists: ScientistsStateValue;
}

export interface AppStateActions {
  scientists: ScientistsStateActions;
}

export type AppStateType = 'scientists';

export const AppState: { [key: string]: AppStateType } = {
  scientists: 'scientists',
}

export * from 'states/scientists/types';
