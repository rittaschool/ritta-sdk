import { RittaAuth } from './auth.js';
import { RittaDatabase } from './database.js';
import { RittaModules } from './modules.js';
import { RittaRoles } from './roles.js';
import * as pino from 'pino';

export default abstract class Ritta {
  abstract database(): RittaDatabase;
  abstract modules(): RittaModules;
  abstract roles(): RittaRoles;
  abstract auth(): RittaAuth;
  abstract get logger(): pino.BaseLogger;
}
