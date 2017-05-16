import { BaseTypeFunctions } from '../base-interfaces.type';
import { toType, toString, toMapped } from '../base.type';

export enum NumberType {
  DEC = 10,
  HEX = 16,
};

export const NUMBER: BaseTypeFunctions = {
  enumValues: (): NumberType[] => [ NumberType.DEC, NumberType.HEX ],
  toModel: (n: string): NumberType => toType(n, NumberType),
  toJson: (n: NumberType): string => toString(n, NumberType),
  map: (n: NumberType): string => toMapped(n, NumberType),
};
