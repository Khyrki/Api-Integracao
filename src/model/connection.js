const mongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const connection = () => mongoClient
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('LinkApi'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
