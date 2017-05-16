import { BaseTypeFunctions, BaseTypeMap } from '../base-interfaces.type';
import { toType, toString, toMapped } from '../base.type';

export enum IconType {
  HOME = 1,
  ABOUT,
  INFO,
};

export const ICON_MAP: BaseTypeMap = {
  'home': IconType.HOME,
  'info': [ IconType.INFO, IconType.ABOUT ],
};

export const ICON: BaseTypeFunctions = {
  enumValues: (): IconType[] => [ IconType.HOME, IconType.ABOUT, IconType.INFO ],
  toModel: (icon: string): IconType => toType(icon, IconType),
  toJson: (icon: IconType): string => toString(icon, IconType),
  map: (icon: IconType): string => toMapped(icon, IconType, ICON_MAP),
};
