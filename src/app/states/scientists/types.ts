import * as Dedux from 'react-dedux';

import { StateStatus } from 'states/status';
import { Scientist } from 'models/scientist';
import { TitleType } from 'types';

export const typeName = 'scientists';

export const ScientistsStateChangersNames = {
  loading: 'loading',
  setAll: 'setAll',
  add: 'add',
  remove: 'remove',
};

export type ScientistsStateValue = {
  status: StateStatus;
  list: Scientist[];
};

export interface ScientistsStateActions extends Dedux.ActionGroup {
  init: () => Dedux.ActionDispatchable;
  fetchAll: () => Dedux.ActionDispatchable;
  setAll: (_: ScientistsStateValue) => Dedux.ActionDispatchable;
  add: (_: string, __: TitleType) => Dedux.ActionDispatchable;
  remove: (_: number) => Dedux.ActionDispatchable;
}

export type ScientistsStateChangers = Dedux.StateChangerGroup<ScientistsStateValue>;

export interface ScientistsSetAllAction extends Dedux.ActionObject {
  scientists: ScientistsStateValue;
}

export interface ScientistsAddAction extends Dedux.ActionObject {
  scientist: Scientist;
}

export interface ScientistsRemoveAction extends Dedux.ActionObject {
  id: number;
}

export const defaultValue: ScientistsStateValue = {
  status: StateStatus.start,
  list: [],
};

export interface ScientistsStateProps {
  scientists: ScientistsStateValue | undefined;
  scientistsActions: ScientistsStateActions;
}
