const axios = require('axios');

require('dotenv/config');

const blingInstance = axios.create({
  baseURL: `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_KEY}`,
});

const pipedriveInstance = axios.create({
  baseURL: `https://test-linkapi.pipedrive.com/v1/deals?api_token=${process.env.PIPEDRIVE_KEY}`,
});

module.exports = {
  blingInstance,
  pipedriveInstance,
};
