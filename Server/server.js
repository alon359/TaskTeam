// Models and packages
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const http = require('http').createServer(app);
const path = require('path')
require('dotenv').config();

// Services 
const dbService = require('./services/db.service');
const logger = require('./services/logger.service');
const pageNotFound = require('./services/pageNotFound.service');


// Express App Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true
    };
    app.use(cors(corsOptions));
}



const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');

// routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/404', pageNotFound);

// For angular
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Server creating
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});

// Connecting to database
dbService.connect()
