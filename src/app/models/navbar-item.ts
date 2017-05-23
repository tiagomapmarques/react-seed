import { IconType } from 'types';
import { Model, ModelProperty } from 'models/base.model';

export interface NavbarItemObject {
  id: number;
  title: string;
  link: string;
  icon: IconType;
}

export class NavbarItem extends Model<NavbarItemObject> implements NavbarItemObject {
  @ModelProperty
  public id: number;
  @ModelProperty
  public title: string;
  @ModelProperty
  public link: string;
  @ModelProperty
  public icon: IconType;

  constructor(navbarItem: NavbarItemObject) {
    super(navbarItem);
    this.id = navbarItem.id;
    this.title = navbarItem.title;
    this.link = navbarItem.link;
    this.icon = navbarItem.icon;
  }
}
