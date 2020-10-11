const mongoose = require("mongoose");
const logger = require("../services/logger.service");
const config = require('../config')

// Database connection (Global variable)
var gDbConn = null;

/** Creates a mongoose model
 * @param collectName Data base collection name
 * @param userSchema Mongoose schema
 * @return Mongoose model
 */

/** Creates a database connection
 * @throw Database error
 */
async function connect() {
    // If there is already a connection to the database it will return from the function
    if (gDbConn) return;
    try {
        await mongoose.connect(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        gDbConn = mongoose.connection;
        logger.info('Database is connection');

        // DB errors handles
        gDbConn.on('error', (err) => {
            logger.error('db.service: Data access operation failed\n\t' + err);
            throw err;
        });
    } catch (err) {
        logger.error('db.service: Database connection failed\n\t' + err);
        throw err;
    }
}

module.exports = {
    connect,
}
