
/* tslint:disable:no-any */
export type Enum = any;
/* tslint:enable:no-any */
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
