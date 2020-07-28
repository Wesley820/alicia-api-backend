'use strict';
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { assistant } = require('../../../config/watson');

const assistantv2 = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: assistant.apikey,
  }),
  url: assistant.url,
});

class SessionChatController {
  async store({ request, response }) {
    try {
      const session = await assistantv2.createSession({
        assistantId: assistant.assistant_id,
      });
      return response.status(201).json(session.result);
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unexpected error when creating new session id.',
      });
    }
  }
}

module.exports = SessionChatController;
