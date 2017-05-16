import { StateValues } from 'react-dedux';
import { ScientistsStateActions, ScientistsStateValue } from './scientists/types';
export * from './scientists/types';

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
