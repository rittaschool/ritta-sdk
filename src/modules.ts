export abstract class RittaModules {
  abstract listModules(): Promise<Module[]>;
  abstract enableModule(name: string): void;
  abstract disableModule(name: string): void;
}

export class Module {
  private _name: string;
  private _enabled: boolean;
  constructor(name: string, enabled: boolean) {
    this._name = name;
    this._enabled = enabled;
  }

  getName() {
    return this._name;
  }

  getEnabled() {
    return this._enabled;
  }
}
