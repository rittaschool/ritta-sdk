import Ritta from '@ritta/sdk/dist/ritta';
import { RittaModule } from '@ritta/sdk/dist/module';

export default class ExampleModule extends RittaModule {
  constructor(sdk: Ritta) {
    super(sdk);
    this.sdk.logger.info(this.sdk.modules().listModules());
    try {
      this.sdk.database().model('User');
    } catch (e) {
      this.sdk.logger.error(e);
      // Throws error because no permission!
    }
  }
}
