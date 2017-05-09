import { toType, toString, toMapped } from '../base.type';

export const TitleType = {
  MISTER: 1,
  MISS: 2,
  DOCTOR: 3,
  1: 'MISTER',
  2: 'MISS',
  3: 'DOCTOR',
};

export const TITLE = {
  enumValues: () => [ TitleType.MISTER, TitleType.MISS, TitleType.DOCTOR ],
  toModel: title => toType(title, TitleType),
  toJson: title => toString(title, TitleType),
  map: title => toMapped(title, TitleType),
};
