'use strict';

const { test, trait } = use('Test/Suite')('Session Chat');
trait('Test/ApiClient');

test('should return a new session key with status code 201', async ({
  assert,
  client,
}) => {
  const response = await client.post('/chat/session').end();
  response.assertStatus(201);
  assert.exists(response.body.session_id);
});
