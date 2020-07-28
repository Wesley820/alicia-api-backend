'use strict';

const { test, trait } = use('Test/Suite')('Chat');
trait('Test/ApiClient');

test('should send message to watson and receive reply', async ({
  assert,
  client,
}) => {
  const session = await client.post('/chat/session').end();
  const response = await client
    .post('/chat/message')
    .header('session_id', session.body.session_id)
    .send({ message: 'hello' })
    .end();

  response.assertStatus(200);
  assert.exists(response.body[0].text);
}).timeout(4000);

test('should return validation error when sending message without session id', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/chat/message')
    .send({ message: 'hello' })
    .end();

  response.assertStatus(400);
  assert.equal(response.body.message, 'Session id is required.');
}).timeout(4000);

test('test should return validation error when sending an empty message', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/chat/message')
    .send({ message: '' })
    .end();

  response.assertStatus(400);
  assert.equal(response.body.message, 'Message is required.');
});
