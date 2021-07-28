import Ritta from './ritta.js';

export abstract class RittaModule {
  public sdk: Ritta;
  constructor(sdk: Ritta) {
    this.sdk = sdk;
  }
}
