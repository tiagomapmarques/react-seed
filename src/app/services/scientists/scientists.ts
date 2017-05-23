import { ScientistObjectResponse, Scientist } from 'models/scientist';
import { TITLE, TitleType } from 'types';

export const ScientistsService = {

  fetchAll: (): Promise<Scientist[]> => fetch('/assets/scientists.json')
    .then((result: any) => result.json())
    .then((result: any): ScientistObjectResponse[] => result.scientists)
    .then((scientists: ScientistObjectResponse[]): Scientist[] => scientists.map(Scientist.fromResponse))
    .catch(() => {
      // TODO log the error
    }),

  add: (name: string, title: TitleType, list: Scientist[]): Promise<Scientist> =>
    // NOTE: Promise to mock a POST method that asks the Backend to add a new scientist
    // NOTE: Third argument of the "add" function should be removed when this is no longer a mock
    Promise.resolve({
      id: 1 + list.reduce((max, scientist) => Math.max(max, scientist.id), 0),
      name,
      title: TITLE.toJson(title),
    })
    .then(Scientist.fromResponse),

  remove: (id: number, list: Scientist[]): Promise<number> =>
    // NOTE: Promise to mock a POST method that asks the Backend to remove a scientist
    // NOTE: Second argument of the "remove" function should be removed when this is no longer a mock
    Promise.resolve({
      status: list.filter(item => item.id === id).length ? 200 : 403,
      removedId: list.filter(item => item.id === id).length ? id : NaN,
    })
    .then((response: any): number => response.removedId),
};
