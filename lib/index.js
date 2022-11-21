const axios = require('axios');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    return {
      send: async (options) => {
        const { text, html, subject, to } = options;
        const email = {
          text,
          html,
          subject,
          from_email: providerOptions.senderEmail,
          from_name: providerOptions.senderName,
          to,
        };

        const url = providerOptions.apiUrl;
        const apiKey = providerOptions.apiKey;
        await axios.post(url, email, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        });
      },
    };
  },
};
