import type { ClientOptions } from 'openapi-fetch-tauri';

import createClient from 'openapi-fetch-tauri';

export function createVRChatClient(overrides?: ClientOptions) {
  return createClient({
    baseUrl: 'https://api.vrchat.cloud/api/1',
    ...overrides,
  });
}
