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

class MessageChatController {
  async send({ request, response }) {
    try {
      if (!request.body.message) {
        return response.status(400).json({ message: 'Message is required.' });
      }

      const session_id = request.header('session_id');

      if (!session_id) {
        return response
          .status(400)
          .json({ message: 'Session id is required.' });
      }

      const messageParameters = {
        assistantId: assistant.assistant_id,
        sessionId: session_id,
        input: {
          message_type: 'text',
          text: request.body.message,
        },
      };

      const { result } = await assistantv2.message(messageParameters);
      return response.json(result.output.generic);
    } catch (error) {
      return response
        .status(error.status)
        .json({ message: 'Unexpected error while sending message.' });
    }
  }
}

module.exports = MessageChatController;
