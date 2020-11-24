const mongoose = require("mongoose");
const logger = require("../services/logger.service");
const config = require('../config/DB')

// Database connection
var gDB = null;

/** Creates a database connection
 * @throw Database error
 */
module.exports = function dbConnect() {
    // If there is already a connection to the database it will return from the function
    if (gDB) return;
    try {
        mongoose.connect(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        gDB = mongoose.connection;

        // DB errors handles
        gDB.on('error', (err) => {
            logger.error('db.service: Database connection crashed\n\t' + err);
            gDB = null;
            throw err;
        });
        // When DB connection was successful
        gDB.once('open', () => {
            logger.info('Database is connection');
        });
    } catch (err) {
        logger.error('db.service: Database connection failed\n\t' + err);
        throw err;
    }
}
