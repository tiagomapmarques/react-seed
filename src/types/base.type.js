
export const toType = (enumString, entity) => {
  return typeof enumString === 'string' ? entity[enumString.toUpperCase()] : null;
};

export const toString = (enumValue, entity) => {
  const enumString = enumValue ? entity[enumValue] : null;
  return typeof enumString === 'string' ? enumString.toLowerCase() : enumString;
};

export const toMapped = (enumValue, entity, map = null, defaultValue = '') => {
  if (!map) {
    return (toString(enumValue, entity) || defaultValue);
  }
  let match = defaultValue;
  Object.keys(map).forEach((itemName: string) => {
    const typesToCheck = map[itemName];
    const index = (typeof typesToCheck === 'number' ? [typesToCheck] : typesToCheck).indexOf(enumValue);
    if (index >= 0) {
      match = itemName;
    }
  });
  return match;
};
