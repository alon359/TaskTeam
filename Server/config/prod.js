const DB_NAME = process.env.MONGO_DATABASE;
const dbUsername = process.env.MONGO_USERNAME;
const dbPass = process.env.MONGO_PASSWORD;

module.exports = {
  "dbURL": `mongodb+srv://${dbUsername}:${dbPass}@${DB_NAME}.qb7w2.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
}
