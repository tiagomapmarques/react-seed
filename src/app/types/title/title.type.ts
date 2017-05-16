import { BaseTypeFunctions } from '../base-interfaces.type';
import { toType, toString, toMapped } from '../base.type';

export enum TitleType {
  MISTER = 1,
  MISS,
  DOCTOR,
};

export const TITLE: BaseTypeFunctions = {
  enumValues: (): TitleType[] => [ TitleType.MISTER, TitleType.MISS, TitleType.DOCTOR ],
  toModel: (title: string): TitleType => toType(title, TitleType),
  toJson: (title: TitleType): string => toString(title, TitleType),
  map: (title: TitleType): string => toMapped(title, TitleType),
};
