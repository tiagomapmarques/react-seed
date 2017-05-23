
export const ModelProperty = (target: any, key: string) => {
  const getter = function () {
    return this.__Model__values[key];
  };

  const setter = function (newValue: any) {
    this.__Model__values[key] = newValue;
    this.__Model__history.push(this.toJson());
  };

  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: false,
    });
  }
}

export abstract class Model<T> {
  private __Model__values: T;
  private __Model__history: T[];

  constructor(json: T) {
    this.__Model__history = [ json ];
    this.__Model__values = <any>{};
  }

  public toJson(): T {
    return <T> Object.keys((<any>this).__Model__values).reduce((json, key) => ({
      ...json,
      [key]: ((<any>this).__Model__values)[key],
    }), {});
  }
}
