const dbConfig = require('../config/db/index.js');

module.exports = {
    url: dbConfig.dbURL,
    collection: 'session',
    mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    secret: 'squirrel',
    ttl: 60 * 60 * 24 // Timeout 24H
}
