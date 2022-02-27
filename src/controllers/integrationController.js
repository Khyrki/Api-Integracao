const integratesPipedriveAndBling = require('../service/integrationService');

const integrationController = async (_req, res, _next) => {
  await integratesPipedriveAndBling();
  return res.status(200).json('Integracao feita com sucesso');
};

module.exports = integrationController;
