/* global fetch */

export const ScientistsService = {
  fetchAll: () => fetch('/static/scientists.json')
    .then(result => result.json())
    .then(result => result.scientists)
    .catch(() => {
      // TODO log the error
    }),
};
