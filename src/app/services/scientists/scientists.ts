import { ScientistResponse, Scientist, toScientist } from 'models/scientist';

export const ScientistsService = {
  fetchAll: (): Promise<Scientist[]> => fetch('/assets/scientists.json')
    .then((result: any) => result.json())
    .then((result: any): ScientistResponse[] => result.scientists)
    .then((scientists: ScientistResponse[]): Scientist[] => scientists.map(toScientist))
    .catch(() => {
      // TODO log the error
    }),
};
