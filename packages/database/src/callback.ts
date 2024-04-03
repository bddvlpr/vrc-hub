import type { RemoteCallback } from 'drizzle-orm/sqlite-proxy';

import Database from 'tauri-plugin-sql-api';

const sqlite = await Database.load('database.db');

export default (async (sql, params, _method) => {
  return await sqlite.select(sql, params);
}) satisfies RemoteCallback;
