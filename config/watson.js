'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

module.exports = {
  assistant: {
    assistant_id: Env.get('WATSON_ASSISTANT_ID', null),
    apikey: Env.get('WATSON_APIKEY', null),
    url: Env.get('WATSON_URL', null),
  },
};
