const app = require('./src/app');

require('dotenv/config');

const port = process.env.PORT || 3005;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`ouvindo na porta ${port}!`));
