import { drizzle } from 'drizzle-orm/sqlite-proxy';

import callback from './callback';
import { accounts } from './schema/accounts';

export const db = drizzle(callback, { schema: {
  accounts,
} });
