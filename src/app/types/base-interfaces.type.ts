
export type Enum = any;
export type EnumValue = number;

export interface BaseTypeFunctions {
  enumValues: Function;
  toModel: Function;
  toJson: Function;
  map: Function;
};

export interface BaseTypeMap {
  [key: string]: EnumValue|EnumValue[];
};
