import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';

import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const accounts = sqliteTable('accounts', {
  id: integer('id').primaryKey(),
});

export type Account = InferSelectModel<typeof accounts>;
export type NewAccount = InferInsertModel<typeof accounts>;
