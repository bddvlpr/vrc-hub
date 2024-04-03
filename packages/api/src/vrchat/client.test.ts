import { describe, expect, it } from 'vitest';

import { createVRChatClient } from './client';

describe(createVRChatClient, () => {
  it('should create the client', () => {
    const client = createVRChatClient();
    expect(client).toBeDefined();
  });

  it('shoud return the method core clients', () => {
    const client = createVRChatClient();
    expect(client).toHaveProperty('GET');
    expect(client).toHaveProperty('PUT');
    expect(client).toHaveProperty('POST');
    expect(client).toHaveProperty('DELETE');
    expect(client).toHaveProperty('OPTIONS');
    expect(client).toHaveProperty('HEAD');
    expect(client).toHaveProperty('PATCH');
    expect(client).toHaveProperty('TRACE');
  });
});
