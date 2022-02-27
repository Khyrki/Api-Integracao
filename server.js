const app = require('./src/app');

require('dotenv/config');

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`ouvindo na porta ${port}!`));
