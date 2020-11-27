const mongoose = require("mongoose");
const logger = require("../services/logger.service");
const config = require('../config/DB')

// Database connection
var gDBconnect = null;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};

/** Creates a database connection
 * @throw Database error
 */
function dbConnection() {
    // If there is already a connection to the database it will return from the function
    if (gDBconnect) return;
    try {
        mongoose.connect(config.dbURL, dbOptions);

        gDBconnect = mongoose.connection;

        // DB errors handles
        gDBconnect.on('error', (err) => {
            logger.error('db.service: Database connection crashed\n\t' + err);
            gDBconnect = null;
            throw err;
        });
        // When DB connection was successful
        gDBconnect.once('open', () => {
            logger.info('Database is connection');
        });
    } catch (err) {
        logger.error('db.service: Database connection failed\n\t' + err);
        throw err;
    }
}

module.exports = {
    dbConnection,
    gDBconnect
}
