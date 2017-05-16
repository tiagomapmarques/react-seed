import { TITLE, TitleType, NumberType } from 'types';

export interface ScientistResponse {
  id: string | number;
  name: string;
  title: string;
}

export interface Scientist {
  id: number;
  name: string;
  title: TitleType;
}

export const toScientist = (scientist: ScientistResponse): Scientist => ({
  id: parseInt(`${scientist.id}`, NumberType.DEC),
  name: `${scientist.name}`,
  title: TITLE.toModel(scientist.title),
});
